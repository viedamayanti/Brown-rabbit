const nextBtn = document.querySelector('.carousel-control-next');
const prevBtn = document.querySelector('.carousel-control-prev');
const controlCarousel = document.querySelector(
  '#carouselExampleControls .carousel-inner'
);
const fadeCarousel = document.querySelector('#carouselFade .carousel-inner');
function nextCarousel() {
  const activeSlide = controlCarousel.querySelector('.carousel-item.active');
  activeSlide.classList.remove('active');
  if (activeSlide.nextElementSibling) {
    activeSlide.nextElementSibling.classList.add('active');
  } else {
    controlCarousel.firstElementChild.classList.add('active');
  }

  const activeTextOverlay = fadeCarousel.querySelector('.carousel-item.active');
  activeTextOverlay.classList.remove('active');
  if (activeTextOverlay.nextElementSibling) {
    activeTextOverlay.nextElementSibling.classList.add('active');
  } else {
    fadeCarousel.firstElementChild.classList.add('active');
  }
}
function prevCarousel() {
  const activeSlide = controlCarousel.querySelector('.carousel-item.active');
  activeSlide.classList.remove('active');
  if (activeSlide.previousElementSibling) {
    activeSlide.previousElementSibling.classList.add('active');
  } else {
    controlCarousel.lastElementChild.classList.add('active');
  }

  const activeTextOverlay = fadeCarousel.querySelector('.carousel-item.active');
  activeTextOverlay.classList.remove('active');
  if (activeTextOverlay.previousElementSibling) {
    activeTextOverlay.previousElementSibling.classList.add('active');
  } else {
    fadeCarousel.lastElementChild.classList.add('active');
  }
}
nextBtn.addEventListener('click', nextCarousel);
prevBtn.addEventListener('click', prevCarousel);
