import throttle from 'lodash.throttle';

const FORM_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

let formData = JSON.parse(localStorage.getItem(FORM_KEY)) || {};
const { email, message } = form.elements;

popularePage();

function onFormInput(e) {
  // e.preventDefault();
  formData = { email: email.value, message: message.value };
  localStorage.setItem(FORM_KEY, JSON.stringify(formData));
}

function popularePage() {
  if (formData) {
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  // formData.email = email.value;
  // formData.message = message.value;
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert('Будь-ласка, заповніть всі поля!');
  }
  localStorage.removeItem(FORM_KEY);
  e.currentTarget.reset();
  formData = {};
}