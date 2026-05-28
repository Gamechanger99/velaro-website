// ============================================
// VELARO — Shared interactions
// ============================================

(() => {
  // Header scroll state
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 24);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger
  const burger = document.getElementById('hamburger');
  const mnav   = document.getElementById('mobileNav');
  burger?.addEventListener('click', () => {
    mnav?.classList.toggle('is-open');
  });
  mnav?.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => mnav.classList.remove('is-open'))
  );

  // Scroll reveals
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -10px 0px' });

  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => io.observe(el));

  // Safety net: anything still hidden after 1.5s gets revealed (handles iframe quirks)
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.in), .reveal-stagger:not(.in)').forEach(el => el.classList.add('in'));
  }, 1500);

  // Parallax (subtle) on .parallax > img
  const ps = document.querySelectorAll('.parallax');
  if (ps.length) {
    const tick = () => {
      const vh = window.innerHeight;
      ps.forEach(p => {
        const r = p.getBoundingClientRect();
        const img = p.querySelector('img');
        if (!img) return;
        const mid = r.top + r.height / 2;
        const off = (mid - vh / 2) / vh;
        img.style.transform = `translate3d(0, ${off * -28}px, 0) scale(1.08)`;
      });
    };
    let raf = null;
    const sched = () => { if (!raf) raf = requestAnimationFrame(() => { tick(); raf = null; }); };
    window.addEventListener('scroll', sched, { passive: true });
    window.addEventListener('resize', sched);
    tick();
  }
})();
