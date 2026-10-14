(() => {
  const body = document.body;
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const bagButton = document.querySelector('.bag-button');
  const drawer = document.querySelector('.bag-drawer');
  const backdrop = document.querySelector('.drawer-backdrop');
  const closeButton = document.querySelector('.drawer-close');
  const closeLink = document.querySelector('[data-close-bag]');
  const count = document.querySelector('.silenced-count');
  const chips = [...document.querySelectorAll('.label-chip')];
  let lastFocus = null;

  document.querySelector('#year').textContent = new Date().getFullYear();

  function setMenu(open) {
    body.classList.toggle('nav-open', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  }

  function setBag(open) {
    body.classList.toggle('drawer-open', open);
    drawer.classList.toggle('is-open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    drawer.inert = !open;
    backdrop.hidden = !open;
    if (open) {
      lastFocus = document.activeElement;
      closeButton.focus();
    } else if (lastFocus) {
      lastFocus.focus();
    }
  }

  menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });
  bagButton.addEventListener('click', () => setBag(true));
  closeButton.addEventListener('click', () => setBag(false));
  backdrop.addEventListener('click', () => setBag(false));
  closeLink.addEventListener('click', () => setBag(false));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (body.classList.contains('drawer-open')) setBag(false);
      if (body.classList.contains('nav-open')) setMenu(false);
    }
  });

  function updateSilencedCount() {
    const silenced = chips.filter((chip) => chip.getAttribute('aria-pressed') === 'true').length;
    count.textContent = `${silenced} / ${chips.length} LABELS SILENCED`;
  }
  chips.forEach((chip) => chip.addEventListener('click', () => {
    chip.setAttribute('aria-pressed', String(chip.getAttribute('aria-pressed') !== 'true'));
    updateSilencedCount();
  }));
})();