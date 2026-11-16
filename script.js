(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#primary-nav');
  const index = document.querySelector('.nav-index');

  function closeMenu() {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
    index.open = false;
  }

  menuButton.addEventListener('click', () => {
    const opening = menuButton.getAttribute('aria-expanded') !== 'true';
    navigation.classList.toggle('is-open', opening);
    menuButton.setAttribute('aria-expanded', String(opening));
    menuButton.setAttribute('aria-label', opening ? 'Fechar menu' : 'Abrir menu');
    if (!opening) index.open = false;
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!index.contains(event.target)) index.open = false;
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const wasOpen = navigation.classList.contains('is-open');
      index.open = false;
      if (wasOpen) {
        closeMenu();
        menuButton.focus();
      }
    }
  });

  const counter = document.querySelector('#visit-count');
  try {
    const key = 'minimanual-acessos';
    const stored = localStorage.getItem(key);
    const previous = stored === null ? 0 : Number(stored);
    if (!Number.isSafeInteger(previous) || previous < 0 || previous >= Number.MAX_SAFE_INTEGER) {
      throw new Error('Contador armazenado inválido.');
    }
    const visits = previous + 1;
    localStorage.setItem(key, String(visits));
    counter.textContent = `Acessos neste navegador: ${visits.toLocaleString('pt-BR')}`;
  } catch (error) {
    console.warn('Não foi possível registrar o acesso neste navegador.', error);
    counter.textContent = 'Acessos neste navegador: indisponível';
  }

  if ('IntersectionObserver' in window) {
    const links = Array.from(document.querySelectorAll('#sidebar-index a'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.setAttribute('aria-current', 'location');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    document.querySelectorAll('.manual-section').forEach((section) => observer.observe(section));
  }
})();
