document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".page");
  const img = page.querySelector("img");

  const srcArray = [
    "./svgs/books/1.svg",
    "./svgs/books/2.svg",
    "./svgs/books/3.svg",
    "./svgs/books/4.svg",
    "./svgs/books/5.svg",
    "./svgs/books/6.svg",
    "./svgs/books/7.svg",
    "./svgs/books/8.svg",
    "./svgs/books/9.svg",
    "./svgs/books/10.svg",
    "./svgs/books/11.svg",
    "./svgs/books/12.svg",
    "./svgs/books/13.svg",
  ];

  // Текущий индекс в массиве
  let currentIndex = 0;

  page.addEventListener("click", () => {
    // Переключаем индекс на следующий (0 -> 1 -> 0)
    currentIndex = (currentIndex + 1) % srcArray.length;
    img.src = srcArray[currentIndex];
    console.log("Текущее изображение:", img.src);
  });
});
