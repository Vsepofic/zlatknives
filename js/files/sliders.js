// Добавление классов слайдерам
// https://www.youtube.com/watch?v=p1dbl3kpp2I&t=3836s  0,58,07
// import Swiper, { Navigation, Pagination } from 'swiper';
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
  // bildSliders
  let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
  if (sliders) {
    sliders.forEach(slider => {
      slider.parentElement.classList.add('swiper');
      slider.classList.add('swiper-wrapper');
      for (const slide of slider.children) {
        slide.classList.add('swiper-slide');
      }
    });
  }
}
// Инициализация слайдеров
function initSliders() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  // Перечень слайдеров
  if (document.querySelectorAll('.main-block__slider')) {
    new Swiper('.main-block__slider', {
      // Optional parameters
      // Подключаем модули слайдера для конкретного случая
      // modules: [Navigation, Pagination],
      // effect: 'fade',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 50,
      parallax: true,
      // autoHeight: true,
      speed: 800,
      // touchRatio: 0,
      // simulateTouch: false,
      // Lazy: true,
      // Dotts 
      // direction: "vertical",
      loop: true,

      // If we need pagination
      pagination: {
        // el: ".swiper-pagination",
        el: ".controll-main-block__dotts",
        clickable: true,
      },

      // Navigation arrows
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      //   // nextEl: ".about__more .more__item-next",
      //   // prevEl: ".about__more .more__item-prev",
      // },

      // And if we need scrollbar
      // scrollbar: {
      //  el: ".swiper-scrollbar",
      // },
      // breakpoints: {
      //   320: {
      //     slidesPerView: 1,
      //     spaceBetween: 0,
      //     autoHeight: true,
      //   },
      //   768: {
      //     slidesPerView: 2,
      //     spaceBetween: 20,
      //   },
      //   992: {
      //     slidesPerView: 3,
      //     spaceBetween: 20,
      //   },
      //   1268: {
      //     slidesPerView: 4,
      //     spaceBetween: 30,
      //   },
      // },
      on: {
        init: function (swiper) {
          const allSliders = document.querySelector('.fraction-controll__all');
          const allSlidersItems = document.querySelectorAll('.slider-main-block:not(.swiper-slide-duplicate)');
          allSliders.innerHTML = allSlidersItems.length;
        },
        slideChange: function (swiper) {
          const currentSliders = document.querySelector('.fraction-controll__current');
          currentSliders.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;

        }
      }
    });
  }
  if (document.querySelectorAll('.products-hits__slider')) {
    new Swiper('.products-hits__slider', {
      // Optional parameters
      // Подключаем модули слайдера для конкретного случая
      // modules: [Navigation, Pagination],
      // effect: 'fade',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      
      observer: true,
      watchOverflow: true,
      observeParents: true,
      slidesPerView: 4,
      spaceBetween: 30,
      // parallax: true,
      // autoHeight: true,
      speed: 800,
      // touchRatio: 0,
      // simulateTouch: false,
      // Lazy: true,
      // Dotts 
      // direction: "vertical",
      // loop: true,

      // If we need pagination
      pagination: {
        // el: ".swiper-pagination",
        el: ".products-hits__dotts",
        clickable: true,
        dynamicBullets: true
      },

      // Navigation arrows
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      //   // nextEl: ".about__more .more__item-next",
      //   // prevEl: ".about__more .more__item-prev",
      // },

      // And if we need scrollbar
      // scrollbar: {
      //  el: ".swiper-scrollbar",
      // },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          autoHeight: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1399: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
      on: {
        // init: function (swiper) {
        //   const allSliders = document.querySelector('.fraction-controll__all');
        //   const allSlidersItems = document.querySelectorAll('.slider-main-block:not(.swiper-slide-duplicate)');
        //   allSliders.innerHTML = allSlidersItems.length;
        //   // allSliders.innerHTML = swiper.slides.length < 10 ? `0${swiper.slides.length}` : swiper.slides.length;

        //   console.log(swiper);
        // },
        // slideChange: function (swiper) {
        //   const currentSliders = document.querySelector('.fraction-controll__current');
        //   currentSliders.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;

        // }
      }
    });
  }
  if (document.querySelectorAll('.products-new__slider')) {
    new Swiper('.products-new__slider', {
      // Optional parameters
      // Подключаем модули слайдера для конкретного случая
      // modules: [Navigation, Pagination],
      // effect: 'fade',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      
      observer: true,
      watchOverflow: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 30,
      // parallax: true,
      // autoHeight: true,
      speed: 800,
      // touchRatio: 0,
      // simulateTouch: false,
      // Lazy: true,
      // Dotts 
      // direction: "vertical",
      // loop: true,

      // If we need pagination
      pagination: {
        // el: ".swiper-pagination",
        el: ".products-new__dotts",
        clickable: true,
        dynamicBullets: true
      },

      // Navigation arrows
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      //   // nextEl: ".about__more .more__item-next",
      //   // prevEl: ".about__more .more__item-prev",
      // },

      // And if we need scrollbar
      // scrollbar: {
      //  el: ".swiper-scrollbar",
      // },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          autoHeight: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1099: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1399: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      on: {
        // init: function (swiper) {
        //   const allSliders = document.querySelector('.fraction-controll__all');
        //   const allSlidersItems = document.querySelectorAll('.slider-main-block:not(.swiper-slide-duplicate)');
        //   allSliders.innerHTML = allSlidersItems.length;
        //   // allSliders.innerHTML = swiper.slides.length < 10 ? `0${swiper.slides.length}` : swiper.slides.length;

        //   console.log(swiper);
        // },
        // slideChange: function (swiper) {
        //   const currentSliders = document.querySelector('.fraction-controll__current');
        //   currentSliders.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;

        // }
      }
    });
  }
  if (document.querySelectorAll('.thumbs-images')) {
    const thumbsSwiper = new Swiper('.thumbs-images', {
      // Optional parameters
      // Подключаем модули слайдера для конкретного случая
      // modules: [Navigation, Pagination],
      // effect: 'fade',
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      // thumbs: {
      //   swiper: thumbsSwiper
      // },
      
      observer: true,
      watchOverflow: true,
      observeParents: true,
      slidesPerView: 4,
      spaceBetween: 16,
      // parallax: true,
      // autoHeight: true,
      speed: 800,
      // touchRatio: 0,
      // simulateTouch: false,
      // Lazy: true,
      // Dotts 
      // direction: "vertical",
      // loop: true,

      // If we need pagination
      // pagination: {
      //   // el: ".swiper-pagination",
      //   el: ".products-new__dotts",
      //   clickable: true,
      //   dynamicBullets: true
      // },

      // Navigation arrows
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      //   // nextEl: ".about__more .more__item-next",
      //   // prevEl: ".about__more .more__item-prev",
      // },

      // And if we need scrollbar
      // scrollbar: {
      //  el: ".swiper-scrollbar",
      // },
      breakpoints: {
        320: {
          slidesPerView: 2,
          // spaceBetween: 20,
          // autoHeight: true,
        },
        565: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 3,
        },
        // 1099: {
        //   slidesPerView: 3,
        // },
        1399: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      },
      on: {
        // init: function (swiper) {
        //   const allSliders = document.querySelector('.fraction-controll__all');
        //   const allSlidersItems = document.querySelectorAll('.slider-main-block:not(.swiper-slide-duplicate)');
        //   allSliders.innerHTML = allSlidersItems.length;
        //   // allSliders.innerHTML = swiper.slides.length < 10 ? `0${swiper.slides.length}` : swiper.slides.length;

        //   console.log(swiper);
        // },
        // slideChange: function (swiper) {
        //   const currentSliders = document.querySelector('.fraction-controll__current');
        //   currentSliders.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;

        // }
      }
    });
    new Swiper('.images-product__slider', {
      // Optional parameters
      // Подключаем модули слайдера для конкретного случая
      // modules: [Navigation, Pagination],
      // effect: 'fade',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      thumbs: {
        swiper: thumbsSwiper
      },
      centeredSlides: true,
      observer: true,
      watchOverflow: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 30,
      // parallax: true,
      // autoHeight: true,
      speed: 800,
      // touchRatio: 0,
      // simulateTouch: false,
      // Lazy: true,
      // Dotts 
      // direction: "vertical",
      // loop: true,

      // If we need pagination
      // pagination: {
      //   // el: ".swiper-pagination",
      //   el: ".products-new__dotts",
      //   clickable: true,
      //   dynamicBullets: true
      // },

      // Navigation arrows
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      //   // nextEl: ".about__more .more__item-next",
      //   // prevEl: ".about__more .more__item-prev",
      // },

      // And if we need scrollbar
      // scrollbar: {
      //  el: ".swiper-scrollbar",
      // },
      // breakpoints: {
      //   320: {
      //     slidesPerView: 1,
      //     spaceBetween: 20,
      //     autoHeight: true,
      //   },
      //   768: {
      //     slidesPerView: 2,
      //     spaceBetween: 20,
      //   },
      //   992: {
      //     slidesPerView: 1,
      //     spaceBetween: 20,
      //   },
      //   1099: {
      //     slidesPerView: 2,
      //     spaceBetween: 30,
      //   },
      //   1399: {
      //     slidesPerView: 3,
      //     spaceBetween: 30,
      //   },
      // },
      on: {
        // init: function (swiper) {
        //   const allSliders = document.querySelector('.fraction-controll__all');
        //   const allSlidersItems = document.querySelectorAll('.slider-main-block:not(.swiper-slide-duplicate)');
        //   allSliders.innerHTML = allSlidersItems.length;
        //   // allSliders.innerHTML = swiper.slides.length < 10 ? `0${swiper.slides.length}` : swiper.slides.length;

        //   console.log(swiper);
        // },
        // slideChange: function (swiper) {
        //   const currentSliders = document.querySelector('.fraction-controll__current');
        //   currentSliders.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;

        // }
      }
    });
  }
}

window.addEventListener('load', function (e) {
  // Запуск инициализации слайдеров
  initSliders()
})


