"use strict";

//1

let arr = ["2", "4", "6", "12", "14", "22", "44"];

arr.forEach((item) => {
  if (item.startsWith("2") || item.startsWith("4")) {
    console.log(item);
  }
});

//2

const primeNumber = function (n) {
  for (let i = 2; i * i <= n; i === 2 ? i++ : (i += 2)) {
    if (n % i === 0) {
      return false;
    }
  }

  return n > 1;
};

const res = [...Array(100)]
  .reduce(
    (a, _, i) =>
      a.concat(primeNumber(i) ? `Делители числа ${i}: 1 и ${i}` : []),
    []
  )
  .join("\n");

console.log(res);