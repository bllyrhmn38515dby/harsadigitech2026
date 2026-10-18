# PT. HARSA DIGITAL TEKNOLOGI (HARSA DIGITECH)
> **"Inspiring Innovation, Empowering Digital Excellence"**

Website portofolio enterprise resmi untuk **PT. Harsa Digital Teknologi** (**Harsa Digitech**). Dibangun menggunakan arsitektur visual **Clean Tech Minimalist & Liquid Glass** dengan standar performa tinggi, aksesibilitas semantik, dan responsif lintas perangkat.

---

## 🚀 Fitur Utama

- **Estetika Liquid Glass & Ambient Mesh**: Efek panel kaca frosted, border iridescent, pantulan specular dinamis, serta latar belakang canvas partikel cairan interaktif (`glass-mesh.js`).
- **Mode Tampilan Ganda (Dual Theme)**: Mendukung mode terang (*Clean Liquid Light*) dan mode gelap (*Obsidian Glass*) dengan penyimpanan preferensi di `localStorage`.
- **Portofolio Riil & Studi Kasus Resmi**:
  - **Aplikasi SIMAPAN** (*Inspektorat Kota Bogor*)
  - **Aplikasi SILAJANG** (*Satpol PP Kota Bogor*)
  - **Website ERALF.COM** (*Emiral Rangga Law Firm*)
  - **Aplikasi EMETROLOGI** (*Dinas Koperasi dan UMKM Kota Bogor*)
  - **Aplikasi TJSLP / CSR** (*Bappenda Kota Bogor*)
- **Kalkulator Proyek Interaktif (`estimator.js`)**: Simulasi perhitungan durasi sprint, rekomendasi tim squad, serta estimasi anggaran yang otomatis terhubung ke formulir konsultasi.
- **Unduh Dokumen Company Profile (PDF)**: Tautan langsung ke berkas resmi Company Profile.
- **Legalitas Terverifikasi**: Menampilkan data pengesahan Kemenkumham RI, NIB OSS, dan NPWP dengan penyensoran data sensitif.

---

## 📂 Struktur Berkas

```
harsadigitech2026/
├── index.html                   # Halaman utama dengan markup semantik & SEO Meta
├── README.md                    # Dokumentasi repository
├── css/
│   ├── index.css                # Desain sistem, variabel warna HDT, layout, tipografi
│   ├── glass.css                # Efek fisika liquid glass & mikro-animasi
│   └── responsive.css           # Breakpoint responsif mobile, tablet, dan desktop
├── js/
│   ├── main.js                  # Controller tema, scroll spy, filter portofolio, form
│   ├── glass-mesh.js            # Ambient refractive liquid canvas animation
│   ├── estimator.js             # Algoritma kalkulator proyek & komposisi squad
│   └── case-study.js            # Data studi kasus & modal bedah arsitektur
└── assets/
    ├── docs/
    │   └── Company-Profile-PT-Harsa-Digital-Teknologi.pdf
    └── images/
        ├── hdt-logo.png         # Logo resmi HDT
        ├── hero-dashboard.jpg   # Visual dashboard rekayasa software
        ├── case-finflow.jpg     # Visual telemetri data pipeline
        └── case-aicloud.jpg     # Visual kluster AI & cloud
```

---

## 🛠️ Cara Menjalankan Secara Lokal

Cukup buka berkas `index.html` menggunakan peramban web apa pun (Google Chrome, Microsoft Edge, Safari, Firefox) atau jalankan melalui web server lokal sederhana:

```bash
# Menggunakan Python
python -m http.server 3000

# Atau menggunakan Node.js npx serve
npx serve
```

Buka peramban pada alamat `http://localhost:3000`.

---

© 2026 PT. Harsa Digital Teknologi (Harsa Digitech). Hak Cipta Dilindungi Undang-Undang.
