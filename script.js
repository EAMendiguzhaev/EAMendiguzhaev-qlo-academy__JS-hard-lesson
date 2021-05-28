"use strict";

let num = 266219;
let arr = String(num).split("");
// let arr = num.toString().split(""); - какой из этих двух методов преобразования в строку более актуальней и новей???

let sum = arr.reduce((prev, item) => {
  return prev * item;
});

sum **= 3;

console.log(String(sum).slice(0, 2));
