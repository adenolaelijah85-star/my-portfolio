// Basic interactive behaviors: mobile menu toggle, smooth scroll, contact form basic validation
document.addEventListener('DOMContentLoaded', function () {
  // year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile nav toggle
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  menuToggle && menuToggle.addEventListener('click', function () {
    if (nav.style.display === 'block') {
      nav.style.display = '';
    } else {
      nav.style.display = 'block';
      nav.style.background = 'white';
      nav.style.position = 'absolute';
      nav.style.right = '18px';
      nav.style.top = '62px';
      nav.style.padding = '12px 18px';
      nav.style.borderRadius = '8px';
      nav.style.boxShadow = '0 8px 30px rgba(2,6,23,0.08)';
    }
  });

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      if (!targetId) return;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // close mobile nav after click
      if (window.innerWidth < 920 && nav) nav.style.display = '';
    });
  });

  // contact form (basic client-side)
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        formMessage.textContent = 'Please fill all fields.';
        formMessage.style.color = 'crimson';
        return;
      }
      // Simulated submit (you can wire to an API later)
      formMessage.textContent = 'Thanks, your message was sent (demo).';
      formMessage.style.color = 'green';
      form.reset();
    });
  }
});