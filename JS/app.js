const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    header.classList.add('fixed')
})

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });