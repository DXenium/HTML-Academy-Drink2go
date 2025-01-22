/* noUi slider */

const sliderElement = document.querySelector('.range__wrapper');
const inputMinPrice = document.querySelector('.range__input--min-price');
const inputMaxPrice = document.querySelector('.range__input--max-price');
const inputs = [inputMinPrice, inputMaxPrice];

noUiSlider.cssClasses.connects += ' range__scale';
noUiSlider.cssClasses.connect += ' range__bar';
noUiSlider.cssClasses.handle += ' range__toggle';

noUiSlider.create(sliderElement, {
  start: [0, 900],
  connect: true,
  range: {
      'min': 0,
      'max': 1010
  }
});

sliderElement.noUiSlider.on('update', function(values, handle){
  inputs[handle].value = Math.round(values[handle]);
})

const setRangeSlider = (i, value) => {
  let array = [null, null];
  array[i] = value;

  sliderElement.noUiSlider.set(array);
}

inputs.forEach((element, index) => {
  element.addEventListener('change', (element) => {
    setRangeSlider(index, element.currentTarget.value);
  })
})
