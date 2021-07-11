'use strict';

const inputValue = document.querySelector('#value');
const paragraphValue = document.querySelector('.value');

// Функция debounce
const debounce = (callback, timeoutDelay = 300) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

inputValue.addEventListener(
  'input',
  debounce((evt) => {
    paragraphValue.textContent = evt.target.value;
    evt.target.value = '';
  }),
);

// Ф-ция снизу для проверки и сравнения

// inputValue.addEventListener('input', (evt) => {
//   paragraphValue.textContent = evt.target.value;
// });
