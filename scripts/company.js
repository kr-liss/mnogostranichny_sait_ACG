const ourCompanyDiv = document.querySelector(".ourcompany.greenBlurBg");
const bottomDiv = ourCompanyDiv.querySelector(".bottom.greenBlurBg");
const linksDiv = ourCompanyDiv.querySelector(".links.greenBlurBg");

// Изначально показываем bottom, скрываем links
bottomDiv.classList.remove("hidden");
linksDiv.classList.remove("visible");

ourCompanyDiv.addEventListener("click", () => {
  const isLinksVisible = linksDiv.classList.contains("visible");

  if (isLinksVisible) {
    // Скрываем links, показываем bottom
    linksDiv.classList.remove("visible");
    bottomDiv.classList.remove("hidden");
  } else {
    // Показываем links, скрываем bottom
    linksDiv.classList.add("visible");
    bottomDiv.classList.add("hidden");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("myVideo");
  const storageKey = "video-currentTime";

  // Восстановить время воспроизведения
  const savedTime = localStorage.getItem(storageKey);
  if (savedTime) {
    video.currentTime = parseFloat(savedTime);
  }

  // Запустить воспроизведение (на всякий случай)
  video.play().catch(() => {
    // Автоплей может быть заблокирован браузером, ничего страшного
  });

  // Сохранять время воспроизведения каждые 1 секунду
  video.addEventListener("timeupdate", () => {
    localStorage.setItem(storageKey, video.currentTime);
  });

  // При закрытии страницы (обновлении) тоже сохранить время
  window.addEventListener("beforeunload", () => {
    localStorage.setItem(storageKey, video.currentTime);
  });
});
