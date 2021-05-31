"use strict";

// Пункт №1 домашнего задания

let lang = "ru";
let array = [];

if (lang === "ru") {
  array = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
} else if (lang === "en") {
  array = ["mn", "ts", "wd", "th", "fr", "st", "sn"];
}

console.log("array: ", array);

switch (lang) {
  case "ru":
    array = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
    break;
  default:
    alert("Нет таких значений");
}

switch (lang) {
  case "en":
    array = ["mn", "ts", "wd", "th", "fr", "st", "sn"];
    break;
  default:
    alert("There are no such values");
}

console.log("array: ", array);

let object = {
  ru: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
  en: ["mn", "ts", "wd", "th", "fr", "st", "sn"],
};

array = object[lang];

console.log(array);

// Пункт №2 домашнего задания

let message = prompt("Введите имя Артём или Максим");

let namePerson =
  message === "Артём"
    ? alert("Директор")
    : message === "Максим"
    ? alert("Преподаватель")
    : message === ""
    ? alert("Студент")
    : alert("Студент");
