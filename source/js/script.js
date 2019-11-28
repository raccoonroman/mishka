'use strict';

// var hamburger = document.querySelector(".hamburger");
// var navMain = document.querySelector('.header-nav__list');


// hamburger.addEventListener('click', function() {
//   if (hamburger.classList.contains('open')) {
//     hamburger.classList.remove('open');
//     navMain.classList.remove('header-nav__list--active');
//   } else {
//     hamburger.classList.add('open');
//     navMain.classList.add('header-nav__list--active');
//   }
// });


//popup
var openProductSizeButtons = document.querySelectorAll('.js-open-product-size');
var closeProductSizeButtons = document.querySelectorAll('.js-close-product-size');
var popupProductSize = document.querySelector('.product-size');
var productSizeBox = popupProductSize.querySelector('.product-size__box');

var getScrollBarWidth = function(el) {
  return el.offsetWidth - el.clientWidth;
};

var openPopupProductSize = function(evt) {
  evt.preventDefault();
  popupProductSize.classList.remove('popup--hidden');
  popupProductSize.style.overflowY = 'scroll';
  document.body.classList.add('noscroll');
  var scrollBarWidth = getScrollBarWidth(popupProductSize);
  document.body.style.paddingRight = scrollBarWidth + 'px';
};

var closePopupProductSize = function(evt) {
  evt.preventDefault();
  popupProductSize.classList.add('popup--hidden');
  popupProductSize.style.overflowY = 'hidden';
  document.body.classList.remove('noscroll');
  document.body.style.paddingRight = '0';
};

openProductSizeButtons.forEach(function(button) {
  button.addEventListener('click', openPopupProductSize);
});

closeProductSizeButtons.forEach(function(button) {
  button.addEventListener('click', closePopupProductSize);
});

popupProductSize.addEventListener('click', closePopupProductSize);

productSizeBox.addEventListener('click', function(evt) {
  evt.stopPropagation();
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (!popupProductSize.classList.contains("popup--hidden")) {
      popupProductSize.classList.add("popup--hidden");
    }
  }
});


//product size, code like mvc
var productSize = { active: 'S' };

watch(productSize, function() {
  var activeSize = document.querySelector('.product-size__button.active');
  var currentSize = document.querySelector('.product-size__button[data-size="' + productSize.active + '"]');
  activeSize.classList.remove('active');
  currentSize.classList.add('active');
});

var productSizeButtons = document.querySelectorAll('.product-size__button');
productSizeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    productSize.active = button.dataset.size;
  });
});
