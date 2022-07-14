const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (emailInput.value === '' || passwordInput.value === '') {
    alert(`Всі поля повинні бути заповнені!`);
  } else {
    const loginData = {
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
    };
    console.log(loginData);
    loginForm.reset();
  }
}
