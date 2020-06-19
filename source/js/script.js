'use strict';
var anchors = document.querySelectorAll('a[href*="#"]');

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides(slideIndex += 1);
}


function minusSlide() {
  showSlides(slideIndex -= 1);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('reviews__slide');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'flex';
}


anchors.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    var blockID = item.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});


// ==============================================

var slides = document.querySelectorAll('.trainers__item');
var slidesNumber;
var slideIndexTrainers = 0;
var n;

var width = parseInt(document.body.clientWidth, 10);
if (width > 1199) {
  n = 4;
} else if (width > 767 && width <= 1199) {
  n = 2;
} else {
  n = 1;
}

slidesNumber = slides.length / n;
function showNextSlide() {

  if (slideIndexTrainers >= slidesNumber - 1 ) {

  } else {
    slideIndexTrainers += 1;
    setStyle();
  }
}

function showPreviewSlide() {
  if (slideIndexTrainers <= 0) {

  } else {
    slideIndexTrainers -= 1;
    setStyle();
  }
}

function setStyle() {
  var startIndex = n * slideIndexTrainers;
  var endIndex = startIndex + (n - 1);
  slides.forEach(function (item, index) {
    if (index >= startIndex && index <= endIndex) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// ===================================================================
// Вешаем на прикосновение функцию handleTouchStart
var slider1 = document.querySelector('.trainers__list');
// var slider2 = document.querySelector('.reviews');
slider1.addEventListener('touchstart', handleTouchStart, false);
// А на движение пальцем по экрану - handleTouchMove
slider1.addEventListener('touchmove', handleTouchMove, false);

// slider2.addEventListener('touchstart', handleTouchStart, false);
// // А на движение пальцем по экрану - handleTouchMove
// slider2.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
  xDown = evt.touches[0].clientX;
  yDown = evt.touches[0].clientY;
}

function handleTouchMove(evt) {
  if ( ! xDown || ! yDown ) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;
  // немного поясню здесь. Тут берутся модули движения по оси абсцисс и ординат (почему модули? потому что если движение сделано влево или вниз, то его показатель будет отрицательным) и сравнивается, чего было больше: движения по абсциссам или ординатам. Нужно это для того, чтобы, если пользователь провел вправо, но немного наискосок вниз, сработал именно коллбэк для движения вправо, а ни как-то иначе.
  if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
    if ( xDiff > 0 ) {
      /* left swipe */
      showPreviewSlide();
    } else {
      /* right swipe */
      showNextSlide();
    }
  }
  xDown = null;
  yDown = null;
}
