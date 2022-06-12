'use strict';

const itemEl = document.querySelectorAll('.item');
const itemContent = document.querySelectorAll('.hidden-box');
let j = 0;
const openItem = function (i) {
  let current = i;

  itemEl[i].classList.toggle('open');
  if (itemEl[i].classList.contains('open'))
    itemContent[i].style.maxHeight = itemContent[i].scrollHeight + 'px';
  else itemContent[i].style.maxHeight = 0;
};

const closecurrentItem = function (j) {
  itemEl[j].classList.remove('open');
  itemContent[j].style.maxHeight = 0;
};

const closelatestItem = function () {
  for (let i = 0; i < itemEl.length; i++) {
    itemEl[i].classList.remove('open');
    itemContent[i].style.maxHeight = 0;
  }
};

for (let i = 0; i < itemEl.length; i++) {
  itemEl[i].addEventListener('click', function () {
    if (itemEl[i].classList.contains('open')) closecurrentItem(i);
    else {
      closelatestItem();
      openItem(i);
    }
  });
}
