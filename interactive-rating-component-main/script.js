'use strict';

const card0El = document.querySelector('.card--0');
const card1El = document.querySelector('.card--1');
const btns = document.querySelectorAll('.btn');
const btnSubmit = document.querySelector('.btn-submit');
const rate = document.querySelector('.rate');

let current;

const removeLatestActive = function () {
  for (let j = 0; j < btns.length; j++) {
    btns[j].classList.remove('btn--lower');
    btns[j].classList.remove('btn--active');
  }
};

const addActive = function (i) {
  current = i;
  if (i !== 0) {
    removeLatestActive();
    btns[i - 1].classList.add('btn--lower');
    btns[i].classList.add('btn--active');
  } else {
    removeLatestActive();
    btns[i].classList.add('btn--active');
  }
};

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    removeLatestActive();
    addActive(i);
  });
}

btnSubmit.addEventListener('click', function () {
  if (current || current === 0) {
    card1El.classList.toggle('hidden');
    rate.textContent = ` ${current + 1} `;
  }
});
