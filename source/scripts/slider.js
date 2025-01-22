const slider = document.querySelector('.slider');
const sliderInner = document.querySelector('.slider__inner');
const images = sliderInner.querySelectorAll('.hero__container');
const paginationItems = document.querySelectorAll('.pagination__item');
const heroSection = document.querySelector('.hero');
let currentIndex = 0;

// Массив цветов для каждого слайда
const backgroundColors = ['#f3ebe1', '#eae6fc', '#e5e6e8'];

function enableButtons() {
    document.querySelector('.slider-button-prev').removeAttribute('disabled');
    document.querySelector('.slider-button-next').removeAttribute('disabled');
}

function disableButtons() {
    if (currentIndex === 0) {
        document.querySelector('.slider-button-prev').setAttribute('disabled', 'true');
    }
    if (currentIndex === images.length - 1) {
        document.querySelector('.slider-button-next').setAttribute('disabled', 'true');
    }
}

function showImage(index) {
    if (index < 0) {
        index = 0; // Если индекс меньше 0, показываем первое изображение
    } else if (index >= images.length) {
        index = images.length - 1; // Если индекс больше или равен длине массива, показываем последнее изображение
    }
    currentIndex = index;
    const offset = -currentIndex * slider.offsetWidth;
    sliderInner.style.transform = `translateX(${offset}px)`;

    // Обновляем активный элемент пагинации
    paginationItems.forEach((item, i) => {
        item.classList.toggle('pagination__item--active', i === currentIndex);
    });

    // Меняем цвет фона секции
    heroSection.style.backgroundColor = backgroundColors[currentIndex];

    enableButtons(); // Включаем все кнопки
    disableButtons(); // Отключаем кнопки, если достигнут край
}

document.querySelector('.slider-button-prev').addEventListener('click', () => {
    showImage(currentIndex - 1);
});

document.querySelector('.slider-button-next').addEventListener('click', () => {
    showImage(currentIndex + 1);
});

// Обработчики событий для элементов пагинации
paginationItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        showImage(index);
    });
});

// Update slider width on window resize
window.addEventListener('resize', () => {
  const offset = -currentIndex * slider.offsetWidth;
  sliderInner.style.transform = `translateX(${offset}px)`;
});

// Инициализация: отключаем кнопки, если слайдер начинает с крайнего изображения
disableButtons();
