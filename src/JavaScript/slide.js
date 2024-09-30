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
    320: {
      slidesPerView: 'auto',
      spaceBetween: 1
    },
    480: {
      slidesPerView: 'auto',
      spaceBetween: 20
    },
    640: {
      slidesPerView: 'auto',
      spaceBetween: 30
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 190
    },
    1024: {
      slidesPerView: 'auto',
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 'auto',
      spaceBetween: 160
    }
  }
  });