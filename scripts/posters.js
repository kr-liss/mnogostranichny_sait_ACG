document.addEventListener("DOMContentLoaded", () => {
  const posters = document.querySelectorAll(".poster");
  const section = document.querySelector(".section");
  let fullscreenImg = null;
  let originalPoster = null;

  posters.forEach((poster) => {
    poster.addEventListener("click", (e) => {
      e.stopPropagation(); // чтобы не сработал общий клик по документу

      if (fullscreenImg) return; // если уже открыто — игнорируем

      originalPoster = poster;
      // Убрать border у оригинала
      originalPoster.style.border = "none";

      // Создаём копию изображения
      fullscreenImg = poster.cloneNode(true);
      fullscreenImg.classList.add("fullscreen-poster");
      fullscreenImg.classList.remove("one", "two", "three", "four", "five");
      // добавим класс active с задержкой для анимации
      document.body.appendChild(fullscreenImg);

      // Блюрим задний фон
      section.classList.add("blurred");

      // Запускаем анимацию с небольшим таймаутом, чтобы браузер применил стили
      requestAnimationFrame(() => {
        fullscreenImg.classList.add("active");
      });

      // Клик по полноэкранному изображению закрывает его
      fullscreenImg.addEventListener("click", closeFullscreen);
    });
  });

  // Клик по документу закрывает полноэкранное изображение, если оно открыто
  document.addEventListener("click", () => {
    if (fullscreenImg) {
      closeFullscreen();
    }
  });

  function closeFullscreen() {
    if (!fullscreenImg) return;

    // Убираем класс active для запуска анимации закрытия
    fullscreenImg.classList.remove("active");
    // Убираем блюр
    section.classList.remove("blurred");

    // Восстанавливаем border у оригинального постера
    if (originalPoster) {
      originalPoster.style.border = "1px solid #0bdb15";
    }

    // После окончания анимации удаляем элемент
    fullscreenImg.addEventListener(
      "transitionend",
      () => {
        if (fullscreenImg && fullscreenImg.parentNode) {
          fullscreenImg.parentNode.removeChild(fullscreenImg);
          fullscreenImg = null;
          originalPoster = null;
        }
      },
      { once: true }
    );
  }
});
