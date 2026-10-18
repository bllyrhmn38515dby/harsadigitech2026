/**
 * PT. HARSA DIGITAL TEKNOLOGI (HARSA DIGITECH)
 * Data Portofolio Riil & Bedah Arsitektur Sistem Klien
 */

(function () {
  const modalBackdrop = document.getElementById('case-modal');
  const modalContentBody = document.getElementById('modal-content-body');
  const modalCloseBtn = document.getElementById('modal-close');

  if (!modalBackdrop || !modalContentBody) return;

  const CASE_STUDIES = {
    simapan: {
      client: 'Inspektorat Kota Bogor',
      title: 'Aplikasi SIMAPAN — Sistem Informasi Manajemen Pengawasan & Audit Internal',
      category: 'Pemerintahan & Tata Kelola (E-Gov)',
      year: 'Produksi Aktif',
      summary: 'Platform tata kelola terintegrasi untuk mendigitalkan seluruh alur pengawasan inspektorat daerah: perencanaan audit tahunan (PKPT), pelaksanaan pemeriksaan, monitoring tindak lanjut LHP (Laporan Hasil Pemeriksaan), hingga evaluasi akuntabilitas kinerja instansi.',
      challenge: 'Proses pelaporan audit manual menghasilkan penumpukan dokumen fisik dan keterlambatan pemantauan batas waktu tindak lanjut rekomendasi audit oleh OPD (Organisasi Perangkat Daerah).',
      solution: [
        'Merancang arsitektur workflow approval berjenjang dengan notifikasi otomatis mendekati batas waktu kepatuhan.',
        'Mengimplementasikan penyimpanan berkas terenkripsi dan role-based access control (RBAC) yang memisahkan akses Auditor, Pengendali Teknis, dan OPD terperiksa.',
        'Menyediakan dashboard analitik real-time yang memvisualisasikan persentase kepatuhan tindak lanjut se-Kota Bogor.'
      ],
      diagram: `
  [ OPD Pelapor / Pemda User ] ──▶ [ Web Portal SIMAPAN ]
                                          │
                                          ▼
                             [ REST API & Workflow Engine ]
                                          │
                         ┌────────────────┴────────────────┐
                         ▼                                 ▼
             [ Database Dokumen LHP ]           [ Notification Scheduler ]
             (Audit Trail & Enkripsi)            (Alert WhatsApp & Email)
      `,
      results: [
        { metric: '100%', label: 'Digitalisasi Alur Tindak Lanjut LHP' },
        { metric: '-65%', label: 'Pangkas Waktu Rekapitulasi Laporan' },
        { metric: 'Multi-OPD', label: 'Terintegrasi Lintas Dinas Kota Bogor' },
        { metric: 'Audit Ready', label: 'Rekam Jejak Dokumen Terverifikasi' }
      ],
      quote: '“Aplikasi SIMAPAN meningkatkan efisiensi dan transparansi pengawasan internal secara signifikan. Tim Harsa Digital Teknologi sangat responsif dalam menerjemahkan regulasi birokrasi ke dalam sistem digital yang mudah dipakai.” — Inspektorat Kota Bogor'
    },
    silajang: {
      client: 'Satpol PP Kota Bogor',
      title: 'Aplikasi SILAJANG — Sistem Informasi Layanan dan Penindakan Ketertiban Umum',
      category: 'Keamanan, Ketertiban & Smart City',
      year: 'Produksi Aktif',
      summary: 'Sistem operasional komprehensif bagi personel penegak peraturan daerah untuk mencatat kejadian pelanggaran trantibum, memetakan titik rawan pelanggaran kota, serta memonitor status penindakan dari pelaporan hingga sidang peradilan.',
      challenge: 'Personel patroli lapangan memerlukan sarana pencatatan cepat tanpa hambatan jaringan serta kemampuan plotting koordinat geospasial titik pelanggaran secara akurat.',
      solution: [
        'Pembangunan aplikasi antarmuka responsif yang ringan dan dioptimalkan untuk perangkat smartphone petugas di lapangan.',
        'Integrasi Geolocation GIS untuk pemetaan heatmap titik pelanggaran perda (PKL, reklame tak berizin, trantibum).',
        'Fitur digitalisasi berita acara pemeriksaan (BAP) cepat dengan tanda tangan digital dan foto bukti lapangan.'
      ],
      diagram: `
  [ Petugas Lapangan Mobile ] ──▶ [ Geolocation API & Foto Bukti ]
                                          │
                                          ▼
                              [ Gateway SILAJANG ]
                                          │
                         ┌────────────────┴────────────────┐
                         ▼                                 ▼
               [ GIS Spatial Mapping ]           [ Command Center Dashboard ]
               (Titik Rawan Trantibum)            (Monitoring Pimpinan Satpol)
      `,
      results: [
        { metric: 'Real-Time', label: 'Disposisi Penugasan Personel' },
        { metric: 'Akurat', label: 'Pemetaan Spasial GIS Pelanggaran' },
        { metric: '-80%', label: 'Penghematan Penggunaan Kertas BAP' },
        { metric: 'Terdokumentasi', label: 'Arsip Bukti Foto Digital' }
      ],
      quote: '“SILAJANG memudahkan pemantauan ketertiban kota secara real-time dan transparan. Kolaborasi bersama Harsa Digitech membawa kemajuan nyata bagi pelayanan Satpol PP Kota Bogor.” — Satpol PP Kota Bogor'
    },
    eralf: {
      client: 'Emiral Rangga Law Firm',
      title: 'Website ERALF.COM — Portal Digital Kantor Hukum & Konsultasi Legal Profesional',
      category: 'LegalTech & Corporate Portal',
      year: 'Produksi Aktif',
      summary: 'Platform resmi representasi korporat Emiral Rangga Law Firm yang dirancang dengan estetika mewah, performa kecepatan tinggi, integrasi penjadwalan konsultasi perkara hukum, dan publikasi wawasan regulasi bisnis.',
      challenge: 'Firma hukum membutuhkan kehadiran digital bertaraf internasional yang memancarkan otoritas profesionalisme, kepercayaan tinggi, serta mudah ditemukan oleh korporasi yang memerlukan pendampingan litigasi.',
      solution: [
        'Menerapkan arsitektur web modern yang dioptimalkan untuk Core Web Vitals (skor kecepatan 95+).',
        'Struktur SEO semantik yang menempatkan artikel kepatuhan hukum di posisi strategis mesin pencari Google.',
        'Sistem reservasi konsultasi legal online yang aman dengan integrasi formulir terenkripsi.'
      ],
      diagram: `
  [ Calon Klien / Korporasi ] ──▶ [ ERALF.com Responsive Web ]
                                         │
                                         ▼
                            [ CMS & Reservasi Engine ]
                                         │
                         ┌───────────────┴───────────────┐
                         ▼                               ▼
               [ Notifikasi WhatsApp ]         [ Manajemen Jadwal Advokat ]
               (Respon Cepat Klien)             (Kalender Sesi Konsultasi)
      `,
      results: [
        { metric: '98/100', label: 'Skor Performa Google Lighthouse' },
        { metric: '+120%', label: 'Peningkatan Pertanyaan Klien Masuk' },
        { metric: 'SEO Top', label: 'Peringkat Layanan Hukum Regional' },
        { metric: 'SSL Grade A', label: 'Standar Enkripsi Keamanan Web' }
      ],
      quote: '“Website ERALF.COM yang dirancang Harsa Digital Teknologi memberikan impresi yang sangat berkelas bagi para mitra dan klien korporasi kami.” — Emiral Rangga Law Firm'
    },
    emetrologi: {
      client: 'Dinas Koperasi dan UMKM Kota Bogor',
      title: 'Aplikasi EMETROLOGI — Digitalisasi Pelayanan Uji Tera & Metrologi Legal UMKM',
      category: 'Layanan Publik & Perlindungan Konsumen',
      year: 'Produksi Aktif',
      summary: 'Sistem informasi pelayanan pengujian, kalibrasi, dan tera ulang Alat-Alat Ukur, Takar, Timbang, dan Perlengkapannya (UTTP) bagi para pedagang pasar dan UMKM se-Kota Bogor demi mewujudkan Daerah Tertib Ukur.',
      challenge: 'Pedagang pasar dan UMKM kesulitan mengetahui jadwal tera ulang timbangan mereka, dan proses pendaftaran konvensional sering memicu antrean panjang pada pos metrologi.',
      solution: [
        'Portal pendaftaran dan verifikasi berkas permohonan tera/tera ulang secara online.',
        'Penerbitan Surat Keterangan Hasil Pengujian (SKHP) dan sertifikat tera dengan QR-Code verifikasi keaslian.',
        'Notifikasi pengingat masa berlaku segel tera timbangan yang dikirimkan langsung ke kontak pedagang/UMKM.'
      ],
      diagram: `
  [ Pedagang / Pemilik UTTP ] ──▶ [ Portal Pendaftaran EMETROLOGI ]
                                         │
                                         ▼
                             [ Verifikasi & Penjadwalan ]
                                         │
                         ┌───────────────┴───────────────┐
                         ▼                               ▼
               [ Penerbitan QR SKHP ]          [ Peta Sebaran UTTP Tertib Ukur ]
               (Validasi Segel Tera)            (Dashboard Evaluasi Dinas)
      `,
      results: [
        { metric: 'Tertib Ukur', label: 'Kepatuhan Standar Metrologi' },
        { metric: 'QR-Code', label: 'Verifikasi Validitas Segel Timbangan' },
        { metric: '-70%', label: 'Waktu Antrean Pendaftaran Pelayanan' },
        { metric: 'Data UMKM', label: 'Database Alat Ukur Terekam Rapi' }
      ],
      quote: '“EMETROLOGI membantu kami melindungi hak konsumen dan membina UMKM agar jujur dan akurat dalam timbangan dagang. Harsa Digitech sangat andal dalam merealisasikannya.” — Dinas Koperasi dan UMKM Kota Bogor'
    },
    tjslp: {
      client: 'Bappenda Kota Bogor',
      title: 'Aplikasi TJSLP / CSR — Monitoring Tanggung Jawab Sosial & Lingkungan Perusahaan',
      category: 'Tata Kelola Pendapatan & CSR Korporat',
      year: 'Produksi Aktif',
      summary: 'Platform monitoring dan sinergi antara Pemerintah Kota Bogor dan badan usaha/swasta dalam menyelaraskan program CSR dengan prioritas pembangunan kota (fasilitas umum, ruang terbuka hijau, dan bantuan sosial).',
      challenge: 'Sulitnya mengonsolidasikan data realisasi CSR dari puluhan perusahaan secara transparan, mengakibatkan terjadinya duplikasi proyek di satu wilayah sementara wilayah lain kekurangan bantuan.',
      solution: [
        'Katalog usulan program pembangunan kota yang dapat dipilih oleh perusahaan sponsor CSR.',
        'Dashboard pelaporan progres fisik dan alokasi anggaran proyek CSR oleh korporasi.',
        'Penyajian data geospasial realisasi CSR untuk memastikan pemerataan pembangunan publik se-Kota Bogor.'
      ],
      diagram: `
  [ Perusahaan Mitra CSR ] ──▶ [ Portal Pengajuan & Realisasi TJSLP ]
                                         │
                                         ▼
                            [ Validasi Tim Koordinasi Pemkot ]
                                         │
                         ┌───────────────┴───────────────┐
                         ▼                               ▼
              [ Peta Sebaran Program ]         [ Laporan Akuntabilitas Publik ]
              (Cegah Tumpang Tindih)            (Bappenda Kota Bogor)
      `,
      results: [
        { metric: 'Transparan', label: 'Monitoring Alokasi Program CSR' },
        { metric: 'Multi-Sektor', label: 'Kemitraan Swasta & Pemda' },
        { metric: 'Merata', label: 'Distribusi Pembangunan Berkeadilan' },
        { metric: 'Zero Delay', label: 'Pelaporan Berbasis Digital' }
      ],
      quote: '“Kolaborasi pembangunan kota bersama dunia usaha kini jauh lebih terarah dan akuntabel berkat Aplikasi TJSLP yang dibangun oleh Harsa Digital Teknologi.” — Bappenda Kota Bogor'
    }
  };

  function openCaseModal(caseId) {
    const data = CASE_STUDIES[caseId];
    if (!data) return;

    modalContentBody.innerHTML = `
      <div class="modal-case-header">
        <span class="category-pill">${data.category}</span>
        <h2 id="modal-case-title" class="modal-heading">${data.title}</h2>
        <div class="modal-subheading">
          <strong>Pemberi Tugas: ${data.client}</strong> • <span class="text-subtle">${data.year}</span>
        </div>
      </div>

      <div class="modal-section">
        <h3 class="modal-sec-title">Deskripsi Sistem</h3>
        <p class="modal-sec-text">${data.summary}</p>
      </div>

      <div class="modal-two-col">
        <div class="modal-box glass-panel">
          <h4 class="box-sub">Tantangan Kebutuhan Klien</h4>
          <p class="modal-sec-text">${data.challenge}</p>
        </div>
        <div class="modal-box glass-panel">
          <h4 class="box-sub">Solusi Rekayasa Harsa Digitech</h4>
          <ul class="modal-list">
            ${data.solution.map(s => `<li>✓ ${s}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="modal-section">
        <h3 class="modal-sec-title">Alur & Topologi Arsitektur Sistem</h3>
        <pre class="architecture-diagram"><code>${data.diagram}</code></pre>
      </div>

      <div class="modal-section">
        <h3 class="modal-sec-title">Hasil & Dampak Nyata bagi Pengguna</h3>
        <div class="modal-metrics-grid">
          ${data.results.map(r => `
            <div class="m-card glass-panel">
              <span class="m-big">${r.metric}</span>
              <span class="m-desc">${r.label}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="modal-quote glass-panel">
        <p class="quote-text">${data.quote}</p>
      </div>

      <div class="modal-footer-cta">
        <button class="btn btn-primary btn-lg liquid-btn" id="btn-modal-discuss">
          <span>Diskusikan Kebutuhan Sistem Serupa Bersama Kami</span>
          <svg viewBox="0 0 20 20" fill="currentColor" class="btn-icon">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </button>
      </div>
    `;

    // Add styles for modal elements
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      .modal-case-header { margin-bottom: 2rem; border-bottom: 1px solid var(--glass-border-subtle); padding-bottom: 1.5rem; }
      .modal-heading { font-size: 1.85rem; margin: 0.85rem 0 0.5rem; line-height: 1.25; }
      .modal-subheading { font-size: 0.95rem; }
      .modal-subheading strong { color: var(--brand-orange); }
      .modal-sec-title { font-size: 1.2rem; margin-bottom: 0.75rem; color: var(--text-main); }
      .modal-sec-text { font-size: 0.95rem; line-height: 1.65; color: var(--text-muted); }
      .modal-section { margin-bottom: 2rem; }
      .modal-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem; }
      .modal-box { padding: 1.5rem; border-radius: var(--radius-md); }
      .box-sub { font-size: 1.05rem; margin-bottom: 0.75rem; color: var(--text-main); }
      .modal-list li { font-size: 0.88rem; margin-bottom: 0.5rem; color: var(--text-muted); }
      .architecture-diagram { background: #0f172a; color: #38bdf8; padding: 1.5rem; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.82rem; overflow-x: auto; line-height: 1.4; border: 1px solid rgba(56, 189, 248, 0.3); }
      .modal-metrics-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
      .m-card { padding: 1.2rem; text-align: center; border-radius: var(--radius-md); }
      .m-big { font-family: var(--font-heading); font-size: 1.35rem; font-weight: 800; color: var(--brand-orange); display: block; margin-bottom: 0.25rem; }
      .m-desc { font-size: 0.75rem; color: var(--text-subtle); line-height: 1.3; display: block; }
      .modal-quote { padding: 1.4rem; border-left: 4px solid var(--brand-orange); font-style: italic; margin-bottom: 2rem; border-radius: var(--radius-md); }
      .modal-footer-cta { text-align: center; }
      @media (max-width: 768px) {
        .modal-two-col { grid-template-columns: 1fr; }
        .modal-metrics-grid { grid-template-columns: repeat(2, 1fr); }
      }
    `;
    modalContentBody.appendChild(styleEl);

    // Event listener for discuss button inside modal
    const discussBtn = document.getElementById('btn-modal-discuss');
    if (discussBtn) {
      discussBtn.addEventListener('click', () => {
        closeCaseModal();
        const contactSection = document.getElementById('kontak');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        const messageTextarea = document.getElementById('contact-message');
        if (messageTextarea) {
          messageTextarea.value = `Saya tertarik dengan portofolio "${data.title}" (Klien: ${data.client}). Kami ingin mendiskusikan implementasi solusi serupa untuk instansi / perusahaan kami.`;
        }
      });
    }

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCaseModal() {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Attach click to all case cards
  const viewButtons = document.querySelectorAll('.btn-view-case');
  viewButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const caseId = btn.getAttribute('data-case');
      openCaseModal(caseId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeCaseModal);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeCaseModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeCaseModal();
    }
  });
})();
