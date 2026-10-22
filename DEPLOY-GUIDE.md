# 🚀 Panduan Deploy & Update — Harsa Digitech Website

> **Website Live:** https://harsa-digitech-web.web.app  
> **Firebase Console:** https://console.firebase.google.com/project/harsa-digitech-web/overview  
> **Project ID:** `harsa-digitech-web`  
> **Akun Firebase:** billyrhmnsyh@gmail.com

---

## ⚡ Quick Reference (Paling Sering Dipakai)

```bash
# Cukup jalankan ini setiap kali ada perubahan:
firebase deploy --only hosting
```

---

## 📋 Prasyarat (Hanya Sekali Setup)

Pastikan tools berikut sudah terinstal di komputer:

| Tools | Cek Versi | Keterangan |
|-------|-----------|------------|
| Node.js | `node --version` | Minimal v18 |
| Firebase CLI | `firebase --version` | Minimal v15 |

> Jika Firebase CLI belum ada: `npm install -g firebase-tools`

---

## 🔄 Alur Kerja Update Rutin

### Langkah 1 — Edit File

Edit file yang dibutuhkan di folder `D:\harsa-digitech_dev\`:

```
harsa-digitech_dev/
├── index.html          ← Konten & struktur halaman
├── css/
│   ├── index.css       ← Desain sistem, warna, layout
│   ├── glass.css       ← Efek liquid glass & animasi
│   └── responsive.css  ← Breakpoint mobile & tablet
├── js/
│   ├── main.js         ← Tema, navigasi, form konsultasi
│   ├── estimator.js    ← Kalkulator estimasi proyek
│   ├── glass-mesh.js   ← Animasi canvas latar belakang
│   └── case-study.js   ← Data & modal studi kasus
└── assets/
    ├── images/         ← Gambar (logo, hero, portofolio)
    └── docs/           ← File PDF (Company Profile)
```

### Langkah 2 — Buka Terminal di Folder Project

Buka PowerShell atau Command Prompt, lalu arahkan ke folder project:

```powershell
cd D:\harsa-digitech_dev
```

> **Tips:** Di VS Code, tekan `` Ctrl + ` `` untuk buka terminal langsung di folder yang aktif.

### Langkah 3 — Pastikan Login Firebase

```bash
firebase login
```

Jika sudah login, output akan menampilkan:
```
Already logged in as billyrhmnsyh@gmail.com
```

Jika belum login, browser akan terbuka otomatis untuk autentikasi Google.

### Langkah 4 — Deploy!

```bash
firebase deploy --only hosting
```

**Contoh output sukses:**
```
=== Deploying to 'harsa-digitech-web'...

i  deploying hosting
i  hosting: upload complete
+  hosting: version finalized
+  hosting: release complete

+  Deploy complete!

Hosting URL: https://harsa-digitech-web.web.app
```

### Langkah 5 — Verifikasi

Buka browser dan akses:
- https://harsa-digitech-web.web.app
- Tekan `Ctrl + Shift + R` (hard refresh) agar cache browser tidak menghalangi perubahan

---

## 🎯 Skenario Update Spesifik

### Ubah Teks / Konten Halaman
1. Edit `index.html`
2. Simpan file
3. Jalankan: `firebase deploy --only hosting`

### Ubah Warna / Tampilan Visual
1. Edit `css/index.css` atau `css/glass.css`
2. Simpan file
3. Jalankan: `firebase deploy --only hosting`

### Tambah / Ganti Gambar
1. Simpan gambar baru ke folder `assets/images/`
2. Update referensi di `index.html` jika nama file berubah
3. Jalankan: `firebase deploy --only hosting`

### Update Company Profile PDF
1. Ganti file lama di `assets/docs/` dengan PDF baru
2. Pastikan nama file tetap: `Company-Profile-PT-Harsa-Digital-Teknologi.pdf`
   - Jika nama berbeda, update link di `index.html`
3. Jalankan: `firebase deploy --only hosting`

### Tambah Portofolio Baru
1. Edit `js/case-study.js` — tambah data proyek baru di array
2. Tambah gambar portofolio ke `assets/images/`
3. Jalankan: `firebase deploy --only hosting`

### Update Harga di Kalkulator Estimasi
1. Edit `js/estimator.js` — ubah nilai di objek `TYPE_CONFIGS`
2. Jalankan: `firebase deploy --only hosting`

---

## 🔍 Preview Lokal Sebelum Deploy

Sangat disarankan untuk melihat perubahan di browser lokal sebelum deploy ke publik:

**Cara 1 — Langsung buka file (paling cepat):**
```
Klik dua kali index.html → buka di browser
```

**Cara 2 — Via Python (recommended untuk test asset loading):**
```bash
python -m http.server 3000
# Buka: http://localhost:3000
```

**Cara 3 — Via Firebase Local Emulator:**
```bash
firebase serve --only hosting
# Buka: http://localhost:5000
```

---

## ⚠️ Catatan Penting

### File yang TIDAK Ikut Di-Deploy (Diabaikan)
File berikut sudah dikonfigurasi di `firebase.json` untuk tidak ikut ter-upload:
- `firebase.json` — konfigurasi Firebase
- `.firebaserc` — konfigurasi project ID
- `README.md` — dokumentasi
- `DEPLOY-GUIDE.md` — panduan ini
- File tersembunyi (`.gitignore`, dll.)

### Cache Browser
Setelah deploy, browser pengunjung lama mungkin masih menampilkan versi lama karena cache.
- File **JS dan CSS** di-cache selama **1 tahun** (agresif, untuk performa)
- Jika ada perubahan kritis di JS/CSS, tambahkan **query string** pada link-nya di `index.html`:
  ```html
  <!-- Sebelum -->
  <link rel="stylesheet" href="css/index.css">

  <!-- Sesudah (paksa browser ambil versi baru) -->
  <link rel="stylesheet" href="css/index.css?v=2">
  ```

---

## 🛠️ Troubleshooting

### Error: `Not logged in`
```bash
firebase login
```

### Error: `Project not found`
```bash
firebase use harsa-digitech-web
```

### Error: `firebase is not recognized`
Firebase CLI belum terinstal atau tidak ada di PATH:
```bash
npm install -g firebase-tools
```

### Deploy Berhasil tapi Perubahan Tidak Muncul
1. Tekan `Ctrl + Shift + R` di browser (hard refresh)
2. Coba buka di tab incognito / private
3. Tunggu 1–2 menit, lalu refresh kembali

---

## 📊 Monitoring & Analytics

Pantau traffic dan performa website di:

- **Firebase Hosting Dashboard:**  
  https://console.firebase.google.com/project/harsa-digitech-web/hosting

- **Riwayat Deploy:**  
  https://console.firebase.google.com/project/harsa-digitech-web/hosting/sites

---

## 🗂️ Riwayat Deploy

| Tanggal | Versi | Catatan |
|---------|-------|---------|
| 18 Okt 2026 | v1.0 | Initial launch — website live perdana |

> Selalu update tabel ini setiap kali melakukan deploy besar agar riwayat perubahan tercatat dengan rapi.

---

*© 2026 PT. Harsa Digital Teknologi (Harsa Digitech). Dokumen internal — panduan deployment.*
