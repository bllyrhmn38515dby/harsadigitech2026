/**
 * HARSA DIGITECH (PT. HARSA DIGITAL TEKNOLOGI) - MAIN INTERACTION CONTROLLER
 * Handles theme toggling, active scroll spy, mobile navigation, hero 3D tilt, and consultation submission.
 */

(function () {
  'use strict';

  // ==========================================================================
  // KONFIGURASI GOOGLE APPS SCRIPT
  // Paste URL deployment Apps Script Anda di sini setelah setup.
  // Panduan lengkap: lihat file SETUP-APPS-SCRIPT.js
  // ==========================================================================
  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwfTOGlf8WTtA8U79b_gMqvrQAqSbNDCEoAEux7qoy3gpnbEnPQ4OeAj2ZPRzlye1wE/exec';

  // ==========================================================================
  // 1. TOAST NOTIFICATION UTILITY
  // ==========================================================================
  window.showToast = function (message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type} glass-panel`;
    toast.innerHTML = `
      <span class="toast-icon">⚡</span>
      <span class="toast-text">${message}</span>
    `;

    container.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Auto dismiss
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  };

  // ==========================================================================
  // 2. THEME TOGGLER (Clean Tech Light <-> Obsidian Liquid Dark)
  // ==========================================================================
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const currentTheme = localStorage.getItem('harsa_theme') || 'light';

  document.documentElement.setAttribute('data-theme', currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('harsa_theme', nextTheme);

      window.showToast(
        nextTheme === 'dark'
          ? 'Mode Obsidian Glass aktif'
          : 'Mode Clean Liquid Light aktif'
      );
    });
  }

  // ==========================================================================
  // 3. MOBILE MENU TOGGLE & DRAWER
  // ==========================================================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenuBtn.classList.toggle('active');
      mobileDrawer.classList.toggle('active');
      mobileDrawer.setAttribute('aria-hidden', isExpanded);
    });

    // Close on clicking any link inside drawer
    mobileDrawer.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileDrawer.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileDrawer.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // ==========================================================================
  // 4. ACTIVE SCROLL SPY FOR NAVIGATION
  // ==========================================================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function scrollSpy() {
    const scrollY = window.pageYOffset;

    sections.forEach(sec => {
      const sectionHeight = sec.offsetHeight;
      const sectionTop = sec.offsetTop - 120;
      const sectionId = sec.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', scrollSpy);

  // ==========================================================================
  // 5. HERO 3D TILT EFFECT
  // ==========================================================================
  const tiltCard = document.getElementById('hero-tilt-card');
  if (tiltCard && window.innerWidth > 992) {
    const previewCard = tiltCard.querySelector('.hero-preview-card');

    tiltCard.addEventListener('mousemove', (e) => {
      const rect = tiltCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      previewCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    tiltCard.addEventListener('mouseleave', () => {
      previewCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }

  // ==========================================================================
  // 6. PORTFOLIO FILTER TABS
  // ==========================================================================
  const filterBtns = document.querySelectorAll('.portfolio-tab-btn');
  const caseCards = document.querySelectorAll('.case-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.getAttribute('data-filter');

      caseCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // ==========================================================================
  // 7. SERVICE CARD "HITUNG BIAYA" SHORTCUT LINKS
  // ==========================================================================
  const serviceActionLinks = document.querySelectorAll('.service-action-link');
  serviceActionLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = link.getAttribute('data-service');
      const calcSection = document.getElementById('kalkulator');

      if (calcSection) {
        calcSection.scrollIntoView({ behavior: 'smooth' });
      }

      // Map serviceName to radio option
      let targetRadioVal = 'enterprise';
      if (serviceName.includes('IT Infrastructure')) targetRadioVal = 'modernization';
      else if (serviceName.includes('Konsultasi IT')) targetRadioVal = 'squad';
      else if (serviceName.includes('Website Design')) targetRadioVal = 'mvp';

      const targetRadio = document.querySelector(`input[name="project_type"][value="${targetRadioVal}"]`);
      if (targetRadio) {
        const parentCard = targetRadio.closest('.radio-card');
        if (parentCard) parentCard.click();
      }
    });
  });

  // ==========================================================================
  // 8. CONSULTATION FORM VALIDATION & SUBMISSION
  // ==========================================================================
  const consultForm = document.getElementById('consultation-form');
  if (consultForm) {
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const phoneInput = document.getElementById('contact-phone');
    const messageInput = document.getElementById('contact-message');
    const submitBtn = document.getElementById('btn-submit-consult');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    const messageError = document.getElementById('message-error');

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    consultForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      nameError.textContent = '';
      emailError.textContent = '';
      phoneError.textContent = '';
      messageError.textContent = '';

      if (!nameInput.value.trim()) {
        nameError.textContent = 'Silakan isi nama lengkap Anda';
        isValid = false;
      }

      if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
        emailError.textContent = 'Silakan masukkan alamat email yang valid';
        isValid = false;
      }

      if (!phoneInput.value.trim() || phoneInput.value.trim().length < 8) {
        phoneError.textContent = 'Nomor telepon minimal 8 digit';
        isValid = false;
      }

      if (!messageInput.value.trim()) {
        messageError.textContent = 'Silakan beri deskripsi singkat proyek Anda';
        isValid = false;
      }

      if (!isValid) return;

      // Kumpulkan data form
      const serviceSelect = document.getElementById('contact-service');
      const budgetSelect = document.getElementById('contact-budget');

      const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        service: serviceSelect ? serviceSelect.value : '-',
        budget: budgetSelect ? budgetSelect.value : '-',
        message: messageInput.value.trim()
      };

      // Loading state
      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="btn-text">Mengirim Permintaan Konsultasi...</span>
        <span class="spinner-dot">⏳</span>
      `;

      // Cek apakah URL Apps Script sudah dikonfigurasi
      if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL === 'PASTE_URL_APPS_SCRIPT_ANDA_DI_SINI') {
        // Fallback: simulasi sukses (belum dikonfigurasi)
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
          consultForm.reset();
          window.showToast('⚠️ [Dev Mode] Form belum terhubung ke server. Lihat SETUP-APPS-SCRIPT.js untuk konfigurasi.');
        }, 800);
        return;
      }

      // Kirim data ke Google Apps Script
      fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script tidak support CORS penuh
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
        .then(() => {
          // no-cors: response selalu "opaque", anggap sukses jika tidak throw
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
          consultForm.reset();
          window.showToast('✓ Permintaan Anda terkirim! Tim PT Harsa Digital Teknologi akan menghubungi dalam < 2 jam.');
        })
        .catch((err) => {
          console.error('Form submission error:', err);
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
          window.showToast('❌ Gagal mengirim. Silakan hubungi kami langsung via WhatsApp atau email.', 'error');
        });
    });
  }
})();
