'use strict';

let days = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  '<i>Суббота</i>',
  '<i>Воскресенье</i>',
];

let todayIndex = (6 + new Date().getDay()) % 7;
days[todayIndex] = `<b>${days[todayIndex]}</b>`;

document.body.insertAdjacentHTML('beforeEnd', days.join('<br>'));

// Другой подход

// const week = [
//   'Понедельник',
//   'Вторник',
//   'Среда',
//   'Четверг',
//   'Пятница',
//   'Суббота',
//   'Воскресенье',
// ];

// const day = document.querySelector('.week');
// const todayDay = new Date();

// const days = () => {
//   week.forEach((item, i) => {
//     let newdiv = document.createElement('div');

//     if (i === 6 + (todayDay.getDay() % 7)) {
//       console.log(6 + (todayDay.getDay() % 7));
//       newdiv.classList.add('bold');
//       newdiv.textContent = week[i];
//     }

//     if (item === 'Суббота' || item === 'Воскресенье') {
//       newdiv.classList.add('italic'); // Делаем дополнительно курсивом (Даже если уже жирным выделено)
//       newdiv.textContent = week[i];
//     } else {
//       newdiv.textContent = week[i]; // Если не текущий день и не выходные, то просто вставляем текст без стилей
//     }

//     day.appendChild(newdiv);
//   });
// };

// days();
