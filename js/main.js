document.addEventListener('DOMContentLoaded', () => {
  setupActiveNavLinks();
  setupSmoothAnchorOffsets();
});

function setupActiveNavLinks() {
  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('nav a[href^="#"]')];

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');

        navLinks.forEach((link) => {
          const isMatch = link.getAttribute('href') === `#${id}`;
          link.classList.toggle('text-primary', isMatch);
          link.classList.toggle('text-ink/70', !isMatch);
        });
      });
    },
    {
      rootMargin: '-35% 0px -45% 0px',
      threshold: 0.01,
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupSmoothAnchorOffsets() {
  const header = document.querySelector('header');
  const links = document.querySelectorAll('a[href^="#"]');
  if (!header || !links.length) return;

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      const headerHeight = header.offsetHeight;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12;

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      });
    });
  });
}