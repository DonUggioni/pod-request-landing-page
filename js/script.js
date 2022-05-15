'use strict';

const formEl = document.getElementById('form');
const emailEL = document.getElementById('email');
const message = document.querySelector('.message');

function checkEmail(email) {
  const reg =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return reg.test(email);
}

function error() {
  message.textContent = 'Oops! Please check your email';
  if (message.classList.contains('success')) {
    message.classList.remove('success');
  }
  message.classList.add('error');
}

function success() {
  message.textContent = 'Success!';
  if (message.classList.contains('error')) {
    message.classList.remove('error');
  }
  message.classList.add('success');
}

formEl.addEventListener('submit', function (e) {
  e.preventDefault();
  if (emailEL.value.trim() === '') {
    error();
  } else if (checkEmail(emailEL.value.trim())) {
    success();
  } else {
    error();
  }
});
