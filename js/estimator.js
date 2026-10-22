/**
 * HARSA DIGITECH (PT. HARSA DIGITAL TEKNOLOGI) - PROJECT SCOPE & COST ESTIMATOR
 * Interactive calculation algorithm for agile sprints, team squad composition, and investment projections.
 */

(function () {
  const form = document.getElementById('project-calculator-form');
  if (!form) return;

  const durationDisplay = document.getElementById('calc-duration-display');
  const sprintsDisplay = document.getElementById('calc-sprints-display');
  const squadDisplay = document.getElementById('calc-squad-display');
  const applyBtn = document.getElementById('btn-apply-estimator');

  // Multiplier matrix
  const TYPE_CONFIGS = {
    mvp: {
      weeks: 6,
      sprints: 3,
      squad: ['1 Project Lead', '1 Senior Software Engineer', '1 UI/UX & Web Specialist'],
      serviceKey: 'Website Design & Development'
    },
    enterprise: {
      weeks: 12,
      sprints: 6,
      squad: ['1 Senior Systems Architect', '2 Backend Engineers', '1 Frontend Developer', '1 QA & Security Lead'],
      serviceKey: 'Software Development'
    },
    modernization: {
      weeks: 8,
      sprints: 4,
      squad: ['1 Cloud / Server Specialist', '1 Database Engineer', '1 DevOps Engineer'],
      serviceKey: 'IT Infrastructure Services'
    },
    squad: {
      weeks: 8,
      sprints: 4,
      squad: ['1 Dedicated IT Consultant', '2 Fullstack Developers', '1 Maintenance Specialist'],
      serviceKey: 'Konsultasi IT'
    }
  };

  function calculate() {
    // 1. Get Project Type
    const selectedTypeEl = form.querySelector('input[name="project_type"]:checked');
    const projectType = selectedTypeEl ? selectedTypeEl.value : 'enterprise';
    const baseConfig = TYPE_CONFIGS[projectType] || TYPE_CONFIGS.enterprise;

    // 2. Count selected platforms
    const selectedPlatforms = Array.from(form.querySelectorAll('input[name="platform"]:checked')).map(el => el.value);
    const platformCount = selectedPlatforms.length;
    // 3. Complexity
    const complexityEl = document.getElementById('calc-complexity');
    const complexityVal = complexityEl ? complexityEl.value : 'high';

    const adjustedWeeks = Math.max(4, Math.round(baseConfig.weeks * (1 + (platformCount - 1) * 0.15)));
    const adjustedSprints = Math.ceil(adjustedWeeks / 2);

    durationDisplay.textContent = `${adjustedWeeks - 1} - ${adjustedWeeks + 2} Minggu`;
    sprintsDisplay.textContent = `${adjustedSprints} - ${adjustedSprints + 1} Sprints (2-week cycle)`;

    // Update Squad List
    let finalSquad = [...baseConfig.squad];
    if (selectedPlatforms.includes('ai') && !finalSquad.some(s => s.includes('AI'))) {
      finalSquad.push('1 Applied AI / LLM Engineer');
    }
    if (selectedPlatforms.includes('mobile') && !finalSquad.some(s => s.includes('Mobile'))) {
      finalSquad.push('1 Mobile Engineer (iOS/Android)');
    }

    squadDisplay.innerHTML = finalSquad
      .map(member => `<span class="squad-chip">${member}</span>`)
      .join('');

    return {
      projectType,
      selectedPlatforms,
      complexityVal,
      adjustedWeeks,
      finalSquad,
      serviceKey: baseConfig.serviceKey
    };
  }

  // Handle Radio Card Click styling
  const radioCards = form.querySelectorAll('.radio-card');
  radioCards.forEach(card => {
    card.addEventListener('click', () => {
      radioCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const input = card.querySelector('input');
      if (input) input.checked = true;
      calculate();
    });
  });

  // Handle Checkbox Tags
  const checkTags = form.querySelectorAll('.check-tag');
  checkTags.forEach(tag => {
    tag.addEventListener('click', (e) => {
      e.preventDefault();
      const input = tag.querySelector('input');
      if (input) {
        input.checked = !input.checked;
        tag.classList.toggle('active', input.checked);
        calculate();
      }
    });
  });

  // Complexity select change
  const complexitySelect = document.getElementById('calc-complexity');
  if (complexitySelect) {
    complexitySelect.addEventListener('change', calculate);
  }

  // Initial calculation
  calculate();

  // Apply to Consultation Form
  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      const data = calculate();
      
      // Target Form fields
      const serviceSelect = document.getElementById('contact-service');
      const messageTextarea = document.getElementById('contact-message');

      if (serviceSelect) {
        // Find best match or default
        for (let i = 0; i < serviceSelect.options.length; i++) {
          if (serviceSelect.options[i].value.includes(data.serviceKey)) {
            serviceSelect.selectedIndex = i;
            break;
          }
        }
      }

      if (messageTextarea) {
        messageTextarea.value = `[Pengajuan Analisis Proyek]\n- Tipe Proyek: ${data.projectType.toUpperCase()}\n- Platform: ${data.selectedPlatforms.join(', ')}\n- Kompleksitas: ${data.complexityVal}\n- Perkiraan Durasi Awal: ${data.adjustedWeeks} Minggu\n- Rekomendasi Tim: ${data.finalSquad.join(', ')}\n\nKebutuhan atau catatan tambahan:\n`;
      }

      // Smooth scroll to contact section
      const contactSection = document.getElementById('kontak');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }

      // Trigger notification toast
      if (window.showToast) {
        window.showToast('Ringkasan kebutuhan proyek ditambahkan ke formulir konsultasi.');
      }
    });
  }
})();
