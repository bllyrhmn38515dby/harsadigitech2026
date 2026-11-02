/**
 * HARSA DIGITECH — PORTFOLIO LIGHTBOX
 * Full-screen image viewer untuk gambar portofolio.
 * Fitur: open/close, prev/next, keyboard navigation,
 *        thumbnail dots indicator, touch/swipe support.
 */

(function () {
  'use strict';

  // ── Data portofolio untuk caption ──────────────────────────────
  const PORTFOLIO_META = {
    'mockup-simapan.jpg':    { title: 'Aplikasi SIMAPAN',   sub: 'Inspektorat Kota Bogor'         },
    'mockup-silajang.jpg':   { title: 'Aplikasi SILAJANG',  sub: 'Satpol PP Kota Bogor'           },
    'mockup-eralf.jpg':      { title: 'Website ERALF.COM',  sub: 'Emiral Rangga Law Firm'         },
    'mockup-emetrologi.jpg': { title: 'Aplikasi EMETROLOGI',sub: 'Dinas Koperasi & UMKM Kota Bogor'},
    'mockup-tjslp.jpg':      { title: 'Aplikasi TJSLP/CSR', sub: 'Bappenda Kota Bogor'            },
  };

  // ── Elemen DOM ─────────────────────────────────────────────────
  const backdrop    = document.getElementById('lightbox');
  const imgEl       = document.getElementById('lightbox-img');
  const captionTitle= document.getElementById('lightbox-caption-title');
  const captionSub  = document.getElementById('lightbox-caption-sub');
  const counterEl   = document.getElementById('lightbox-counter');
  const closeBtn    = document.getElementById('lightbox-close');
  const prevBtn     = document.getElementById('lightbox-prev');
  const nextBtn     = document.getElementById('lightbox-next');
  const thumbsEl    = document.getElementById('lightbox-thumbs');
  const spinnerEl   = document.getElementById('lightbox-spinner');
  const innerEl     = document.getElementById('lightbox-inner');

  if (!backdrop || !imgEl) return;

  // ── State ──────────────────────────────────────────────────────
  let images      = [];   // Array dari semua .case-thumb
  let currentIdx  = 0;
  let isAnimating = false;
  let touchStartX = 0;

  // ── Inisialisasi ───────────────────────────────────────────────
  function init() {
    // Kumpulkan semua gambar portofolio
    images = Array.from(document.querySelectorAll('.case-thumb'));

    // Buat thumbnail dots
    renderThumbDots();

    // Pasang click listener pada setiap gambar
    images.forEach((img, idx) => {
      img.closest('.case-img-wrap').addEventListener('click', () => openAt(idx));
    });

    // Event listeners
    closeBtn.addEventListener('click', close);
    prevBtn.addEventListener('click', () => navigate(-1));
    nextBtn.addEventListener('click', () => navigate(1));

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) close();
    });

    document.addEventListener('keydown', onKeydown);

    // Touch / swipe support
    backdrop.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });

    backdrop.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) navigate(dx < 0 ? 1 : -1);
    });
  }

  // ── Render thumbnail dots ───────────────────────────────────────
  function renderThumbDots() {
    if (!thumbsEl) return;
    thumbsEl.innerHTML = '';
    images.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = 'lightbox-thumb-dot';
      dot.setAttribute('aria-label', `Gambar ${idx + 1}`);
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        goTo(idx);
      });
      thumbsEl.appendChild(dot);
    });
  }

  // ── Buka lightbox pada indeks tertentu ─────────────────────────
  function openAt(idx) {
    currentIdx = idx;
    backdrop.removeAttribute('aria-hidden');
    backdrop.classList.add('lightbox-open');
    document.body.style.overflow = 'hidden';
    loadImage(idx);
    updateNav();

    // Fokus ke close button (aksesibilitas)
    setTimeout(() => closeBtn.focus(), 100);
  }

  // ── Tutup lightbox ─────────────────────────────────────────────
  function close() {
    backdrop.classList.remove('lightbox-open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    isAnimating = false;

    // Kembalikan fokus ke gambar yang dibuka
    setTimeout(() => {
      const trigger = images[currentIdx]?.closest('.case-img-wrap');
      trigger?.focus();
    }, 320);
  }

  // ── Navigasi prev/next ─────────────────────────────────────────
  function navigate(direction) {
    const newIdx = currentIdx + direction;
    if (newIdx < 0 || newIdx >= images.length) return;
    goTo(newIdx);
  }

  function goTo(idx) {
    if (isAnimating || idx === currentIdx) return;
    currentIdx = idx;
    loadImage(idx);
    updateNav();
  }

  // ── Load & tampilkan gambar ────────────────────────────────────
  function loadImage(idx) {
    if (!images[idx]) return;
    isAnimating = true;

    const src = images[idx].src;
    const filename = src.split('/').pop();
    const meta = PORTFOLIO_META[filename] || { title: filename, sub: '' };

    // Loading state
    imgEl.classList.add('lightbox-img-loading');
    if (innerEl) innerEl.classList.add('loading');
    if (spinnerEl) spinnerEl.style.display = 'block';

    // Preload gambar
    const tempImg = new Image();
    tempImg.onload = () => {
      imgEl.src = src;
      imgEl.alt = meta.title;
      imgEl.classList.remove('lightbox-img-loading');
      if (innerEl) innerEl.classList.remove('loading');
      if (spinnerEl) spinnerEl.style.display = 'none';
      isAnimating = false;
    };
    tempImg.onerror = () => {
      imgEl.classList.remove('lightbox-img-loading');
      if (innerEl) innerEl.classList.remove('loading');
      if (spinnerEl) spinnerEl.style.display = 'none';
      isAnimating = false;
    };
    tempImg.src = src;

    // Update caption
    if (captionTitle) captionTitle.textContent = meta.title;
    if (captionSub)   captionSub.textContent   = meta.sub;
    if (counterEl)    counterEl.textContent     = `${idx + 1} / ${images.length}`;

    // Update thumb dots
    if (thumbsEl) {
      thumbsEl.querySelectorAll('.lightbox-thumb-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === idx);
        dot.setAttribute('aria-current', i === idx ? 'true' : 'false');
      });
    }
  }

  // ── Update state tombol prev/next ─────────────────────────────
  function updateNav() {
    if (prevBtn) prevBtn.disabled = currentIdx <= 0;
    if (nextBtn) nextBtn.disabled = currentIdx >= images.length - 1;
  }

  // ── Keyboard navigation ────────────────────────────────────────
  function onKeydown(e) {
    if (!backdrop.classList.contains('lightbox-open')) return;

    switch (e.key) {
      case 'Escape':
        close();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        navigate(-1);
        break;
      case 'ArrowRight':
        e.preventDefault();
        navigate(1);
        break;
    }
  }

  // ── Jalankan setelah DOM siap ──────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

