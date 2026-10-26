/**
 * PT. HARSA DIGITAL TEKNOLOGI (HARSA DIGITECH)
 * Premium Portfolio Case Study Modal — Full Interactive Experience
 * Features: full-screen modal, image gallery, lightbox, timeline, animated metrics,
 *           tech stack badges, architecture diagram, prev/next navigation
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────────────────────
     DATA STUDI KASUS LENGKAP
  ───────────────────────────────────────────────────────────── */
  const CASE_STUDIES = [
    {
      id: 'simapan',
      client: 'Inspektorat Kota Bogor',
      title: 'Aplikasi SIMAPAN',
      subtitle: 'Sistem Informasi Manajemen Pengawasan & Audit Internal',
      category: 'E-Government · Pengawasan & Tata Kelola',
      accentColor: '#1e3a8a',
      accentGrad: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
      bannerImage: 'assets/images/mockup-simapan.jpg',
      year: 'Produksi Aktif',
      summary: 'Platform tata kelola terintegrasi untuk mendigitalkan seluruh alur pengawasan Inspektorat Daerah: perencanaan audit tahunan (PKPT), pelaksanaan pemeriksaan lapangan, monitoring tindak lanjut Laporan Hasil Pemeriksaan (LHP), hingga evaluasi akuntabilitas kinerja OPD se-Kota Bogor.',
      challenge: 'Proses pelaporan audit manual menciptakan penumpukan dokumen fisik yang masif dan menyebabkan keterlambatan kritis dalam pemantauan batas waktu tindak lanjut rekomendasi audit oleh puluhan OPD (Organisasi Perangkat Daerah).',
      solutions: [
        'Merancang arsitektur workflow approval berjenjang dengan notifikasi otomatis mendekati batas waktu kepatuhan tindak lanjut LHP.',
        'Mengimplementasikan penyimpanan berkas terenkripsi dan Role-Based Access Control (RBAC) yang memisahkan akses Auditor, Pengendali Teknis, dan OPD terperiksa.',
        'Menyediakan dashboard analitik real-time yang memvisualisasikan persentase kepatuhan tindak lanjut se-Kota Bogor secara komprehensif.'
      ],
      timeline: [
        { phase: 'Fase 1 — Discovery', title: 'Analisis Kebutuhan & Regulasi', desc: 'Pendalaman regulasi audit internal pemerintah, pemetaan proses bisnis eksisting, dan wawancara intensif dengan auditor Inspektorat.' },
        { phase: 'Fase 2 — Architecture', title: 'Desain Sistem & Prototipe', desc: 'Perancangan skema database, arsitektur REST API, desain alur workflow approval berjenjang, dan pembuatan UI prototype interaktif.' },
        { phase: 'Fase 3 — Development', title: 'Pembangunan & Integrasi', desc: 'Implementasi full-stack: modul PKPT, pelaksanaan audit, monitoring tindak lanjut LHP, notifikasi otomatis, dan enkripsi dokumen.' },
        { phase: 'Fase 4 — Go-Live', title: 'UAT, Pelatihan & Peluncuran', desc: 'User Acceptance Testing multi-OPD, pelatihan pegawai Inspektorat dan OPD, serta peluncuran resmi ke lingkungan produksi.' }
      ],
      techStack: [
        { name: 'PostgreSQL', color: '#336791', icon: 'PG' },
        { name: 'Node.js', color: '#68a063', icon: 'NJ' },
        { name: 'REST API', color: '#f25822', icon: 'API' },
        { name: 'RBAC Auth', color: '#7c3aed', icon: 'RB' },
        { name: 'Vue.js', color: '#41b883', icon: 'VU' },
        { name: 'Enkripsi AES', color: '#0f766e', icon: 'AES' },
        { name: 'WhatsApp Bot', color: '#25d366', icon: 'WA' },
        { name: 'Chart.js', color: '#ff6384', icon: 'CH' }
      ],
      architecture: `
  ┌──────────────────────────────────────────────────────────────────┐
  │                     SIMAPAN SYSTEM ARCHITECTURE                  │
  └──────────────────────────────────────────────────────────────────┘

  [ OPD Pelapor / Auditor ]                 [ Pimpinan Inspektorat ]
           │                                          │
           ▼                                          ▼
  ┌──────────────────────────────────────────────────────────┐
  │              Web Portal SIMAPAN (Vue.js SPA)              │
  │         Role: Admin / Auditor / OPD / Pimpinan           │
  └──────────────────────────────────────────────────────────┘
                           │
                           ▼
              ┌────────────────────────┐
              │   REST API (Node.js)   │
              │   Workflow Engine      │
              │   JWT + RBAC Auth      │
              └────────────────────────┘
                  │              │
          ┌───────┘              └───────┐
          ▼                             ▼
  ┌───────────────┐           ┌──────────────────┐
  │  PostgreSQL   │           │ Notification Hub  │
  │  Database     │           │ (WA Bot + Email)  │
  │  (Audit Trail │           │ Reminder Deadline │
  │   & Enkripsi) │           │ LHP Tindak Lanjut │
  └───────────────┘           └──────────────────┘`,
      results: [
        { metric: '100%', desc: 'Digitalisasi Alur Tindak Lanjut LHP' },
        { metric: '−65%', desc: 'Pangkas Waktu Rekapitulasi Laporan' },
        { metric: 'Multi-OPD', desc: 'Terintegrasi Lintas Dinas Kota Bogor' },
        { metric: 'Audit Ready', desc: 'Rekam Jejak Dokumen Terverifikasi' }
      ],
      quote: 'Aplikasi SIMAPAN meningkatkan efisiensi dan transparansi pengawasan internal secara signifikan. Tim Harsa Digital Teknologi sangat responsif dalam menerjemahkan regulasi birokrasi ke dalam sistem digital yang mudah dipakai.',
      quoteAuthor: '— Inspektorat Kota Bogor'
    },
    {
      id: 'silajang',
      client: 'Satpol PP Kota Bogor',
      title: 'Aplikasi SILAJANG',
      subtitle: 'Sistem Informasi Layanan dan Penindakan Ketertiban Umum',
      category: 'Smart City · Keamanan & Ketertiban Umum',
      accentColor: '#f25822',
      accentGrad: 'linear-gradient(135deg, #b45309 0%, #f25822 100%)',
      bannerImage: 'assets/images/mockup-silajang.jpg',
      year: 'Produksi Aktif',
      summary: 'Sistem operasional komprehensif bagi personel penegak peraturan daerah untuk mencatat kejadian pelanggaran trantibum, memetakan titik rawan pelanggaran kota secara geospasial, serta memonitor status penindakan dari pelaporan lapangan hingga sidang peradilan.',
      challenge: 'Personel patroli lapangan memerlukan sarana pencatatan cepat yang dapat digunakan di area dengan keterbatasan jaringan, serta kemampuan plotting koordinat geospasial titik pelanggaran secara akurat langsung dari smartphone.',
      solutions: [
        'Pembangunan aplikasi antarmuka responsif yang ringan dan dioptimalkan untuk perangkat smartphone petugas di lapangan dengan fitur offline mode.',
        'Integrasi Geolocation GIS untuk pemetaan heatmap titik pelanggaran perda (PKL, reklame tak berizin, gangguan trantibum) secara real-time.',
        'Fitur digitalisasi Berita Acara Pemeriksaan (BAP) cepat dengan tanda tangan digital, foto bukti lapangan, dan otomatisasi routing ke command center.'
      ],
      timeline: [
        { phase: 'Fase 1 — Research', title: 'Field Study & Process Mapping', desc: 'Pengamatan langsung operasional Satpol PP, pemetaan alur penindakan eksisting, dan identifikasi titik kritis hambatan digital.' },
        { phase: 'Fase 2 — Design', title: 'UX Mobile-First & GIS Design', desc: 'Perancangan antarmuka mobile-first untuk petugas lapangan, integrasi GIS mapping engine, dan desain command center dashboard.' },
        { phase: 'Fase 3 — Build', title: 'Pengembangan & Uji Lapangan', desc: 'Implementasi modul BAP digital, geolocation tracking, heatmap pelanggaran, dan sistem disposisi real-time ke personel.' },
        { phase: 'Fase 4 — Deploy', title: 'Pelatihan Personel & Go-Live', desc: 'Pelatihan intensif seluruh petugas Satpol PP, sesi simulasi operasional lapangan, dan peluncuran ke environment produksi.' }
      ],
      techStack: [
        { name: 'Geolocation GIS', color: '#059669', icon: 'GIS' },
        { name: 'Leaflet.js', color: '#199900', icon: 'LF' },
        { name: 'Mobile Web', color: '#f25822', icon: 'MW' },
        { name: 'MySQL', color: '#4479a1', icon: 'SQL' },
        { name: 'Laravel', color: '#ff2d20', icon: 'LV' },
        { name: 'Tanda Tangan Digital', color: '#7c3aed', icon: 'TTD' },
        { name: 'PWA Offline', color: '#0284c7', icon: 'PWA' },
        { name: 'REST API', color: '#f25822', icon: 'API' }
      ],
      architecture: `
  ┌──────────────────────────────────────────────────────────────────┐
  │                   SILAJANG SYSTEM ARCHITECTURE                   │
  └──────────────────────────────────────────────────────────────────┘

  [ Petugas Lapangan (Mobile) ]             [ Command Center ]
         │                                         │
         │  GPS + Foto Bukti                       │  Monitoring
         ▼                                         ▼
  ┌────────────────┐                   ┌───────────────────────┐
  │  Mobile App    │                   │  Dashboard Pimpinan   │
  │  PWA Offline   │──── REST API ────▶│  Real-Time Overview   │
  │  BAP Digital   │                   │  Statistik Penindakan │
  └────────────────┘                   └───────────────────────┘
                           │
                           ▼
              ┌────────────────────────┐
              │   Gateway SILAJANG     │
              │   Laravel Backend      │
              │   API & Auth Layer     │
              └────────────────────────┘
                  │              │
          ┌───────┘              └───────┐
          ▼                             ▼
  ┌───────────────┐           ┌──────────────────┐
  │  MySQL DB     │           │  GIS Spatial DB   │
  │  Kasus & BAP  │           │  Heatmap Engine   │
  │  Audit Trail  │           │  Leaflet.js Maps  │
  └───────────────┘           └──────────────────┘`,
      results: [
        { metric: 'Real-Time', desc: 'Disposisi Penugasan Personel' },
        { metric: 'Akurat', desc: 'Pemetaan Spasial GIS Pelanggaran' },
        { metric: '−80%', desc: 'Penghematan Penggunaan Kertas BAP' },
        { metric: 'Terdokumentasi', desc: 'Arsip Bukti Foto Digital Lapangan' }
      ],
      quote: 'SILAJANG memudahkan pemantauan ketertiban kota secara real-time dan transparan. Kolaborasi bersama Harsa Digitech membawa kemajuan nyata bagi pelayanan dan kinerja Satpol PP Kota Bogor.',
      quoteAuthor: '— Satpol PP Kota Bogor'
    },
    {
      id: 'eralf',
      client: 'Emiral Rangga Law Firm',
      title: 'Website ERALF.COM',
      subtitle: 'Portal Digital Kantor Hukum & Konsultasi Legal Profesional',
      category: 'LegalTech · Corporate Portal & Branding',
      accentColor: '#92400e',
      accentGrad: 'linear-gradient(135deg, #1c1917 0%, #92400e 60%, #d97706 100%)',
      bannerImage: 'assets/images/mockup-eralf.jpg',
      year: 'Produksi Aktif',
      summary: 'Platform resmi representasi korporat Emiral Rangga Law Firm yang dirancang dengan estetika kemewahan profesional, performa kecepatan tinggi kelas dunia, integrasi penjadwalan konsultasi perkara hukum online, dan pusat publikasi wawasan regulasi bisnis terkurasi.',
      challenge: 'Firma hukum membutuhkan kehadiran digital bertaraf internasional yang memancarkan otoritas, profesionalisme, dan kepercayaan tinggi, sekaligus mudah ditemukan secara organik oleh korporasi yang memerlukan pendampingan litigasi.',
      solutions: [
        'Menerapkan arsitektur web modern yang dioptimalkan untuk Core Web Vitals (skor Lighthouse 98+) dengan strategi lazy-load dan critical CSS inlining.',
        'Struktur SEO semantik yang menempatkan artikel kepatuhan hukum dan layanan firma di posisi strategis mesin pencari Google secara organik.',
        'Sistem reservasi konsultasi legal online yang aman dengan integrasi formulir terenkripsi, notifikasi WhatsApp otomatis, dan manajemen jadwal advokat.'
      ],
      timeline: [
        { phase: 'Fase 1 — Brand Research', title: 'Positioning & Competitive Analysis', desc: 'Riset mendalam identitas merek firma hukum, analisis kompetitor digital, dan penentuan tone of voice serta palet estetika premium.' },
        { phase: 'Fase 2 — Design', title: 'UI/UX Premium Design System', desc: 'Perancangan design system eksklusif, wireframe premium, dan desain visual hi-fidelity untuk seluruh halaman website.' },
        { phase: 'Fase 3 — Development', title: 'Build & SEO Implementation', desc: 'Implementasi full-stack website, integrasi sistem reservasi, optimasi Core Web Vitals, dan struktur SEO semantik komprehensif.' },
        { phase: 'Fase 4 — Launch', title: 'Content, Testing & Go-Live', desc: 'Kurasi konten artikel hukum, A/B testing performa, dan peluncuran ke domain premium dengan monitoring SEO berkelanjutan.' }
      ],
      techStack: [
        { name: 'HTML5 Semantic', color: '#e34f26', icon: 'H5' },
        { name: 'CSS3 Advanced', color: '#264de4', icon: 'CSS' },
        { name: 'JavaScript ES6+', color: '#f7df1e', icon: 'JS' },
        { name: 'Core Web Vitals', color: '#10b981', icon: 'CWV' },
        { name: 'SEO Semantik', color: '#34a853', icon: 'SEO' },
        { name: 'SSL Grade A', color: '#059669', icon: 'SSL' },
        { name: 'Google Analytics', color: '#e37400', icon: 'GA' },
        { name: 'WA Business API', color: '#25d366', icon: 'WA' }
      ],
      architecture: `
  ┌──────────────────────────────────────────────────────────────────┐
  │                    ERALF.COM WEB ARCHITECTURE                    │
  └──────────────────────────────────────────────────────────────────┘

  [ Calon Klien / Korporasi ]    [ Search Engine (Google) ]
           │                              │
           │  Organic Search              │  SEO Crawl
           ▼                              ▼
  ┌──────────────────────────────────────────────┐
  │           ERALF.com — Responsive Web          │
  │   Lighthouse 98+ · SSL A · Mobile-First       │
  │   Hero · Attorneys · Practice · Blog · Kontak │
  └──────────────────────────────────────────────┘
                       │
                       ▼
           ┌────────────────────────┐
           │  Booking & CMS Engine  │
           │  Form Enkripsi Aman    │
           └────────────────────────┘
                  │          │
          ┌───────┘          └───────┐
          ▼                         ▼
  ┌───────────────┐       ┌──────────────────┐
  │  WhatsApp     │       │  Kalender Jadwal  │
  │  Business API │       │  Konsultasi       │
  │  (Auto-Reply) │       │  Advokat Firma    │
  └───────────────┘       └──────────────────┘`,
      results: [
        { metric: '98/100', desc: 'Skor Performa Google Lighthouse' },
        { metric: '+120%', desc: 'Peningkatan Pertanyaan Klien Masuk' },
        { metric: 'SEO Top', desc: 'Peringkat Layanan Hukum Regional' },
        { metric: 'SSL A', desc: 'Standar Enkripsi Keamanan Web' }
      ],
      quote: 'Website ERALF.COM yang dirancang Harsa Digital Teknologi memberikan impresi yang sangat berkelas bagi para mitra dan klien korporasi kami. Kualitasnya benar-benar melebihi ekspektasi awal kami.',
      quoteAuthor: '— Emiral Rangga Law Firm'
    },
    {
      id: 'emetrologi',
      client: 'Dinas Koperasi & UMKM Kota Bogor',
      title: 'Aplikasi EMETROLOGI',
      subtitle: 'Digitalisasi Pelayanan Uji Tera & Metrologi Legal UMKM',
      category: 'Layanan Publik · Perlindungan Konsumen & UMKM',
      accentColor: '#0891b2',
      accentGrad: 'linear-gradient(135deg, #0e7490 0%, #0891b2 60%, #22d3ee 100%)',
      bannerImage: 'assets/images/mockup-emetrologi.jpg',
      year: 'Produksi Aktif',
      summary: 'Sistem informasi pelayanan pengujian, kalibrasi, dan tera ulang Alat-Alat Ukur, Takar, Timbang, dan Perlengkapannya (UTTP) bagi para pedagang pasar dan UMKM se-Kota Bogor demi mewujudkan Daerah Tertib Ukur yang melindungi konsumen secara adil.',
      challenge: 'Pedagang pasar dan UMKM kesulitan mengetahui jadwal tera ulang timbangan mereka, sementara proses pendaftaran konvensional memicu antrean panjang pada pos metrologi dan menyebabkan hilangnya data UTTP yang tidak tercatat dengan baik.',
      solutions: [
        'Portal pendaftaran dan verifikasi berkas permohonan tera/tera ulang secara online, menghapus kebutuhan datang langsung ke pos metrologi.',
        'Penerbitan Surat Keterangan Hasil Pengujian (SKHP) dan sertifikat tera digital dengan QR-Code verifikasi keaslian yang dapat discan publik.',
        'Sistem notifikasi pengingat masa berlaku segel tera timbangan yang dikirimkan langsung ke kontak pedagang/UMKM via WhatsApp dan SMS.'
      ],
      timeline: [
        { phase: 'Fase 1 — Analysis', title: 'Pemetaan Proses Metrologi', desc: 'Studi mendalam alur pelayanan tera/tera ulang, identifikasi bottleneck administrasi, dan pemetaan kebutuhan digitalisasi SKHP.' },
        { phase: 'Fase 2 — Design', title: 'Portal & QR Certificate Design', desc: 'Perancangan UI portal layanan publik yang mudah digunakan UMKM, desain sertifikat digital, dan sistem QR Code verifikasi.' },
        { phase: 'Fase 3 — Development', title: 'Implementasi & Integrasi', desc: 'Pembangunan portal pendaftaran, engine penerbitan QR SKHP, database UMKM, dan sistem notifikasi reminder masa tera.' },
        { phase: 'Fase 4 — Go-Live', title: 'Sosialisasi & Peluncuran', desc: 'Sosialisasi ke pedagang pasar dan UMKM, pelatihan petugas metrologi Dinas, dan peluncuran layanan digital resmi.' }
      ],
      techStack: [
        { name: 'QR Code Engine', color: '#0891b2', icon: 'QR' },
        { name: 'MySQL', color: '#4479a1', icon: 'SQL' },
        { name: 'Laravel', color: '#ff2d20', icon: 'LV' },
        { name: 'Bootstrap 5', color: '#7952b3', icon: 'BS' },
        { name: 'PDF Digital', color: '#dc2626', icon: 'PDF' },
        { name: 'WhatsApp API', color: '#25d366', icon: 'WA' },
        { name: 'REST API', color: '#f25822', icon: 'API' },
        { name: 'Chart.js', color: '#ff6384', icon: 'CH' }
      ],
      architecture: `
  ┌──────────────────────────────────────────────────────────────────┐
  │                  EMETROLOGI SYSTEM ARCHITECTURE                  │
  └──────────────────────────────────────────────────────────────────┘

  [ Pedagang / UMKM ]           [ Petugas Metrologi Dinas ]
        │                                  │
        │  Daftar Online                   │  Verifikasi & Jadwal
        ▼                                  ▼
  ┌──────────────────────────────────────────────────┐
  │          Portal Layanan EMETROLOGI               │
  │  Pendaftaran · Status · Unduh Sertifikat · Scan  │
  └──────────────────────────────────────────────────┘
                       │
                       ▼
           ┌────────────────────────┐
           │  Laravel Backend API   │
           │  Verifikasi & Engine   │
           └────────────────────────┘
               │       │       │
         ┌─────┘       │       └──────┐
         ▼             ▼              ▼
  ┌──────────┐  ┌────────────┐  ┌──────────────┐
  │ MySQL DB │  │ QR SKHP    │  │  Notifikasi  │
  │ UMKM &   │  │ Certificate│  │  WA Reminder │
  │ UTTP     │  │ Generator  │  │  Masa Tera   │
  └──────────┘  └────────────┘  └──────────────┘`,
      results: [
        { metric: 'Tertib Ukur', desc: 'Kepatuhan Standar Metrologi Legal' },
        { metric: 'QR-Code', desc: 'Verifikasi Validitas Segel Timbangan' },
        { metric: '−70%', desc: 'Waktu Antrean Pendaftaran Pelayanan' },
        { metric: 'Database', desc: 'Seluruh UTTP UMKM Terekam Rapi' }
      ],
      quote: 'EMETROLOGI membantu kami melindungi hak konsumen dan membina UMKM agar jujur dan akurat dalam timbangan dagang. Harsa Digitech sangat andal dalam merealisasikan visi kami.',
      quoteAuthor: '— Dinas Koperasi & UMKM Kota Bogor'
    },
    {
      id: 'tjslp',
      client: 'Bappenda Kota Bogor',
      title: 'Aplikasi TJSLP / CSR',
      subtitle: 'Monitoring Tanggung Jawab Sosial & Lingkungan Perusahaan',
      category: 'GovTech · Transparansi & Akuntabilitas CSR',
      accentColor: '#065f46',
      accentGrad: 'linear-gradient(135deg, #064e3b 0%, #065f46 60%, #059669 100%)',
      bannerImage: 'assets/images/mockup-tjslp.jpg',
      year: 'Produksi Aktif',
      summary: 'Platform monitoring dan sinergi antara Pemerintah Kota Bogor dan badan usaha/swasta dalam menyelaraskan program CSR dengan prioritas pembangunan kota (fasilitas umum, ruang terbuka hijau, dan bantuan sosial) secara transparan dan akuntabel.',
      challenge: 'Sulitnya mengonsolidasikan data realisasi CSR dari puluhan perusahaan secara transparan mengakibatkan terjadinya duplikasi program CSR di satu wilayah, sementara wilayah lain kekurangan bantuan dan luput dari pantauan pemerintah.',
      solutions: [
        'Katalog terstruktur usulan program pembangunan prioritas kota yang dapat dipilih dan didanai langsung oleh perusahaan sponsor CSR.',
        'Dashboard pelaporan progres fisik dan alokasi anggaran proyek CSR secara real-time oleh korporasi untuk akuntabilitas publik.',
        'Penyajian data geospasial realisasi CSR yang memastikan pemerataan distribusi pembangunan publik se-Kota Bogor tanpa tumpang tindih.'
      ],
      timeline: [
        { phase: 'Fase 1 — Stakeholder', title: 'Engagement & Requirement', desc: 'Pemetaan kebutuhan Pemkot dan korporasi mitra CSR, identifikasi indikator akuntabilitas, dan rancangan skema sinergi program.' },
        { phase: 'Fase 2 — Design', title: 'Portal & Dashboard Design', desc: 'Perancangan portal pengajuan CSR korporasi, dashboard monitoring geospasial, dan laporan akuntabilitas publik Bappenda.' },
        { phase: 'Fase 3 — Development', title: 'Implementasi Sistem', desc: 'Pembangunan modul katalog program, pengajuan CSR, monitoring progres, GIS peta distribusi, dan laporan evaluasi.' },
        { phase: 'Fase 4 — Adoption', title: 'Onboarding Korporasi & Go-Live', desc: 'Onboarding seluruh perusahaan mitra CSR ke platform, pelatihan tim koordinasi Bappenda, dan peluncuran portal publik.' }
      ],
      techStack: [
        { name: 'Geotagging GIS', color: '#059669', icon: 'GIS' },
        { name: 'Leaflet.js', color: '#199900', icon: 'LF' },
        { name: 'Laravel', color: '#ff2d20', icon: 'LV' },
        { name: 'MySQL', color: '#4479a1', icon: 'SQL' },
        { name: 'Vue.js', color: '#41b883', icon: 'VU' },
        { name: 'Chart.js', color: '#ff6384', icon: 'CH' },
        { name: 'REST API', color: '#f25822', icon: 'API' },
        { name: 'Multi-Role Auth', color: '#7c3aed', icon: 'MRA' }
      ],
      architecture: `
  ┌──────────────────────────────────────────────────────────────────┐
  │                    TJSLP SYSTEM ARCHITECTURE                     │
  └──────────────────────────────────────────────────────────────────┘

  [ Perusahaan Mitra CSR ]        [ Tim Koordinasi Pemkot ]
          │                                  │
          │  Pilih & Ajukan Program          │  Validasi & Monitoring
          ▼                                  ▼
  ┌──────────────────────────────────────────────────┐
  │           Portal TJSLP — CSR Management          │
  │   Katalog Program · Pengajuan · Progres · Map    │
  └──────────────────────────────────────────────────┘
                       │
                       ▼
           ┌────────────────────────┐
           │  Laravel Backend API   │
           │  CSR Validation Engine │
           └────────────────────────┘
               │       │       │
         ┌─────┘       │       └──────┐
         ▼             ▼              ▼
  ┌──────────┐  ┌────────────┐  ┌──────────────────────┐
  │ MySQL DB │  │ GIS Spatial│  │  Laporan Akuntabilitas│
  │ Program  │  │ Peta CSR   │  │  Publik (Bappenda)    │
  │ & Realis.│  │ Distribusi │  │  Dashboard Evaluasi   │
  └──────────┘  └────────────┘  └──────────────────────┘`,
      results: [
        { metric: 'Transparan', desc: 'Monitoring Alokasi Program CSR' },
        { metric: 'Multi-Sektor', desc: 'Kemitraan Swasta & Pemda Terintegrasi' },
        { metric: 'Merata', desc: 'Distribusi Pembangunan Berkeadilan' },
        { metric: 'Zero Delay', desc: 'Pelaporan Progres Berbasis Digital' }
      ],
      quote: 'Kolaborasi pembangunan kota bersama dunia usaha kini jauh lebih terarah dan akuntabel berkat Aplikasi TJSLP. Harsa Digital Teknologi benar-benar memahami kebutuhan tata kelola pemerintahan modern.',
      quoteAuthor: '— Bappenda Kota Bogor'
    }
  ];

  /* ─────────────────────────────────────────────────────────────
     STATE
  ───────────────────────────────────────────────────────────── */
  let currentIndex = 0;
  let isOpen = false;
  let modalOpener = null;
  let lightboxOpener = null;
  let backgroundElements = [];

  /* ─────────────────────────────────────────────────────────────
     DOM REFERENCES — created on demand
  ───────────────────────────────────────────────────────────── */
  let backdrop, shell, lightbox, lightboxImg;

  /* ─────────────────────────────────────────────────────────────
     BUILD MODAL DOM
  ───────────────────────────────────────────────────────────── */
  function buildModalDOM() {
    if (document.getElementById('pm-backdrop')) return;

    // Backdrop
    backdrop = document.createElement('div');
    backdrop.id = 'pm-backdrop';
    backdrop.className = 'portfolio-modal-backdrop';
    backdrop.setAttribute('aria-hidden', 'true');
    backdrop.inert = true;

    // Shell (scrollable content container)
    shell = document.createElement('div');
    shell.className = 'pm-shell';
    shell.setAttribute('role', 'dialog');
    shell.setAttribute('aria-modal', 'true');
    shell.setAttribute('aria-labelledby', 'pm-title');
    shell.tabIndex = -1;
    backdrop.appendChild(shell);
    document.body.appendChild(backdrop);

    // Lightbox
    lightbox = document.createElement('div');
    lightbox.className = 'pm-lightbox';
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Pratinjau gambar proyek');
    lightbox.inert = true;
    lightboxImg = document.createElement('img');
    lightboxImg.alt = '';
    const lbClose = document.createElement('button');
    lbClose.className = 'pm-lightbox-close';
    lbClose.innerHTML = '&times;';
    lbClose.setAttribute('aria-label', 'Tutup Lightbox');
    lbClose.onclick = closeLightbox;
    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(lbClose);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.body.appendChild(lightbox);

    // Close on backdrop click
    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) closeModal(); });
    document.addEventListener('keydown', (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        if (lightbox.classList.contains('open')) closeLightbox();
        else closeModal();
        return;
      }
      if (e.key === 'Tab') {
        const focusScope = lightbox.classList.contains('open') ? lightbox : shell;
        const focusable = Array.from(focusScope.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )).filter(element => element.getClientRects().length > 0);
        if (!focusable.length) {
          e.preventDefault();
          focusScope.focus();
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && (document.activeElement === first || !focusScope.contains(document.activeElement))) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && (document.activeElement === last || !focusScope.contains(document.activeElement))) {
          e.preventDefault();
          first.focus();
        }
      }
      if (!lightbox.classList.contains('open') && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
        if (e.key === 'ArrowRight') navigateTo(currentIndex + 1);
        if (e.key === 'ArrowLeft') navigateTo(currentIndex - 1);
      }
    });
  }

  /* ─────────────────────────────────────────────────────────────
     RENDER CASE INTO SHELL
  ───────────────────────────────────────────────────────────── */
  function renderCase(data, idx) {
    const total = CASE_STUDIES.length;

    shell.innerHTML = `
      <!-- ── Hero Banner ── -->
      <div class="pm-hero-banner">
        <img src="${data.bannerImage}" alt="${data.title} Screenshot" class="pm-hero-bg-img">
        <div class="pm-hero-overlay"></div>

        <!-- Toolbar (nav arrows + close) -->
        <div class="pm-nav-arrows">
          <button class="pm-nav-btn" id="pm-prev" ${idx === 0 ? 'disabled' : ''} aria-label="Proyek Sebelumnya">
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            <span>Sebelumnya</span>
          </button>
          <button class="pm-nav-btn" id="pm-next" ${idx === total - 1 ? 'disabled' : ''} aria-label="Proyek Berikutnya">
            <span>Berikutnya</span>
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg>
          </button>
        </div>

        <div class="pm-toolbar">
          <button class="pm-close-btn" id="pm-close" aria-label="Tutup Detail Portofolio">&times;</button>
        </div>

        <div class="pm-hero-content">
          <div class="pm-category-pill">${data.category}</div>
          <h2 class="pm-hero-title" id="pm-title" tabindex="-1">${data.title} <span style="opacity:0.8; font-weight:400">— ${data.subtitle}</span></h2>
          <div class="pm-hero-meta">
            <span class="pm-client-chip">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/></svg>
              ${data.client}
            </span>
            <span class="pm-status-badge">
              <span class="pm-status-dot"></span>
              ${data.year}
            </span>
          </div>
        </div>

        <div class="pm-case-counter">${idx + 1} / ${total}</div>
      </div>

      <!-- ── Body ── -->
      <div class="pm-body">

        <!-- Overview -->
        <div class="pm-overview-grid">
          <div class="pm-block pm-summary-block">
            <div class="pm-block-icon">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
            </div>
            <span class="pm-block-label">Gambaran Sistem</span>
            <p class="pm-block-text">${data.summary}</p>
          </div>

          <div class="pm-block">
            <div class="pm-block-icon">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
            </div>
            <span class="pm-block-label">Tantangan Klien</span>
            <p class="pm-block-text">${data.challenge}</p>
          </div>

          <div class="pm-block">
            <div class="pm-block-icon">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            </div>
            <span class="pm-block-label">Solusi Rekayasa Harsa Digitech</span>
            <ul class="pm-block-list">
              ${data.solutions.map(s => `<li>${s}</li>`).join('')}
            </ul>
          </div>
        </div>

        <!-- Metrics -->
        <div>
          <h3 class="pm-section-title">📊 Dampak & Hasil Nyata</h3>
          <div class="pm-metrics-row">
            ${data.results.map((r, i) => `
              <div class="pm-metric-card" style="transition-delay:${i * 0.1}s">
                <span class="pm-metric-val">${r.metric}</span>
                <span class="pm-metric-desc">${r.desc}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Screenshot Gallery -->
        <div>
          <h3 class="pm-section-title">🖥️ Tampilan Antarmuka Sistem</h3>
          <div class="pm-gallery">
            <button type="button" class="pm-screenshot-wrap" data-img="${data.bannerImage}"
              aria-label="Perbesar screenshot utama ${data.title}">
              <img src="${data.bannerImage}" alt="Screenshot utama ${data.title}" loading="lazy">
              <div class="pm-screenshot-label">Tampilan Dashboard Utama</div>
            </button>
          </div>
        </div>

        <!-- Technology Stack -->
        <div>
          <h3 class="pm-section-title">⚙️ Teknologi & Arsitektur</h3>
          <div class="pm-tech-grid">
            ${data.techStack.map(t => `
              <div class="pm-tech-badge">
                <span class="tech-icon" style="background:${t.color}20; color:${t.color}; border: 1px solid ${t.color}40;">${t.icon}</span>
                ${t.name}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Architecture Diagram -->
        <div>
          <h3 class="pm-section-title">🗺️ Topologi Arsitektur Sistem</h3>
          <pre class="pm-arch-diagram"><code>${data.architecture}</code></pre>
        </div>

        <!-- Development Timeline -->
        <div>
          <h3 class="pm-section-title">🗓️ Timeline Pengembangan</h3>
          <div class="pm-timeline">
            ${data.timeline.map((step, i) => `
              <div class="pm-timeline-step" style="transition-delay:${i * 0.12}s">
                <div class="pm-timeline-dot"><div class="pm-timeline-dot-inner"></div></div>
                <div class="pm-timeline-phase">${step.phase}</div>
                <div class="pm-timeline-title">${step.title}</div>
                <div class="pm-timeline-desc">${step.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Client Quote -->
        <div class="pm-quote-block">
          <p class="pm-quote-text">"${data.quote}"</p>
          <div class="pm-quote-attribution">${data.quoteAuthor}</div>
        </div>

      </div>

      <!-- ── Footer CTA ── -->
      <div class="pm-footer-cta">
        <div class="pm-footer-text">
          <strong>Tertarik dengan Solusi Serupa?</strong>
          <p>Diskusikan kebutuhan sistem instansi atau perusahaan Anda bersama tim ahli Harsa Digitech.</p>
        </div>
        <div class="pm-cta-group">
          <button class="btn btn-primary liquid-btn" id="pm-btn-consult">
            <span>Mulai Konsultasi Proyek</span>
            <svg viewBox="0 0 20 20" fill="currentColor" class="btn-icon"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
          </button>
        </div>
      </div>
    `;

    // Wire events
    shell.querySelector('#pm-close').onclick = closeModal;
    shell.querySelector('#pm-prev').onclick = () => navigateTo(idx - 1);
    shell.querySelector('#pm-next').onclick = () => navigateTo(idx + 1);
    shell.querySelector('#pm-btn-consult').onclick = () => {
      closeModal(false);
      const contactSection = document.getElementById('kontak');
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
        });
      }
      const msgArea = document.getElementById('contact-message');
      if (msgArea) {
        msgArea.value = `Saya tertarik dengan portofolio "${data.title}" (Klien: ${data.client}). Kami ingin mendiskusikan implementasi solusi serupa untuk instansi / perusahaan kami.`;
        msgArea.focus({ preventScroll: true });
      }
    };

    // Lightbox on screenshot click
    shell.querySelectorAll('.pm-screenshot-wrap').forEach(wrap => {
      wrap.addEventListener('click', () => openLightbox(wrap.dataset.img, wrap.querySelector('img').alt, wrap));
    });

    // Scroll to top
    shell.scrollTop = 0;

    // Trigger in-view animations after a tick
    requestAnimationFrame(() => {
      setTimeout(() => {
        shell.querySelectorAll('.pm-metric-card').forEach(el => el.classList.add('in-view'));
        shell.querySelectorAll('.pm-timeline-step').forEach(el => el.classList.add('in-view'));
      }, 180);
    });

    const title = shell.querySelector('#pm-title');
    if (title && isOpen) title.focus({ preventScroll: true });
  }

  /* ─────────────────────────────────────────────────────────────
     OPEN / CLOSE MODAL
  ───────────────────────────────────────────────────────────── */
  function openModal(caseId) {
    buildModalDOM();
    modalOpener = document.activeElement;
    backgroundElements = Array.from(document.body.children)
      .filter(element => element !== backdrop && element !== lightbox)
      .map(element => ({ element, wasInert: element.inert }));
    backgroundElements.forEach(({ element }) => { element.inert = true; });
    const idx = CASE_STUDIES.findIndex(c => c.id === caseId);
    currentIndex = idx >= 0 ? idx : 0;

    renderCase(CASE_STUDIES[currentIndex], currentIndex);

    backdrop.setAttribute('aria-hidden', 'false');
    backdrop.inert = false;
    backdrop.classList.add('active');
    shell.inert = false;
    lightbox.inert = true;
    document.body.style.overflow = 'hidden';
    isOpen = true;

    // Focus management
    setTimeout(() => {
      if (!isOpen) return;
      const closeBtn = shell.querySelector('#pm-close');
      if (closeBtn) closeBtn.focus();
    }, 100);
  }

  function closeModal(restoreFocus = true) {
    if (!backdrop) return;
    backdrop.classList.remove('active');
    backdrop.setAttribute('aria-hidden', 'true');
    backdrop.inert = true;
    shell.inert = false;
    document.body.style.overflow = '';
    isOpen = false;
    closeLightbox();
    backgroundElements.forEach(({ element, wasInert }) => { element.inert = wasInert; });
    backgroundElements = [];
    if (restoreFocus && modalOpener && modalOpener.isConnected) modalOpener.focus();
    modalOpener = null;
  }

  function navigateTo(newIdx) {
    if (newIdx < 0 || newIdx >= CASE_STUDIES.length) return;
    currentIndex = newIdx;
    renderCase(CASE_STUDIES[currentIndex], currentIndex);
  }

  /* ─────────────────────────────────────────────────────────────
     LIGHTBOX
  ───────────────────────────────────────────────────────────── */
  function openLightbox(src, alt, opener) {
    lightboxOpener = opener;
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.setAttribute('aria-label', `Pratinjau gambar: ${alt}`);
    shell.inert = true;
    lightbox.inert = false;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    lightbox.querySelector('.pm-lightbox-close').focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.inert = true;
    if (shell && isOpen) shell.inert = false;
    if (lightboxOpener && lightboxOpener.isConnected && isOpen) lightboxOpener.focus();
    lightboxOpener = null;
  }

  /* ─────────────────────────────────────────────────────────────
     BACKWARD COMPAT — keep old modal working too
     (Hide old modal if it exists)
  ───────────────────────────────────────────────────────────── */
  const oldModal = document.getElementById('case-modal');
  if (oldModal) {
    // Detach old case study buttons, replace with new modal
    oldModal.style.display = 'none';
  }

  /* ─────────────────────────────────────────────────────────────
     WIRE UP ALL PORTFOLIO CARD BUTTONS
  ───────────────────────────────────────────────────────────── */
  function attachButtons() {
    document.querySelectorAll('.btn-view-case').forEach(btn => {
      // Remove old listeners by cloning
      const fresh = btn.cloneNode(true);
      btn.parentNode.replaceChild(fresh, btn);
      fresh.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(fresh.getAttribute('data-case'));
      });
    });
  }

  // Run immediately and after any DOM changes (for portfolio filter)
  attachButtons();

  // Also expose globally so other scripts can open modal
  window.HDT_openPortfolioModal = openModal;

})();
