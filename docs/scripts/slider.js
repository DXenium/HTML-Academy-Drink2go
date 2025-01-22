// source/scripts/slider.js
var slider = document.querySelector(".slider");
var sliderInner = document.querySelector(".slider__inner");
var images = sliderInner.querySelectorAll(".hero__container");
var paginationItems = document.querySelectorAll(".pagination__item");
var heroSection = document.querySelector(".hero");
var currentIndex = 0;
var backgroundColors = ["#f3ebe1", "#eae6fc", "#e5e6e8"];
function enableButtons() {
  document.querySelector(".slider-button-prev").removeAttribute("disabled");
  document.querySelector(".slider-button-next").removeAttribute("disabled");
}
function disableButtons() {
  if (currentIndex === 0) {
    document.querySelector(".slider-button-prev").setAttribute("disabled", "true");
  }
  if (currentIndex === images.length - 1) {
    document.querySelector(".slider-button-next").setAttribute("disabled", "true");
  }
}
function showImage(index) {
  if (index < 0) {
    index = 0;
  } else if (index >= images.length) {
    index = images.length - 1;
  }
  currentIndex = index;
  const offset = -currentIndex * slider.offsetWidth;
  sliderInner.style.transform = `translateX(${offset}px)`;
  paginationItems.forEach((item, i) => {
    item.classList.toggle("pagination__item--active", i === currentIndex);
  });
  heroSection.style.backgroundColor = backgroundColors[currentIndex];
  enableButtons();
  disableButtons();
}
document.querySelector(".slider-button-prev").addEventListener("click", () => {
  showImage(currentIndex - 1);
});
document.querySelector(".slider-button-next").addEventListener("click", () => {
  showImage(currentIndex + 1);
});
paginationItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    showImage(index);
  });
});
window.addEventListener("resize", () => {
  const offset = -currentIndex * slider.offsetWidth;
  sliderInner.style.transform = `translateX(${offset}px)`;
});
disableButtons();
//# sourceMappingURL=slider.js.map
