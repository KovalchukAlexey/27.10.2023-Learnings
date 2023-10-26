'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');

box.style.backgroundColor = 'red';
box.style.width = '500px';

box.style.cssText = 'height: 200px; color: blue;'

oneHeart.innerHTML = ('<h1>Hello shakil</h1>');

oneHeart.append(div)