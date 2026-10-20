// Edit your contact details here. Project examples are in index.html.
// The name comes from the HTML so it also works without JavaScript.
const profile = {
  name: document.querySelector('[data-site-name]')?.textContent.trim(),
  email: 'realroan67@gmail.com',
  github: 'https://github.com/realnroan67-wq',
  linkedin: '' // Add your LinkedIn URL here when ready.
};

if (profile.name) {
  document.querySelectorAll('[data-site-name]').forEach(el => { el.textContent = profile.name; });
  document.title = `${profile.name} — IT Student & Aspiring Technologist`;
}
document.querySelectorAll('[data-email]').forEach(el => { el.href = `mailto:${profile.email}`; });
document.querySelectorAll('[data-github]').forEach(el => { el.href = profile.github; });
document.querySelectorAll('[data-linkedin]').forEach(el => {
  el.hidden = !profile.linkedin;
  if (profile.linkedin) el.href = profile.linkedin;
});

const toggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('#mobile-nav');
const desktop = window.matchMedia('(min-width: 640px)');

if (toggle && menu) {
  const setMenuOpen = open => {
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('menu-open', open);
  };

  toggle.addEventListener('click', () => {
    setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    setMenuOpen(false);
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      toggle.focus();
    }
  });
  desktop.addEventListener('change', event => {
    if (event.matches) {
      if (menu.contains(document.activeElement)) {
        document.querySelector('nav[aria-label="Main navigation"] a')?.focus();
      }
      setMenuOpen(false);
    }
  });
}

// Content stays visible unless an observer is ready to reveal it.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
    el.classList.add('reveal-pending');
  });
}