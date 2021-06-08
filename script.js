'use strict';

const fullDate = document.querySelector('.full-date');
const shortenedDate = document.querySelector('.shortened-date');

const getThisYear = () => {
  const date = new Date();

  const optionsfullDate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
  };

  function declOfNum(n, text_forms) {
    n = Math.abs(n) % 100;
    var n1 = n % 10;
    if (n > 10 && n < 20) {
      return text_forms[2];
    }
    if (n1 > 1 && n1 < 5) {
      return text_forms[1];
    }
    if (n1 == 1) {
      return text_forms[0];
    }
    return text_forms[2];
  }

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const arrHours = declOfNum(hours, ['час', 'часа', 'часов']);
  const arrMinutes = declOfNum(minutes, ['минута', 'минуты', 'минут']);
  const arrSeconds = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);

  const textFullDate = `Cегодня ${date.toLocaleString('ru', optionsfullDate)} 
      ${hours} ${arrHours}
      ${minutes} ${arrMinutes}
      ${seconds} ${arrSeconds}`;

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

  const clock = new Date().toLocaleTimeString();
  const textShortenedDate = `${getZero(date.toLocaleString('ru', optionsShortDate))} 
    ${clock}`;

  /* Можно и так:
    const textShortenedDate = `${getZero(date.toLocaleString('ru', optionsShortDate))} 
    ${getZero(date.getHours())}:${getZero(date.getMinutes())}:${getZero(date.getSeconds())};`
    */
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
