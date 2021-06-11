'use strict';

const color = document.querySelector('.color');
const buttonRandom = document.querySelector('.change');

const changeBackground = function (color) {
  document.body.style.background = color;
};

buttonRandom.addEventListener('click', function () {
  color.textContent = '#' + Math.floor(Math.random() * 16777215).toString(16);
  changeBackground(color.textContent);
});
