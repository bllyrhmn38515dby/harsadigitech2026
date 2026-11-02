/**
 * HARSA DIGITECH — PAGE LOADER
 * Splash screen yang muncul saat halaman pertama dimuat,
 * lalu menghilang dengan animasi fade setelah konten siap.
 */

(function () {
  'use strict';

  const loader = document.getElementById('page-loader');
  if (!loader) return;

  /**
   * Sembunyikan loader dengan transisi fade-out
   */
  function hideLoader() {
    loader.classList.add('loader-hiding');

    // Setelah transisi selesai, hapus dari layout sepenuhnya
    loader.addEventListener('transitionend', function onEnd(e) {
      if (e.propertyName !== 'opacity') return;
      loader.classList.add('loader-hidden');
      loader.removeEventListener('transitionend', onEnd);
    });
  }

  // Tampilkan loader minimal 750ms agar animasi logo terlihat,
  // tapi tunggu juga sampai konten halaman siap (window load).
  const MIN_DISPLAY_MS = 750;
  const startTime = Date.now();

  function scheduleHide() {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
    setTimeout(hideLoader, remaining);
  }

  if (document.readyState === 'complete') {
    scheduleHide();
  } else {
    window.addEventListener('load', scheduleHide, { once: true });

    // Fallback: pastikan loader selalu hilang meski ada resource gagal load
    setTimeout(hideLoader, 4000);
  }
})();

