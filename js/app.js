// Navbar shadow effect on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
});

// Mobile menu toggle functionality
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
}
