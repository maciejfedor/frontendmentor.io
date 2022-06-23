'use strict';

const inputBill = document.querySelector('.input-bill');
const inputPeople = document.querySelector('.input-people');
const inputCustom = document.querySelector('.btn--custom');
const inputBtns = document.querySelectorAll('.input-btns');
const labelError = document.querySelector('.label-error');
const btn = document.querySelectorAll('.btn');
const btnReset = document.querySelector('.btn-reset');
const amountTip = document.querySelector('.tip-amount');
const amountTotal = document.querySelector('.tip-amount--total');

const removeLatestActive = function () {
  btn.forEach(function (btnActive) {
    btnActive.classList.remove('btn--active');
  });
};
const init = function () {
  amountTip.textContent = '$0.00';
  amountTotal.textContent = '$0.00';
  removeLatestActive();
  inputBill.value = '';
  inputPeople.value = '';
};

init();

const calcTip = function () {
  const bill = Number(inputBill.value);
  const people = Number(inputPeople.value);
  const tipPercent = currentBtn ? Number(currentBtn.value) : 0;
  console.log(bill, people, tipPercent);

  inputPeople.value === '0'
    ? labelError.classList.add('hidden')
    : labelError.classList.remove('hidden');

  if (bill && people !== 0) {
    const tip = Math.round(((bill * tipPercent) / people) * 100) / 100;

    const total = Math.round(((tip + bill) / people) * 100) / 100;

    amountTip.textContent = `$${tip}`;
    amountTotal.textContent = `$${total}`;
  }
};

btnReset.addEventListener('click', init);

let currentBtn;

btn.forEach(function (button, i) {
  button.addEventListener('click', function (e) {
    removeLatestActive();
    if (!button.classList.contains('btn--custom'))
      button.classList.toggle('btn--active');

    currentBtn = button;
  });
});

document.body.addEventListener('click', calcTip);
