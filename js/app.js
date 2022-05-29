$(document).ready(function () {
  // $('.phones-header__arrow--icon').addClass('arrow-active');
  /* =========== кнопка 'phones-header__arrow' для телефонов ========== */
  $('.phones-header__arrow--icon').on('click', function () {
    $('.phones-header__list').toggleClass('phone-active');
    $('.phones-header__arrow--icon').toggleClass('arrow-active');
  });

  $
  // переключение шапки меню --------------------------------------

  // < !--Nav tabs-- >
  $("#target-1").click(function () {
    $('#target-1').toggleClass('active');
    $('#target-2').removeClass('active');
    $('#target-3').removeClass('active');
    $('#target-4').removeClass('active');
    $('#target-5').removeClass('active');
    $('#product-1').toggleClass('active');
    $('#product-2').removeClass('active');
    $('#product-3').removeClass('active');
    $('#product-4').removeClass('active');
    $('#product-5').removeClass('active');
    if ($(window).width() < tablet) {
      $('.menu-catalog__link').removeClass('active');
    }
  });
  $("#target-2").click(function () {
    $('#target-2').toggleClass('active');
    $('#target-1').removeClass('active');
    $('#target-3').removeClass('active');
    $('#target-4').removeClass('active');
    $('#target-5').removeClass('active');
    $('#product-2').toggleClass('active');
    $('#product-1').removeClass('active');
    $('#product-3').removeClass('active');
    $('#product-4').removeClass('active');
    $('#product-5').removeClass('active');
    if ($(window).width() < tablet) {
      $('.menu-catalog__link').removeClass('active');
    }
  });
  $("#target-3").click(function () {
    $('#target-3').toggleClass('active');
    $('#target-2').removeClass('active');
    $('#target-1').removeClass('active');
    $('#target-4').removeClass('active');
    $('#target-5').removeClass('active');
    $('#product-3').toggleClass('active');
    $('#product-2').removeClass('active');
    $('#product-1').removeClass('active');
    $('#product-4').removeClass('active');
    $('#product-5').removeClass('active');
    if ($(window).width() < tablet) {
      $('.menu-catalog__link').removeClass('active');
    }
  });
  $("#target-4").click(function () {
    $('#target-4').toggleClass('active');
    $('#target-2').removeClass('active');
    $('#target-3').removeClass('active');
    $('#target-1').removeClass('active');
    $('#target-5').removeClass('active');
    $('#product-4').toggleClass('active');
    $('#product-2').removeClass('active');
    $('#product-3').removeClass('active');
    $('#product-1').removeClass('active');
    $('#product-5').removeClass('active');
    if ($(window).width() < tablet) {
      $('.menu-catalog__link').removeClass('active');
    }
  });
  $("#target-5").click(function () {
    $('#target-5').toggleClass('active');
    $('#target-2').removeClass('active');
    $('#target-3').removeClass('active');
    $('#target-4').removeClass('active');
    $('#target-1').removeClass('active');
    $('#product-5').toggleClass('active');
    $('#product-2').removeClass('active');
    $('#product-3').removeClass('active');
    $('#product-4').removeClass('active');
    $('#product-1').removeClass('active');
    if ($(window).width() < tablet) {
      $('.menu-catalog__link').removeClass('active');
    }
  });
  // Открываем 'sub-menu-catalog__list-block' на mobile ------------

  // < !--Nav tabs -- sub-menu -->
  // Первая категория
  $("#list-target-11").click(function () {
    if ($(window).width() < tablet) {
      $('#list-block-11').toggleClass('sub-list-open');
    }
  });
  $("#list-target-12").click(function () {
    if ($(window).width() < tablet) {
      $('#list-block-12').toggleClass('sub-list-open');
    }
  });
  $("#list-target-13").click(function () {
    if ($(window).width() < tablet) {
      $('#list-block-13').toggleClass('sub-list-open');
    }
  });
  $("#list-target-14").click(function () {
    if ($(window).width() < tablet) {
      $('#list-block-14').toggleClass('sub-list-open');
    }
  });
  $("#list-target-15").click(function () {
    if ($(window).width() < tablet) {
      $('#list-block-15').toggleClass('sub-list-open');
    }
  });
  // Вторая категория
  $("#list-target-21").click(function () {
    if ($(window).width() < tablet) {
      $('#list-block-21').toggleClass('sub-list-open');
    }
  });
  $("#list-target-22").click(function () {
    if ($(window).width() < tablet) {
      $('#list-block-22').toggleClass('sub-list-open');
    }
  });
  $("#list-target-23").click(function () {
    if ($(window).width() < tablet) {
      $('#list-block-23').toggleClass('sub-list-open');
    }
  });
  $("#list-target-24").click(function () {
    if ($(window).width() < tablet) {
      $('#list-block-24').toggleClass('sub-list-open');
    }
  });
  $("#list-target-25").click(function () {
    if ($(window).width() < tablet) {
      $('#list-block-25').toggleClass('sub-list-open');
    }
  });
  // Третья категория
  $("#list-target-31").click(function () {
    if ($(window).width() < tablet) {
      $('#list-block-31').toggleClass('sub-list-open');
    }
  });
  $("#list-target-32").click(function () {
    if ($(window).width() < tablet) {
      $('#list-block-32').toggleClass('sub-list-open');
    }
  });
  $("#list-target-33").click(function () {
    if ($(window).width() < tablet) {
      $('#list-block-33').toggleClass('sub-list-open');
    }
  });
  $("#list-target-34").click(function () {
    if ($(window).width() < tablet) {
      $('#list-block-34').toggleClass('sub-list-open');
    }
  });
  $("#list-target-35").click(function () {
    if ($(window).width() < tablet) {
      $('#list-block-35').toggleClass('sub-list-open');
    }
  });
  // Четвертая категория
  $("#list-target-41").click(function () {
    if ($(window).width() < tablet) {
      $('#list-block-41').toggleClass('sub-list-open');
    }
  });
  $("#list-target-42").click(function () {
    if ($(window).width() < tablet) {
      $('#list-block-42').toggleClass('sub-list-open');
    }
  });
  $("#list-target-43").click(function () {
    if ($(window).width() < tablet) {
      $('#list-block-43').toggleClass('sub-list-open');
    }
  });
  $("#list-target-44").click(function () {
    if ($(window).width() < tablet) {
      $('#list-block-44').toggleClass('sub-list-open');
    }
  });
  $("#list-target-45").click(function () {
    if ($(window).width() < tablet) {
      $('#list-block-45').toggleClass('sub-list-open');
    }
  });
  // Пятая категория
  $("#list-target-51").click(function () {
    if ($(window).width() < tablet) {
      $('#list-block-51').toggleClass('sub-list-open');
    }
  });
  $("#list-target-52").click(function () {
    if ($(window).width() < tablet) {
      $('#list-block-52').toggleClass('sub-list-open');
    }
  });
  $("#list-target-53").click(function () {
    if ($(window).width() < tablet) {
      $('#list-block-53').toggleClass('sub-list-open');
    }
  });
  $("#list-target-54").click(function () {
    if ($(window).width() < tablet) {
      $('#list-block-54').toggleClass('sub-list-open');
    }
  });
  $("#list-target-55").click(function () {
    if ($(window).width() < tablet) {
      $('#list-block-55').toggleClass('sub-list-open');
    }
  });



  // Кнопка бургер ---------------------------
  $(".burger-menu").click(function () {
    $('.burger-menu').toggleClass('menu-open');
    $('.menu__body').toggleClass('menu-open');
    $('.menu-catalog').removeClass('catalog-open');
    $('.sub-menu-catalog').removeClass('sub-catalog-open');
    $('.sub-menu-catalog__block').removeClass('active');
    $('.sub-menu-catalog__list').removeClass('sub-list-open');
  });
  // Кнопка Назад в бургере ---------------------------

  $(".menu-catalog__back").click(function () {
    $('.menu-catalog').removeClass('catalog-open');
  });
  $(".sub-menu-catalog__back").click(function () {
    $('.sub-menu-catalog').removeClass('sub-catalog-open');
    $('.sub-menu-catalog__block').removeClass('active');
    $('.menu-catalog__link').removeClass('active');
  });
  $(".sub-menu-catalog__back-list").click(function () {
    $('.sub-menu-catalog__list-block').removeClass('sub-list-open');
  });

  // Открываем 'Каталог товаров' на mobile ------------
  $(".menu-top-header__link_catalog").click(function () {
    $('.menu-catalog').addClass('catalog-open');
  });
  // Открываем 'sub-menu Каталог товаров' на mobile ------------
  $(".menu-catalog__link").click(function () {
    $('.sub-menu-catalog').addClass('sub-catalog-open');
  });

  // Перебрасываем контент с меню в шапку ------------
  const tablet = 991.98;
  const mobile = 767.98;
  const mobileSmall = 575.98;
  if ($(window).width() < tablet) {
    $('.menu-top-header__list').appendTo($('.menu__body'));
  }
  if ($(window).width() < tablet) {
    $('.append-2').appendTo($('.top-header__container'));
  }
  if ($(window).width() < mobile) {
    $('.action-header__location').appendTo($('.top-header__container'));
  }
  if ($(window).width() < mobileSmall) {
    $('.body-header__search').appendTo($('.catalog-header__container'));
  }
})
/* ====================== 'spoller' ===================== */
const footers = document.querySelectorAll("[data-name='spoiler-title']");
footers.forEach(function (item) {
  item.addEventListener("click", footerClick);
});
function footerClick() {
  this.nextElementSibling.classList.toggle("spoiler-body");
}
$('.spoller-item-footer__title').on('click', function () {
  $(this).toggleClass('spoller-init');
});
$('.price-filter__title').on('click', function () {
  $(this).toggleClass('spoller-init');
});
$('.item-filter-catalog__title').on('click', function () {
  $(this).toggleClass('spoller-init');
});
// if ($(window).width() < tablet) {
//   $('.filter-catalog__title').on('click', function () {
//   $(this).toggleClass('spoller-init');
// });
//     }
/* ====================== 'кнопка Доставить в табах' ===================== */
$('.product-info__btn').on('click', function () {
  $('.product-info__delivery-mail').addClass('mail-show');
});
// *************************************
// if (document.querySelector('.filter-catalog__title')) {
//   document.querySelector('.filter-catalog__title').addEventListener('click', function () {
//     if (window.innerWidth < 992) {
//       document.querySelector('.filter-catalog__items').classList.toggle('.spoiler-body');
//     }
//   })
// }
// ****************************************
// /* ====================== 'spoller' ===================== */
// const footers = document.querySelectorAll("[data-name='spoiler-title']");
// footers.forEach(function (item) {
//   item.addEventListener("click", footerClick);
// });
// function footerClick() {
//   this.nextElementSibling.classList.toggle("spoiler-body");
// }
// $('.spoller-item-footer__title').on('click', function () {
//   $(this).toggleClass('spoller-init');
// });

// Следует его расскоментировать -------------------------------

// Подключение основного файла стилей
// import "../scss/style.scss";

// Плагины ======================================================
// Динамический адаптив
// import "./libs/dynamic_adapt.js";   пока нет !

// Форматирование чисел
// import "./libs/wNumb.min.js";   пока нет !

// Основные модули ==============================================
// --- ********
// Модуль работы с ползунком ====================================
// Подключение и настройки в файле  js/files/forms/range.js
// Документация плагина: https://refreshless.com/nouislider/
// Сниппет (HTML): range   пока нет !
// import "./files/forms/range.js";   пока нет !

// Модуль работы с подсказками (tippy) ===============================
// Подключение и настройки в файле  js/files/forms/tippy.js
// Документация плагина: https://atomiks.github.io/tippyjs/
// Сниппет (HTML): tip   пока нет !
// import "./files/tippy.js";   пока нет !

// Модуль работы co слайдером (swiper) ===============================
// Видео*** https://www.youtube.com/watch?v=0WFE1I-Thf8&t=402s   1,53,20
// Подключение и настройки плагина слайдера Swiper и новых слайдеров в файле  js/files/sliders.js
// Документация плагина: https://swiperjs.com/get-started
// Сниппет (HTML): swiper   пока нет !
// import "./files/sliders.js";   // пока нет !

// Модуль работы c прокруткой страницы ===============================
// Изменение дизайна скроллбара
// Документация: В HTML добавляем к блоку атрибут data-simplebar
// Документация плагина: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
// Сниппет (HTML):
// import "./files/scroll/simplebar.js";   пока нет !

// Ленивая (отложенная) загрузка картинок ===============================
// Документация: В HTML добавляем img, video, audio, iframe, но вместо src пишем data-src
// Документация плагина: https://github.com/verlok/vanilla-lazyload
// Сниппет (HTML):
// import "./files/scroll/lazyload.js";   пока нет !


