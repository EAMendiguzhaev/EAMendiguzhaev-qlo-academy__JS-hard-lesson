"use strict";

const alertQuestion = prompt("Введите любое предложение");

const puzzleFunction = function (randomValue) {
  const size = 31;

  if (+randomValue) {
    alert("Вы ввели число!");
    return;
  }

  randomValue = randomValue.trim();
  return randomValue.length > 30
    ? console.log(randomValue.trim().slice(0, size) + "...")
    : console.log(randomValue);
};

puzzleFunction(alertQuestion);

// Предыдущий метод

// const alertQuestion = prompt("Введите любое предложение");

// const puzzleFunction = function (randomValue) {
//   const size = 31;

//   if (+randomValue) {
//     alert("Вы ввели число!");
//   } else if (randomValue.length <= 30) {
//     console.log(randomValue.trim());
//   } else if (randomValue.length > 30) {
//     console.log(randomValue.trim().slice(0, size) + "...");
//   }
// };

// puzzleFunction(alertQuestion);
