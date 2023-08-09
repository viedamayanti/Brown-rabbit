// Header and responsive
const menuBtn = document.querySelector('.menu-btn');
const burgerMenu = document.querySelector('.hamburger-menu');
const closeBtn = document.querySelector('.close-btn');
const navBar = document.querySelector('.navigation-bar');
const someLogo = document.querySelector('.some-logo-header');
const searchBtn = document.querySelector('.search-header');
const showSearchBox = document.querySelector('.search-box');
const searchFlexBtn = document.querySelector('.search-flex');
const logoFlex = document.querySelector('.logo');
const mainSection = document.querySelector('.main-section');
let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    burgerMenu.style.display = 'none';
    closeBtn.style.display = 'block';
    navBar.style.display = 'block';
    someLogo.style.display = 'block';
    mainSection.style.display = 'none';
  } else {
    burgerMenu.style.display = 'block';
    closeBtn.style.display = 'none';
    navBar.style.display = 'none';
    someLogo.style.display = 'none';
    mainSection.style.display = 'block';
  }
}

let isSearchOpen = false;
function toggleSearch() {
  if (isSearchOpen) {
    showSearchBox.style.display = 'block';
    isSearchOpen = false;
  } else {
    showSearchBox.style.display = 'none';
    isSearchOpen = true;
  }
}

function flexToggleSearch() {
  if (isSearchOpen) {
    searchFlexBtn.classList.add('clicked');
    showSearchBox.style.display = 'block';
    menuBtn.style.display = 'none';
    logoFlex.style.display = 'none';
    isSearchOpen = false;
  } else {
    showSearchBox.style.display = 'none';
    searchFlexBtn.classList.remove('clicked');
    searchFlexBtn.style.display = 'block';
    menuBtn.style.display = 'block';
    logoFlex.style.display = 'block';
    isSearchOpen = true;
  }
}

window.addEventListener('resize', function () {
  if (window.innerWidth > 767) {
    if (!isMenuOpen) {
      navBar.style.display = 'block';
      someLogo.style.display = 'block';
    }
    burgerMenu.style.display = 'none';
    closeBtn.style.display = 'none';
  } else {
    burgerMenu.style.display = isMenuOpen ? 'none' : 'block';
    closeBtn.style.display = isMenuOpen ? 'block' : 'none';
    navBar.style.display = isMenuOpen ? 'block' : 'none';
    someLogo.style.display = isMenuOpen ? 'block' : 'none';
  }
});

if (window.innerWidth > 767) {
  burgerMenu.style.display = 'none';
  closeBtn.style.display = 'none';
  logoFlex.style.display = 'block';
} else {
  navBar.style.display = 'block';
  someLogo.style.display = 'none';
}

menuBtn.addEventListener('click', toggleMenu);
searchFlexBtn.addEventListener('click', flexToggleSearch);
searchBtn.addEventListener('click', toggleSearch);
