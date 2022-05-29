
const ratings = document.querySelectorAll(".rating");
if (ratings.length > 0) {
  initRatings();
};
// основная функция
function initRatings() {
  let ratingActive;
  let ratingValue;
  // ищем все рейтинги на странице
  for (let index = 0; index < ratings.length; index++){
    const rating = ratings[index];
    initRatings(rating);
  }
  // инициализируем конкретный рейтинг
  function initRatings(rating) {
    initRatingVars(rating);

    setRatingActiveWidth();

    // возможность указывать оценку, если есть класс
    if (rating.classList.contains("rating_set")) {
      setRating(rating);
    }
  }
  // инициализация переменных
  function initRatingVars(rating) {
    ratingActive = rating.querySelector(".rating__active");
    ratingValue = rating.querySelector(".rating__value");
  }
  // изменяем ширину активных звезд
  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }
  // возможность указывать оценку
  function setRating(rating) {
    const ratingItems = rating.querySelectorAll(".rating__item");
    for (let index = 0; index < ratingItems.length; index++) {
      const ratingItem = ratingItems[index];
      ratingItem.addEventListener("mouseenter", function (e) {
        // обновляем переменные
        initRatingVars(rating);
        // обновляем активные звезды
        setRatingActiveWidth(ratingItem.value);
      });
      ratingItem.addEventListener("mouseleave", function (e) {
        // обновляем активные звезды
        setRatingActiveWidth();
      });
      ratingItem.addEventListener("click", function (e) {
        // обновляем переменные
        initRatingVars(rating);

        if (rating.dataset.ajax) {
          // отправить на сервер
          setRatingValue(ratingItem.value, rating);
        } else {
          // отобразить указанную оценку
          ratingValue.innerHTML = index + 1;
          // обновляем активные звезды
          setRatingActiveWidth();
        }
      });
    };
  };
};