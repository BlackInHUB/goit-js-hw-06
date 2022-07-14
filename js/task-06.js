const inputField = document.querySelector('#validation-input');

inputField.addEventListener('blur', event => {
  if (event.currentTarget.value.length === parseInt(inputField.getAttribute('data-length'))) {
    event.currentTarget.classList.remove('invalid');
    event.currentTarget.classList.add('valid');
  } else {
    event.currentTarget.classList.remove('valid');
    event.currentTarget.classList.add('invalid');
  }
});
