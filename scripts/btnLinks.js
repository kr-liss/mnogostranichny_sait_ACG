const linksBtnDiv = document.querySelector(".linksBtn.greenBlurBg");
const bottomDiv = linksBtnDiv.querySelector(".bottom.greenBlurBg");
const linksDiv = linksBtnDiv.querySelector(".links.greenBlurBg");

// Изначально показываем bottom, скрываем links
bottomDiv.classList.remove("hidden");
linksDiv.classList.remove("visible");

linksBtnDiv.addEventListener("click", () => {
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
