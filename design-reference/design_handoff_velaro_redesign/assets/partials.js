// Inject shared header + footer markup
(() => {
  const path = location.pathname.split('/').pop() || 'index.html';
  const links = [
    { href: 'index.html',    label: 'Start' },
    { href: 'catering.html', label: 'Catering' },
    { href: 'maerkte.html',  label: 'Märkte' },
    { href: 'kontakt.html',  label: 'Kontakt' },
  ];

  const navItems = links.map(l => {
    const active = (path === l.href) || (path === '' && l.href === 'index.html');
    return `<li><a href="${l.href}" class="nav-link${active ? ' nav-link--active' : ''}">${l.label}</a></li>`;
  }).join('');

  const mobileItems = links.map(l => `<a href="${l.href}">${l.label}</a>`).join('');

  const header = `
    <header class="site-header" id="siteHeader">
      <div class="container header-inner">
        <a href="index.html" class="logo-link" aria-label="Velaro Startseite">
          <img src="assets/logo.svg" alt="Velaro Catering" class="logo-img" />
        </a>
        <nav>
          <ul class="nav-list">${navItems}</ul>
        </nav>
        <a href="kontakt.html" class="nav-cta">Anfragen</a>
        <button class="hamburger" id="hamburger" aria-label="Menü">
          <span></span><span></span><span></span>
        </button>
      </div>
      <nav class="mobile-nav" id="mobileNav">${mobileItems}</nav>
    </header>`;

  const footer = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <img src="assets/logo.svg" alt="Velaro Catering" class="footer-logo" />
          <p>Professioneller Catering-Service aus Haldensleben — frisch, regional, mit Leidenschaft zubereitet für jeden Anlass.</p>
        </div>
        <div class="footer-col">
          <h5>Navigation</h5>
          <ul>
            ${links.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}
          </ul>
        </div>
        <div class="footer-col">
          <h5>Kontakt</h5>
          <ul>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <a href="mailto:kontakt@velaro-catering.de">kontakt@velaro-catering.de</a>
            </li>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/></svg>
              <a href="tel:+4916094839906">0160 9483 9906</a>
            </li>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Freischützstraße 10<br/>39340 Haldensleben</span>
            </li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Erreichbarkeit</h5>
          <ul class="hours-list">
            <li><span class="day">Mo – Fr</span><span class="time">08 — 18 Uhr</span></li>
            <li><span class="day">Samstag</span><span class="time">09 — 14 Uhr</span></li>
            <li><span class="day">Sonntag</span><span class="time">Geschlossen</span></li>
          </ul>
        </div>
      </div>
      <div class="container footer-bottom">
        <p>© 2026 Velaro Catering & Foodtruckservice</p>
        <div class="footer-legal">
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
        </div>
      </div>
    </footer>`;

  // Insert at placeholders or at top/bottom of body
  const hSlot = document.getElementById('header-slot');
  const fSlot = document.getElementById('footer-slot');
  if (hSlot) hSlot.outerHTML = header; else document.body.insertAdjacentHTML('afterbegin', header);
  if (fSlot) fSlot.outerHTML = footer; else document.body.insertAdjacentHTML('beforeend', footer);
})();
