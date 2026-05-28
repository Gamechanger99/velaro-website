// ============================================
// VELARO — Banketmappe (interactive configurator)
// ============================================

(() => {
  const CATS = [
    { id:'buffet', tag:'Buffet',     name:'Klassisches Buffet',  desc:'Warme & kalte Speisen für jeden Anlass' },
    { id:'grill',  tag:'Grill',      name:'Grillbuffet',          desc:'Frisch vom Grill – deftig & gesellig' },
    { id:'snacks', tag:'Fingerfood', name:'Kleine Speisen',       desc:'Wraps, Canapés & Fingerfood – ab 10 Personen' },
    { id:'truck',  tag:'Food Truck', name:'Food Truck Catering',  desc:'Saftige Burger direkt zu Ihrem Event' },
  ];

  const DRINKS = [
    { id:'none', name:'Keine Getränkepauschale',   desc:'Getränke selbst organisieren' },
    { id:'soft', name:'Getränke-Pauschale',         desc:'Inkl. Bier & Weinauswahl' },
    { id:'full', name:'Getränke-Pauschale Premium', desc:'Großes Getränke-Sortiment' },
  ];

  const SHARED_SUPPEN = [
    { label:'Altmärker Hochzeitssuppe', subs:null },
    { label:'Tomatencremesuppe',        subs:null },
    { label:'Pilzcremesuppe',           subs:null },
  ];
  const SHARED_HAUPTGAENGE = [
    { label:'Deftiges vom Blech', subs:['mit Pilzrahmsauce','mit Zwiebel-Bratensauce','mit klassischer Bratensauce','mit Pfeffersauce','mit mediterranem Grillgemüse'] },
    { label:'Hähnchenbrust', subs:['klassisch gewürzt','gefüllt mit Feta und Spinat','Caprese Style'] },
    { label:'Schweinefilet', subs:['mit mediterranem Grillgemüse','mit Pfeffersauce','in Pfefferrahm'] },
    { label:'Lachsfilet', subs:['auf Sesam-Spargel-Pfanne','auf jungem Blattspinat','in Zitronen-Dill-Sauce'] },
  ];
  const SHARED_VEGETARISCH = [
    { label:'Gnocchipfanne', subs:null },
    { label:'Falafel', subs:['auf geröstetem Paprikagemüse','Tomatenreis','Rote Beete-Feta-Stampf'] },
    { label:'Gefüllte Zucchini', subs:null },
  ];
  const SHARED_BEILAGEN = [
    { label:'Frische Salatauswahl',  subs:null, default:true, badge:'Inklusive' },
    { label:'Baguette und Brot',     subs:null, default:true, badge:'Inklusive' },
    { label:'Butterplatte',          subs:null, default:true, badge:'Inklusive' },
    { label:'Dipvariation',          subs:null, default:true, badge:'Inklusive' },
    { label:'Kartoffelgratin',       subs:null },
    { label:'Salzkartoffeln',        subs:null },
    { label:'Petersilienkartoffeln', subs:null },
    { label:'Reis',                  subs:null },
    { label:'Spätzle',               subs:null },
    { label:'Nudeln',                subs:null },
    { label:'Risotto',               subs:null },
    { label:'Kartoffelbrei',         subs:null },
  ];
  const SHARED_DESSERT = [
    { label:'Obstsalat', subs:null },
    { label:'Schokomousse mit Kirschgrütze', subs:null },
    { label:'Crème Brûlée', subs:null },
    { label:'Schichtgläser', subs:null },
    { label:'Cremespeise mit Fruchtspiegel', subs:null },
    { label:'Kuchenvariation', subs:null },
  ];

  const MENU = {
    buffet: { sections:[
      { title:'Suppen', items: SHARED_SUPPEN },
      { title:'Hauptgänge', items: SHARED_HAUPTGAENGE },
      { title:'Vegetarisch', items: SHARED_VEGETARISCH },
      { title:'Beilagen', items: SHARED_BEILAGEN },
      { title:'Dessert', items: SHARED_DESSERT },
    ]},
    grill: { sections:[
      { title:'Vom Grill', items:[
        { label:'Bratwurst', subs:null },
        { label:'Boulette', subs:null },
        { label:'Grillgemüse', subs:null },
        { label:'Tomaten-Feta-Pfännchen', subs:null },
        { label:'Steak', subs:['Schwein','Hühnchen'] },
      ]},
      { title:'Beilagen', items: SHARED_BEILAGEN },
      { title:'Dessert', items: SHARED_DESSERT },
    ]},
    snacks: { sections:[
      { title:'Auswahl', items:[
        { label:'Obstplatte', subs:null },
        { label:'Fingerfood-Mix', subs:null },
        { label:'Belegte Brötchen', subs:null },
        { label:'Obstsalat', subs:null },
        { label:'Suppe im Glas', subs:null },
        { label:'Crostinis', subs:null },
        { label:'Bruschetta', subs:null },
      ]},
    ]},
    truck: {
      infoBox: 'Die folgenden 5 Burger sowie Pommes Frites und Loaded Fries sind im Grundsortiment enthalten. Weitere Burger und Beilagen können gegen Aufpreis hinzugefügt werden.',
      sections:[
        { title:'Burger', items:[
          { label:'Cheeseburger',        subs:null, default:true, badge:'Grundsortiment' },
          { label:'Hamburger',           subs:null, default:true, badge:'Grundsortiment' },
          { label:'Chili-Cheese Burger', subs:null, default:true, badge:'Grundsortiment' },
          { label:'Onion Overload',      subs:null, default:true, badge:'Grundsortiment' },
          { label:'Veggie Burger',       subs:null, default:true, badge:'Grundsortiment' },
          { label:'Pulled Pork Burger',  subs:null, badge:'Aufpreis' },
          { label:'Teriyaki Burger',     subs:null, badge:'Aufpreis' },
          { label:'BBQ Burger',          subs:null, badge:'Aufpreis' },
        ]},
        { title:'Beilagen', items:[
          { label:'Pommes Frites',       subs:null, default:true, badge:'Grundsortiment' },
          { label:'Loaded Fries',        subs:null, default:true, badge:'Grundsortiment' },
          { label:'Onion Rings',         subs:null, badge:'Aufpreis' },
          { label:'Coleslaw',            subs:null, badge:'Aufpreis' },
        ]},
      ],
    },
  };

  const TOTAL_STEPS = 6;
  const TITLES = [
    'Ihre Anfrage in wenigen Klicks',
    'Catering-Art wählen',
    'Eckdaten zur Veranstaltung',
    'Menü zusammenstellen',
    'Getränkepauschale',
    'Individuelle Wünsche',
    'Zusammenfassung'
  ];

  const S = { step:0, category:'', persons:30, date:'', location:'', name:'', email:'', phone:'', menuSel:{}, drink:'none', wishes:'' };

  function initDefaults(catId) {
    S.menuSel = {};
    const menu = MENU[catId];
    if (!menu) return;
    menu.sections.forEach(sec => {
      const defs = sec.items.filter(it => it.default);
      if (defs.length) S.menuSel[sec.title] = defs.map(it => ({ item: it.label, subOptions: [] }));
    });
  }

  function getReco(persons) {
    if (!persons || persons <= 0) return null;
    if (persons < 30) return { a:'1 Fleischgericht',  b:'1 Fischgericht',  c:'1–2 Beilagen', d:'1 Gemüsebeilage' };
    if (persons < 50) return { a:'2 Fleischgerichte', b:'1 Fischgericht',  c:'2–3 Beilagen', d:'1 Gemüsebeilage' };
    return                   { a:'3 Fleischgerichte', b:'2 Fischgerichte', c:'3 Beilagen',   d:'1 Gemüsebeilage' };
  }
  function htmlReco(persons) {
    const r = getReco(persons);
    if (!r) return '';
    return `<div class="bm-reco-box">
      <span class="bm-reco-label">Empfehlung für ${persons} Personen</span>
      <div class="bm-reco-rows">
        <span><strong>${r.a}</strong></span>
        <span><strong>${r.b}</strong></span>
        <span><strong>${r.c}</strong></span>
        <span><strong>${r.d}</strong></span>
      </div>
    </div>`;
  }

  function refreshProgress() {
    const bar = document.getElementById('bmProgressBar');
    if (!bar) return;
    if (S.step === 0) { bar.innerHTML = ''; return; }
    bar.innerHTML = Array.from({ length: TOTAL_STEPS }, (_, i) => {
      const n = i + 1;
      return `<div class="bm-seg${n < S.step ? ' done' : n === S.step ? ' active' : ''}"></div>`;
    }).join('');
  }

  function render() {
    const numEl = document.getElementById('bmNum');
    const labelEl = document.getElementById('bmStepLabel');
    const titleEl = document.getElementById('bmStepTitle');
    if (numEl) numEl.textContent = S.step;
    if (labelEl) labelEl.textContent = S.step === 0 ? 'Willkommen' : `Schritt ${S.step} von ${TOTAL_STEPS}`;
    if (titleEl) titleEl.textContent = TITLES[S.step];

    const back = document.getElementById('bmBack');
    const next = document.getElementById('bmNext');
    if (back) S.step === 0 ? back.classList.remove('bm-visible') : back.classList.add('bm-visible');
    if (next) next.textContent = S.step === 0 ? 'Jetzt konfigurieren →' : S.step === TOTAL_STEPS ? 'Anfrage absenden →' : 'Weiter →';

    refreshProgress();

    const body = document.getElementById('bmBody');
    if (!body) return;
    switch (S.step) {
      case 0: body.innerHTML = htmlWelcome(); break;
      case 1: body.innerHTML = htmlCategory(); bindCat(); break;
      case 2: body.innerHTML = htmlDetails(); bindDetails(); break;
      case 3: body.innerHTML = htmlMenu(); bindMenu(); break;
      case 4: body.innerHTML = htmlDrinks(); bindDrinks(); break;
      case 5: body.innerHTML = htmlWishes(); bindWishes(); break;
      case 6: body.innerHTML = htmlSummary(); break;
    }
  }

  function htmlWelcome() {
    return `<div class="bm-welcome">
      <div class="bm-welcome-headline">Ihr Catering, <span class="it">Ihre</span> Wahl.</div>
      <p>Kategorien wählen, Gerichte zusammenstellen und direkt anfragen — in wenigen Schritten zu Ihrem individuellen Angebot.</p>
      <div class="bm-feature-row">
        <div class="bm-feature-item"><div class="bm-feature-bubble">4</div><span class="bm-feature-label">Kategorien</span></div>
        <div class="bm-feature-item"><div class="bm-feature-bubble">6</div><span class="bm-feature-label">Schritte</span></div>
        <div class="bm-feature-item"><div class="bm-feature-bubble">24h</div><span class="bm-feature-label">Rückmeldung</span></div>
      </div>
    </div>`;
  }

  function htmlCategory() {
    return `<p class="bm-step-desc">Welche Art von Catering möchten Sie buchen?</p>
      <div class="bm-cat-grid">${CATS.map(c => `
        <div class="bm-cat-card${S.category === c.id ? ' bm-selected' : ''}" data-id="${c.id}">
          <span class="bm-cat-tag">${c.tag}</span>
          <div class="bm-cat-name">${c.name}</div>
          <div class="bm-cat-desc">${c.desc}</div>
        </div>`).join('')}
      </div>`;
  }
  function bindCat() {
    document.querySelectorAll('.bm-cat-card').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.getAttribute('data-id');
        if (S.category !== id) { S.category = id; initDefaults(id); }
        document.querySelectorAll('.bm-cat-card').forEach(c => c.classList.remove('bm-selected'));
        el.classList.add('bm-selected');
      });
    });
  }

  function htmlDetails() {
    return `<p class="bm-step-desc">Bitte geben Sie die Eckdaten Ihrer Veranstaltung an.</p>
      <div class="bm-form">
        <div class="bm-form-row">
          <div class="bm-field"><label>Personenanzahl *</label><input type="number" id="bfPersons" value="${S.persons}" min="1" max="1000" placeholder="z.B. 50"></div>
          <div class="bm-field"><label>Datum *</label><input type="date" id="bfDate" value="${S.date}"></div>
        </div>
        <div class="bm-field"><label>Veranstaltungsort *</label><input type="text" id="bfLocation" value="${S.location}" placeholder="Adresse oder Venue-Name"></div>
        <hr class="bm-field-divider">
        <p class="bm-field-group-label">Ihre Kontaktdaten</p>
        <div class="bm-form-row">
          <div class="bm-field"><label>Name *</label><input type="text" id="bfName" value="${S.name}" placeholder="Vor- und Nachname"></div>
          <div class="bm-field"><label>E-Mail *</label><input type="email" id="bfEmail" value="${S.email}" placeholder="ihre@email.de"></div>
        </div>
        <div class="bm-field"><label>Telefon (optional)</label><input type="tel" id="bfPhone" value="${S.phone}" placeholder="+49 ..."></div>
      </div>
      <div id="bmRecoWrap">${htmlReco(S.persons)}</div>`;
  }
  function bindDetails() {
    document.getElementById('bfPersons')?.addEventListener('input', e => {
      S.persons = parseInt(e.target.value) || 1;
      const wrap = document.getElementById('bmRecoWrap');
      if (wrap) wrap.innerHTML = htmlReco(S.persons);
    });
    const on = (id, key) => document.getElementById(id)?.addEventListener('input', e => { S[key] = e.target.value; });
    on('bfDate', 'date'); on('bfLocation', 'location');
    on('bfName', 'name'); on('bfEmail', 'email'); on('bfPhone', 'phone');
  }

  function getSecSel(secTitle) { return S.menuSel[secTitle] || []; }
  function toggleItem(secTitle, itemLabel) {
    if (!S.menuSel[secTitle]) S.menuSel[secTitle] = [];
    const arr = S.menuSel[secTitle];
    const idx = arr.findIndex(x => x.item === itemLabel);
    if (idx >= 0) arr.splice(idx, 1);
    else arr.push({ item: itemLabel, subOptions: [] });
  }
  function toggleSub(secTitle, itemLabel, sub) {
    if (!S.menuSel[secTitle]) return;
    const entry = S.menuSel[secTitle].find(x => x.item === itemLabel);
    if (!entry) return;
    const idx = entry.subOptions.indexOf(sub);
    if (idx >= 0) entry.subOptions.splice(idx, 1);
    else entry.subOptions.push(sub);
  }
  function badgeClass(badge) {
    if (badge === 'Inklusive')      return 'bm-badge-incl';
    if (badge === 'Grundsortiment') return 'bm-badge-base';
    return 'bm-badge-extra';
  }
  function esc(s) { return String(s).replace(/"/g, '&quot;'); }

  function htmlMenu() {
    const menu = MENU[S.category]; if (!menu) return '';
    const totalSel = Object.values(S.menuSel).reduce((a, arr) => a + arr.length, 0);
    const infoBox = menu.infoBox
      ? `<div class="bm-info-box"><span class="bm-info-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        </span><span>${menu.infoBox}</span></div>`
      : '';

    const sectionsHtml = menu.sections.map(sec => {
      const secSel = getSecSel(sec.title);
      const itemsHtml = sec.items.map(it => {
        const active = secSel.some(x => x.item === it.label);
        const entry = secSel.find(x => x.item === it.label);
        const badgeHtml = it.badge
          ? `<span class="bm-item-badge ${badgeClass(it.badge)}">${it.badge}</span>`
          : '';
        let subHtml = '';
        if (active && it.subs) {
          subHtml = `<div class="bm-sub-chips" data-sec="${esc(sec.title)}" data-item="${esc(it.label)}">
            ${it.subs.map(s => {
              const subActive = entry?.subOptions.includes(s);
              return `<span class="bm-sub-chip${subActive ? ' bm-active' : ''}" data-sub="${esc(s)}">${s}</span>`;
            }).join('')}
          </div>`;
        }
        return `<div class="bm-dish-wrap">
          <div class="bm-dish${active ? ' bm-active' : ''}" data-sec="${esc(sec.title)}" data-item="${esc(it.label)}">
            <div class="bm-dish-dot"><div class="bm-dish-dot-inner"></div></div>
            <span class="bm-dish-label">${it.label}</span>
            ${badgeHtml}
          </div>
          ${subHtml}
        </div>`;
      }).join('');
      return `<div class="bm-dish-group">
        <div class="bm-dish-group-title">${sec.title}</div>
        <div class="bm-dish-list">${itemsHtml}</div>
      </div>`;
    }).join('');

    return `<p class="bm-step-desc">Wählen Sie Ihre gewünschten Speisen aus.</p>
      ${infoBox}
      <div class="bm-menu-status"><span>Ausgewählt: <strong>${totalSel} Gericht${totalSel !== 1 ? 'e' : ''}</strong></span></div>
      ${sectionsHtml}`;
  }
  function bindMenu() {
    document.querySelectorAll('.bm-dish').forEach(el => {
      el.addEventListener('click', () => {
        toggleItem(el.getAttribute('data-sec'), el.getAttribute('data-item'));
        document.getElementById('bmBody').innerHTML = htmlMenu(); bindMenu();
      });
    });
    document.querySelectorAll('.bm-sub-chip').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const wrap = el.closest('.bm-sub-chips');
        toggleSub(wrap.getAttribute('data-sec'), wrap.getAttribute('data-item'), el.getAttribute('data-sub'));
        document.getElementById('bmBody').innerHTML = htmlMenu(); bindMenu();
      });
    });
  }

  function htmlDrinks() {
    return `<p class="bm-step-desc">Möchten Sie eine Getränkepauschale dazubuchen?</p>
      <div class="bm-cat-grid" style="grid-template-columns: 1fr;">
        ${DRINKS.map(d => `
          <div class="bm-cat-card${S.drink === d.id ? ' bm-selected' : ''}" data-drink="${d.id}">
            <div class="bm-cat-name">${d.name}</div>
            <div class="bm-cat-desc">${d.desc}</div>
          </div>`).join('')}
      </div>`;
  }
  function bindDrinks() {
    document.querySelectorAll('[data-drink]').forEach(el => {
      el.addEventListener('click', () => {
        S.drink = el.getAttribute('data-drink');
        document.querySelectorAll('[data-drink]').forEach(c => c.classList.remove('bm-selected'));
        el.classList.add('bm-selected');
      });
    });
  }

  function htmlWishes() {
    return `<p class="bm-step-desc">Haben Sie besondere Wünsche, Allergien oder Anmerkungen?</p>
      <div class="bm-wishes-wrap">
        <textarea id="bfWishes" placeholder="z.B. vegane Optionen, Nussallergien, besondere Dekoration…">${S.wishes}</textarea>
        <p class="bm-hint">Alle Angaben sind unverbindlich. Wir prüfen Ihre Wünsche und melden uns für Details.</p>
      </div>`;
  }
  function bindWishes() {
    document.getElementById('bfWishes')?.addEventListener('input', e => { S.wishes = e.target.value; });
  }

  function htmlSummary() {
    const cat = CATS.find(c => c.id === S.category);
    const menu = MENU[S.category];
    const row = (k, v) => `<div class="bm-summary-row"><span class="bm-row-key">${k}</span><span class="bm-row-val">${v}</span></div>`;

    const menuHtml = Object.entries(S.menuSel).filter(([, arr]) => arr.length > 0).map(([sec, arr]) => {
      const lines = arr.map(e => {
        const subPart = e.subOptions.length ? ` → ${e.subOptions.join(', ')}` : '';
        return `<div class="bm-summary-row"><span class="bm-row-key">—</span><span class="bm-row-val">${e.item}${subPart}</span></div>`;
      }).join('');
      return `<div class="bm-summary-block"><div class="bm-summary-title">${sec}</div>${lines}</div>`;
    }).join('');

    return `
      <div class="bm-summary-block"><div class="bm-summary-title">Veranstaltung</div>
        ${row('Catering-Art', cat?.name || '–')}
        ${row('Datum', S.date || '–')}
        ${row('Ort', S.location || '–')}
        ${row('Personen', S.persons + ' Personen')}
      </div>
      ${menuHtml || `<div class="bm-summary-block"><div class="bm-summary-title">Menü</div>${row('—', 'Keine Auswahl getroffen')}</div>`}
      <div class="bm-summary-block"><div class="bm-summary-title">Getränke</div>
        ${row('Pauschale', DRINKS.find(d => d.id === S.drink)?.name || '–')}
      </div>
      <div class="bm-summary-block"><div class="bm-summary-title">Kontakt</div>
        ${row('Name', S.name || '–')}
        ${row('E-Mail', S.email || '–')}
        ${S.phone ? row('Telefon', S.phone) : ''}
      </div>
      ${S.wishes ? `<div class="bm-summary-block"><div class="bm-summary-title">Individuelle Wünsche</div><div class="bm-summary-row"><span class="bm-row-val" style="text-align:left">${S.wishes}</span></div></div>` : ''}`;
  }

  function validate() {
    if (S.step === 1 && !S.category) { alert('Bitte wählen Sie eine Catering-Art.'); return false; }
    if (S.step === 2) {
      if (!S.persons || S.persons < 1) { alert('Bitte Personenanzahl angeben.'); return false; }
      if (!S.date) { alert('Bitte Datum angeben.'); return false; }
      if (!S.location) { alert('Bitte Veranstaltungsort angeben.'); return false; }
      if (!S.name) { alert('Bitte Namen angeben.'); return false; }
      if (!S.email || !S.email.includes('@')) { alert('Bitte gültige E-Mail angeben.'); return false; }
    }
    if (S.step === 3) {
      const total = Object.values(S.menuSel).reduce((a, arr) => a + arr.length, 0);
      if (total < 1) { alert('Bitte mindestens ein Gericht auswählen.'); return false; }
    }
    return true;
  }

  function submit() {
    document.getElementById('bmCard').style.display = 'none';
    document.getElementById('bmSuccess').classList.add('bm-visible');
    document.getElementById('banketmappe')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Init when present
  if (!document.getElementById('bmBody')) return;

  document.getElementById('bmNext')?.addEventListener('click', () => {
    if (S.step === TOTAL_STEPS) { submit(); return; }
    if (!validate()) return;
    S.step++;
    render();
    document.getElementById('banketmappe')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  document.getElementById('bmBack')?.addEventListener('click', () => {
    if (S.step > 0) { S.step--; render(); }
  });
  document.getElementById('bmReset')?.addEventListener('click', () => {
    Object.assign(S, { step: 0, category: '', persons: 30, date: '', location: '', name: '', email: '', phone: '', menuSel: {}, drink: 'none', wishes: '' });
    document.getElementById('bmCard').style.display = '';
    document.getElementById('bmSuccess').classList.remove('bm-visible');
    render();
  });

  render();
})();
