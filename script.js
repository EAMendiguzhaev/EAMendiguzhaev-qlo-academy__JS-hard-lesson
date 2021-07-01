'use strict';

const USDviuw = document.querySelector('.usd');
const inputUSD = document.querySelector('#usd');
const buttonUSD = document.querySelector('.button-usd');
const inputCheckboxUSD = document.querySelector('.input-usd');

const RUBviuw = document.querySelector('.rub');
const inputRUB = document.querySelector('#rub');
const buttonRUB = document.querySelector('.button-rub');
const inputCheckboxRUB = document.querySelector('.input-rub');

const buttonClear = document.querySelector('.clear');

const valute = {
  USD: '',
  RUB: '',
};

inputUSD.disabled = true;
inputRUB.disabled = true;

inputCheckboxUSD.addEventListener('click', () => {
  if (inputCheckboxUSD.checked) {
    inputUSD.disabled = false;
  } else {
    inputUSD.disabled = true;
    inputUSD.value = '';
    RUBviuw.textContent = '';
  }
});

inputCheckboxRUB.addEventListener('click', () => {
  if (inputCheckboxRUB.checked) {
    inputRUB.disabled = false;
  } else {
    inputRUB.disabled = true;
    inputRUB.value = '';
    USDviuw.textContent = '';
  }
});

buttonClear.addEventListener('click', () => {
  location.reload();
});

inputUSD.addEventListener('change', () => {
  buttonUSD.addEventListener('click', () => {
    axios.get('https://www.cbr-xml-daily.ru/daily_json.js').then((res) => {
      valute.RUB = (res.data.Valute.USD.Value * inputUSD.value).toFixed(2);
      RUBviuw.textContent = valute.RUB;
    });
  });
});

inputRUB.addEventListener('change', () => {
  buttonRUB.addEventListener('click', () => {
    axios.get('https://www.cbr-xml-daily.ru/daily_json.js').then((res) => {
      valute.USD = (inputRUB.value / res.data.Valute.USD.Value).toFixed(2);
      USDviuw.textContent = valute.USD;
    });
  });
});
