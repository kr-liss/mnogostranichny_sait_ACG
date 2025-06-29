document.addEventListener("DOMContentLoaded", () => {
  // Код для .btn.contacts
  const contactsBtn = document.querySelector(".btn.contacts");
  const contactsPopup = contactsBtn.querySelector(".popup");
  const contactsBottom = contactsBtn.querySelector(".bottom");

  contactsBtn.addEventListener("click", () => {
    const popupShown = contactsPopup.classList.toggle("show");
    if (popupShown) {
      contactsBottom.classList.remove("show");
    } else {
      contactsBottom.classList.add("show");
    }
  });

  // Код для .btn.creator
  const creatorBtn = document.querySelector(".btn.creator");
  const creatorPopup = creatorBtn.querySelector(".popup.popupText");

  creatorBtn.addEventListener("click", () => {
    creatorPopup.classList.toggle("show");
  });
});
