// swiper product end of site

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  breakpoints: {
    // از 480px به بالا
    431: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // از 768px به بالا
    1028: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // از 1024px به بالا
    1512: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});
