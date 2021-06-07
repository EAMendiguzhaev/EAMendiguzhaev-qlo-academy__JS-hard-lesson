'use strict';

// 1) Выведите на страницу текущую дату и время в 2-х форматах:

//     a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'

//     б) '04.02.2020 - 21:05:33'

// 2) Для вывода в формате (а) напишите функцию, которая будет менять склонение слов в зависимости от числа, "час, часов, часа"

// 3) Для вывода в формате (б) напишите функцию, которая будет добавлять 0 перед значениями которые состоят из одной цифры (из 9:5:3  1.6.2019 сделает 09:05:03 01.06.2019)

const fullDate = document.querySelector('.full-date');
const shortenedDate = document.querySelector('.shortened-date');
let hour;
let minutes;
let seconds;

const date = new Date();
const optionsfullDate = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timezone: 'UTC',
};

function declination(number, words) {
  return words[number % 100 > 4 && number % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? number % 10 : 5]];
}

const textFullDate = `Cегодня ${date.toLocaleString('ru', optionsfullDate)} 
  ${(declination(date.getHours()), ['час', 'часов', 'часа'])}
  ${(declination(date.getMinutes()), ['минут', 'минута', 'минуты'])}
  ${(declination(date.getSeconds()), ['секунд', 'секунда', 'секунды'])}`;

const optionsShortDate = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  timezone: 'UTC',
};

const getZero = function (num) {
  if (num > 0 && num < 10) {
    return '0' + num;
  } else {
    return num;
  }
};

const textShortenedDate =
  getZero(date.toLocaleString('ru', optionsShortDate)) +
  ' ' +
  getZero(date.getHours()) +
  ':' +
  getZero(date.getMinutes()) +
  ':' +
  getZero(date.getSeconds());

const getThisYear = () => {
  const dateFull = textFullDate;
  const dateShort = textShortenedDate;
  fullDate.textContent = dateFull;
  shortenedDate.textContent = dateShort;
};
setInterval(getThisYear, 1000);

// Живое время
// const times = document.querySelector('.time');
// const time = () => {
//   const clock = new Date().toLocaleTimeString();
//   times.textContent = clock;
// };
// setInterval(time, 1000);
