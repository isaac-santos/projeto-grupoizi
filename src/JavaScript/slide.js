const swiper = new Swiper('.swiper', {
    hashNavigation: true,
    loop: false,
  
    // Paginação
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Setas de navegação
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 200
    },

    375: {
      slidesPerView: 1.2,
      spaceBetween: 30
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1.1,
      spaceBetween: 40
    },

    // maior que >= 1440px
    1440: {
        slidesPerView: 2,
        spaceBetween: 15
    }
  }
  });