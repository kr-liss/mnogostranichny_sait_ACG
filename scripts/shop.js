document.querySelectorAll(".shopItem .text").forEach((textDiv) => {
  textDiv.addEventListener("click", () => {
    textDiv.classList.toggle("active");
  });
});
