"use strict";

//Создаю массив week и записвыю в него дни недели в виде строк

const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

const day = document.querySelector(".week");
const todayDay = new Date("June 05, 2021 21:21:21");

const days = () => {
  week.forEach((item, i) => {
    let newdiv = document.createElement("div");

    if (i === +todayDay.getDay() - 1) {
      console.log(todayDay.getDay());
      newdiv.classList.add("bold");
      newdiv.textContent = week[i];
    }

    if (item === "Суббота" || item === "Воскресенье") {
      newdiv.classList.add("italic"); // Делаем дополнительно курсивом (Даже если уже жирным выделено)
      newdiv.textContent = week[i];
    } else {
      newdiv.textContent = week[i]; // Если не текущий день и не выходные, то просто вставляем текст без стилей
    }

    day.appendChild(newdiv);
  });
};

days();

// Этот читерный вариант в интернете нашел =)

// let days = [
//   "Понедельник",
//   "Вторник",
//   "Среда",
//   "Четверг",
//   "Пятница",
//   "<i>Суббота</i>",
//   "<i>Воскресенье</i>",
// ];

// let todayIndex = (6 + new Date().getDay()) % 7;
// days[todayIndex] = `<b>${days[todayIndex]}</b>`;

// document.body.insertAdjacentHTML("beforeEnd", days.join("<br>"));
