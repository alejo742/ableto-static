//handling the mobile menu toggle
const mobileMenuOverlay = document.querySelector('.mobile-main-navbar-overlay');
function openMobileMenu() {
  mobileMenuOverlay.classList.add('active');
  setTimeout(() => {
    mobileMenuOverlay.classList.add('visible')
  }, 300)
}
function closeMobileMenu() {
  mobileMenuOverlay.classList.remove('visible');
  setTimeout(() => {
    mobileMenuOverlay.classList.remove('active')
  }, 500)
}
// adding event listeners to open/close mobile menu
const mobileMenuOpen = document.querySelector('.navbar-burger');
const mobileMenuClose = document.querySelector('.close-mobile-menu');
mobileMenuOpen.addEventListener('click', openMobileMenu)
mobileMenuClose.addEventListener('click', closeMobileMenu)