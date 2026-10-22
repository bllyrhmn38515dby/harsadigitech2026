/**
 * HARSA DIGITECH — Google Apps Script: Form Konsultasi Handler
 * 
 * =====================================================================
 * LANGKAH AKTIVASI & OTORISASI IZIN GOOGLE (WAJIB DILAKUKAN 1x):
 * =====================================================================
 * 1. Buka project script Anda di: https://script.google.com
 * 2. Paste seluruh isi kode file ini ke editor Apps Script.
 * 3. Simpan (Ctrl+S / klik ikon disket).
 * 4. Di toolbar bagian atas editor, pada menu dropdown fungsi (sebelah tombol "Jalankan" / "Run"):
 *    -> Pilih fungsi: "testKirim"
 * 5. Klik tombol "Jalankan" (Run).
 * 6. Google akan memunculkan popup: "Diperlukan otorisasi" (Authorization required):
 *    -> Klik "Tinjau izin" (Review permissions)
 *    -> Pilih akun Google Anda (harsadigitech@gmail.com)
 *    -> Klik tulisan kecil "Lanjutan" (Advanced) di kiri bawah
 *    -> Klik "Buka HDT Form Handler (tidak aman)" / "Go to ... (unsafe)"
 *    -> Klik "Izinkan" (Allow)
 * 7. Setelah diizinkan, fungsi testKirim akan otomatis membuat Spreadsheet & mengirim 1 email test!
 * 8. Jika belum di-deploy sebagai Web App (atau ingin update):
 *    -> Klik "Deploy" -> "Kelola deployment" (atau "New deployment")
 *    -> Pastikan:
 *       - Jenis: Web app
 *       - Execute as: Me (harsadigitech@gmail.com)
 *       - Who has access: Anyone (Siapa saja)
 *    -> Salin Web App URL (berakhiran /exec)
 *    -> Paste URL ke js/main.js pada APPS_SCRIPT_URL
 * =====================================================================
 */

// =====================================================================
// KONFIGURASI — Sesuaikan jika diperlukan
// =====================================================================
const CONFIG = {
  SPREADSHEET_NAME: "Harsa Digitech - Konsultasi Leads",  // Nama Google Sheet di Drive
  SHEET_TAB_NAME: "Leads",                                // Nama tab/sheet
  NOTIFY_EMAIL: "harsadigitech@gmail.com",               // Email penerima notifikasi
  COMPANY_NAME: "PT. Harsa Digital Teknologi"
};

// =====================================================================
// MAIN HANDLER — Menangani POST request dari form
// =====================================================================
function doPost(e) {
  try {
    // Parse data dari form
    const data = JSON.parse(e.postData.contents);

    // Simpan ke Google Spreadsheet
    saveToSheet(data);

    // Kirim notifikasi email
    sendEmailNotification(data);

    // Return sukses (dengan CORS header)
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Data berhasil diterima" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle preflight OPTIONS request (CORS)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok", message: "HDT Form Handler aktif" }))
    .setMimeType(ContentService.MimeType.JSON);
}

// =====================================================================
// SAVE TO SPREADSHEET
// =====================================================================
function saveToSheet(data) {
  let spreadsheet;

  // Cari spreadsheet yang sudah ada, atau buat baru
  const files = DriveApp.getFilesByName(CONFIG.SPREADSHEET_NAME);
  if (files.hasNext()) {
    spreadsheet = SpreadsheetApp.open(files.next());
  } else {
    spreadsheet = SpreadsheetApp.create(CONFIG.SPREADSHEET_NAME);
  }

  // Cari tab "Leads" atau buat baru
  let sheet = spreadsheet.getSheetByName(CONFIG.SHEET_TAB_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(CONFIG.SHEET_TAB_NAME);

    // Buat header kolom
    const headers = [
      "Timestamp",
      "Nama",
      "Email",
      "No. HP",
      "Layanan",
      "Budget",
      "Pesan / Deskripsi Proyek",
      "Sumber"
    ];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

    // Format header
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground("#1a3a5c");
    headerRange.setFontColor("#ffffff");
    headerRange.setFontWeight("bold");
    sheet.setFrozenRows(1);

    // Set lebar kolom
    sheet.setColumnWidth(1, 160); // Timestamp
    sheet.setColumnWidth(2, 160); // Nama
    sheet.setColumnWidth(3, 200); // Email
    sheet.setColumnWidth(4, 140); // No. HP
    sheet.setColumnWidth(5, 200); // Layanan
    sheet.setColumnWidth(6, 160); // Budget
    sheet.setColumnWidth(7, 400); // Pesan
    sheet.setColumnWidth(8, 120); // Sumber
  }

  // Format timestamp WIB
  const now = new Date();
  const wibOffset = 7 * 60 * 60 * 1000;
  const wibTime = new Date(now.getTime() + wibOffset);
  const timestamp = Utilities.formatDate(wibTime, "UTC", "dd/MM/yyyy HH:mm:ss") + " WIB";

  // Tambah baris data baru
  sheet.appendRow([
    timestamp,
    data.name || "-",
    data.email || "-",
    data.phone || "-",
    data.service || "-",
    data.budget || "-",
    data.message || "-",
    "Website harsa-digitech-web.web.app"
  ]);
}

// =====================================================================
// SEND EMAIL NOTIFICATION
// =====================================================================
function sendEmailNotification(data) {
  const subject = `[HDT Lead Baru] Konsultasi dari ${data.name} — ${data.service || "Umum"}`;

  const now = new Date();
  const wibOffset = 7 * 60 * 60 * 1000;
  const wibTime = new Date(now.getTime() + wibOffset);
  const timestamp = Utilities.formatDate(wibTime, "UTC", "dd MMMM yyyy, HH:mm") + " WIB";

  const htmlBody = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 0;">
      
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #0d2137 0%, #1a3a5c 100%); padding: 32px 40px; border-radius: 12px 12px 0 0;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">🔔 Lead Konsultasi Baru</h1>
        <p style="color: #7eb3e0; margin: 8px 0 0; font-size: 14px;">${CONFIG.COMPANY_NAME}</p>
      </div>

      <!-- Body -->
      <div style="background: #ffffff; padding: 32px 40px; border-left: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0;">
        
        <p style="color: #64748b; font-size: 14px; margin: 0 0 24px;">Formulir konsultasi baru diterima pada <strong>${timestamp}</strong> dari website Harsa Digitech.</p>

        <!-- Data Grid -->
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr style="background: #f1f5f9;">
            <td style="padding: 12px 16px; font-size: 13px; color: #64748b; font-weight: 600; width: 35%; border-bottom: 1px solid #e2e8f0;">👤 Nama</td>
            <td style="padding: 12px 16px; font-size: 14px; color: #1e293b; font-weight: 700; border-bottom: 1px solid #e2e8f0;">${data.name || "-"}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-size: 13px; color: #64748b; font-weight: 600; border-bottom: 1px solid #e2e8f0;">📧 Email</td>
            <td style="padding: 12px 16px; font-size: 14px; color: #1e293b; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${data.email}" style="color: #2563eb;">${data.email || "-"}</a></td>
          </tr>
          <tr style="background: #f1f5f9;">
            <td style="padding: 12px 16px; font-size: 13px; color: #64748b; font-weight: 600; border-bottom: 1px solid #e2e8f0;">📱 No. HP / WA</td>
            <td style="padding: 12px 16px; font-size: 14px; color: #1e293b; border-bottom: 1px solid #e2e8f0;"><a href="https://wa.me/${(data.phone || "").replace(/\D/g, "")}" style="color: #16a34a;">${data.phone || "-"}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-size: 13px; color: #64748b; font-weight: 600; border-bottom: 1px solid #e2e8f0;">🛠️ Layanan</td>
            <td style="padding: 12px 16px; font-size: 14px; color: #1e293b; border-bottom: 1px solid #e2e8f0;">${data.service || "-"}</td>
          </tr>
          <tr style="background: #f1f5f9;">
            <td style="padding: 12px 16px; font-size: 13px; color: #64748b; font-weight: 600; border-bottom: 1px solid #e2e8f0;">💰 Estimasi Budget</td>
            <td style="padding: 12px 16px; font-size: 14px; color: #1e293b; font-weight: 600; border-bottom: 1px solid #e2e8f0;">${data.budget || "-"}</td>
          </tr>
        </table>

        <!-- Pesan -->
        <div style="background: #f8fafc; border-left: 4px solid #2563eb; border-radius: 0 8px 8px 0; padding: 16px 20px; margin-bottom: 28px;">
          <p style="font-size: 13px; color: #64748b; font-weight: 600; margin: 0 0 8px;">💬 PESAN / DESKRIPSI PROYEK:</p>
          <p style="font-size: 14px; color: #1e293b; margin: 0; line-height: 1.6; white-space: pre-wrap;">${data.message || "-"}</p>
        </div>

        <!-- CTA Buttons -->
        <div style="text-align: center; margin-bottom: 8px;">
          <a href="mailto:${data.email}" style="display: inline-block; background: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 600; margin-right: 12px;">📧 Balas Email</a>
          <a href="https://wa.me/${(data.phone || "").replace(/\D/g, "")}?text=Halo%20${encodeURIComponent(data.name || "")}%2C%20terima%20kasih%20telah%20menghubungi%20PT.%20Harsa%20Digital%20Teknologi!" style="display: inline-block; background: #16a34a; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 600;">💬 Chat WhatsApp</a>
        </div>
      </div>

      <!-- Footer -->
      <div style="background: #f1f5f9; padding: 20px 40px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none; text-align: center;">
        <p style="color: #94a3b8; font-size: 12px; margin: 0;">Email ini dikirim otomatis oleh sistem website <strong>PT. Harsa Digital Teknologi</strong><br>harsa-digitech-web.web.app</p>
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: CONFIG.NOTIFY_EMAIL,
    subject: subject,
    htmlBody: htmlBody,
    replyTo: data.email || CONFIG.NOTIFY_EMAIL
  });
}

// =====================================================================
// FUNGSI TEST & AKTIVASI OTORISASI
// Jalankan fungsi ini 1x di editor Apps Script untuk memicu izin akses Google!
// =====================================================================
function testKirim() {
  const dummyData = {
    name: "Billy Test",
    email: "billyrhmnsyh@gmail.com",
    phone: "081234567890",
    service: "Custom Software Development",
    budget: "Rp 25 - 50 Juta",
    message: "Ini adalah pengujian otomatis integrasi Google Sheets & Email Notifikasi PT Harsa Digital Teknologi."
  };

  saveToSheet(dummyData);
  sendEmailNotification(dummyData);
  Logger.log("✅ Berhasil! Spreadsheet dibuat/diupdate dan email notifikasi telah terkirim.");
}

