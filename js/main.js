// Main JavaScript for Chez Werth website

// Set active nav link based on current page
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // Check if this is the current page
    if (
      (href === '/' && currentPath === '/') ||
      (href !== '/' && currentPath.includes(href))
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Smooth scroll behavior
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });
}

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const navLinksContainer = document.querySelector('.nav-links');
    if (navLinksContainer) {
      navLinksContainer.style.display = 'none';
    }
  });
});

// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.getAttribute('data-src')) {
          img.setAttribute('src', img.getAttribute('data-src'));
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Form handling (if needed)
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Merci! Nous vous répondrons bientôt.');
    contactForm.reset();
  });
}
