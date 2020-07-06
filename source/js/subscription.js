'use strict';


var times = document.querySelectorAll('.subscription__time-item');
var subscriptions = document.querySelectorAll('.subscription__wrapper');
var changeTime = function () {
  times.forEach(function (item, index) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      for (var i=0; i < times.length; i++) {
        var link = times[i].querySelector('.subscription__time-link')
        var redLine = times[i].querySelector('.red-line');
        if (link === evt.target && !redLine.classList.contains('red-line__active')) {
          redLine.classList.add('red-line__active');
        } else if (link !== evt.target && redLine.classList.contains('red-line__active')) {
          redLine.classList.remove('red-line__active');
        }

      }
    })
  })
}
var links = document.querySelectorAll('.subscription__time-link');
var focusFunction = function () {
  links.forEach(function (item, index) {

    item.addEventListener('focus', function (evt) {
      for (var i=0; i < times.length; i++) {
        var link = times[i].querySelector('.subscription__time-link');
        var redLine = times[i].querySelector('.red-line');
        var subscription = subscriptions[i];
        if (link === evt.target && !redLine.classList.contains('red-line__active')) {
          redLine.classList.add('red-line__active');
          subscription.style.display = 'flex';
          console.log(subscription.style.display);
        } else if (link !== evt.target && redLine.classList.contains('red-line__active')) {
          redLine.classList.remove('red-line__active');
          subscription.style.display = 'none';
          console.log(subscription);
          console.log(subscription.style.display);
        }
      }
    })
  })
}




focusFunction();

changeTime();
