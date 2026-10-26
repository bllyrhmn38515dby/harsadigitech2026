/**
 * PT. HARSA DIGITAL TEKNOLOGI (HARSA DIGITECH)
 * FAQ Section — Accordion & Category Filter Logic
 */

(function () {
  'use strict';

  const accordion = document.getElementById('faq-accordion');
  const tabs = document.querySelectorAll('.faq-tab');
  if (!accordion) return;

  /* ─── Accordion toggle ───────────────────────────────────── */
  const items = accordion.querySelectorAll('.faq-item');

  items.forEach(item => {
    const btn = item.querySelector('.faq-question');
    const panel = btn && document.getElementById(btn.getAttribute('aria-controls'));
    if (!btn || !panel) return;

    function setExpanded(expanded) {
      item.classList.toggle('open', expanded);
      btn.setAttribute('aria-expanded', String(expanded));
      panel.setAttribute('aria-hidden', String(!expanded));
      panel.inert = !expanded;
    }

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all others
      items.forEach(other => {
        if (other !== item) {
          const ob = other.querySelector('.faq-question');
          const otherPanel = ob && document.getElementById(ob.getAttribute('aria-controls'));
          other.classList.remove('open');
          if (ob) ob.setAttribute('aria-expanded', 'false');
          if (otherPanel) {
            otherPanel.setAttribute('aria-hidden', 'true');
            otherPanel.inert = true;
          }
        }
      });

      setExpanded(!isOpen);
    });

    setExpanded(item.classList.contains('open'));
  });

  /* ─── Category filter ────────────────────────────────────── */
  // Build empty-state element
  const emptyEl = document.createElement('p');
  emptyEl.className = 'faq-empty';
  emptyEl.textContent = 'Tidak ada pertanyaan dalam kategori ini.';
  emptyEl.setAttribute('role', 'status');
  accordion.after(emptyEl);

  function filterFAQ(cat) {
    let visibleCount = 0;

    items.forEach(item => {
      const itemCat = item.getAttribute('data-cat');
      const show = cat === 'all' || itemCat === cat;

      if (show) {
        item.classList.remove('faq-hidden');
        item.removeAttribute('aria-hidden');
        item.inert = false;
        visibleCount++;
      } else {
        // Close before hiding
        item.classList.remove('open');
        const ob = item.querySelector('.faq-question');
        const panel = ob && document.getElementById(ob.getAttribute('aria-controls'));
        if (ob) ob.setAttribute('aria-expanded', 'false');
        if (panel) {
          panel.setAttribute('aria-hidden', 'true');
          panel.inert = true;
        }
        item.classList.add('faq-hidden');
        item.setAttribute('aria-hidden', 'true');
        item.inert = true;
      }
    });

    emptyEl.classList.toggle('visible', visibleCount === 0);
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active state
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-pressed', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-pressed', 'true');

      filterFAQ(tab.getAttribute('data-faq-cat'));
    });
  });

  /* ─── Open first item by default ────────────────────────── */
  const firstItem = accordion.querySelector('.faq-item');
  if (firstItem) {
    firstItem.classList.add('open');
    const firstBtn = firstItem.querySelector('.faq-question');
    if (firstBtn) {
      firstBtn.setAttribute('aria-expanded', 'true');
      const panel = document.getElementById(firstBtn.getAttribute('aria-controls'));
      if (panel) {
        panel.setAttribute('aria-hidden', 'false');
        panel.inert = false;
      }
    }
  }

  /* ─── Scroll-triggered entrance animation ────────────────── */
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    items.forEach((item, i) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s, box-shadow var(--transition-normal), border-color var(--transition-normal)`;
      observer.observe(item);
    });

    // Also animate aside cards
    document.querySelectorAll('.faq-stat-card, .faq-cta-card, .faq-contact-hint').forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateX(20px)';
      el.style.transition = `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s`;
      observer.observe(el);
    });
  }

})();
