/**
 * HARSA DIGITECH (PT. HARSA DIGITAL TEKNOLOGI) - LIQUID GLASS REFRACTION CANVAS
 * Creates ambient fluid gradient light physics responding to cursor dynamics.
 */

(function () {
  const canvas = document.getElementById('liquid-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
  let isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';

  // Orb particles representing liquid light refraction with HDT Blue & Orange
  const orbs = [
    { x: 0.2, y: 0.25, r: 360, vx: 0.0006, vy: 0.0008, color: [30, 58, 138] },   // HDT Deep Cobalt Blue
    { x: 0.75, y: 0.35, r: 420, vx: -0.0007, vy: 0.0005, color: [37, 99, 235] },  // HDT Vibrant Blue
    { x: 0.5, y: 0.8, r: 380, vx: 0.0008, vy: -0.0006, color: [242, 88, 34] },  // HDT Tech Coral Orange
    { x: 0.85, y: 0.85, r: 320, vx: -0.0005, vy: -0.0007, color: [251, 146, 60] } // Warm Amber Glow
  ];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
  });

  // Listen to theme switch to adapt canvas opacity
  const observer = new MutationObserver(() => {
    isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  let time = 0;

  function render() {
    time += 0.008;

    // Smooth mouse interpolation
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    ctx.clearRect(0, 0, width, height);

    // Render soft fluid gradient orbs
    orbs.forEach((orb, i) => {
      // Calculate dynamic positions with sine oscillations
      const currentX = (orb.x + Math.sin(time * 0.8 + i) * 0.08) * width;
      const currentY = (orb.y + Math.cos(time * 0.6 + i * 1.5) * 0.08) * height;

      // Slight attraction toward cursor
      const dx = mouse.x - currentX;
      const dy = mouse.y - currentY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      let renderX = currentX;
      let renderY = currentY;

      if (dist < 600) {
        const pull = (600 - dist) / 600;
        renderX += dx * pull * 0.08;
        renderY += dy * pull * 0.08;
      }

      const gradient = ctx.createRadialGradient(
        renderX,
        renderY,
        0,
        renderX,
        renderY,
        orb.r
      );

      const baseAlpha = isDarkMode ? 0.12 : 0.08;
      const [r, g, b] = orb.color;

      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${baseAlpha * 1.6})`);
      gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${baseAlpha * 0.8})`);
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(renderX, renderY, orb.r, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(render);
  }

  // Check if reduced motion is preferred
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!prefersReducedMotion.matches) {
    requestAnimationFrame(render);
  }
})();
