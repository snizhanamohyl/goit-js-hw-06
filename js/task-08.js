const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const emailInputValue = formElements.email.value;
  const passwordInputValue = formElements.password.value;

  if (passwordInputValue === '' || emailInputValue === '') {
    alert('Для відправки форми усі поля мають бути заповнені!');
  } else {
    console.log({
      email: (formElements.email.name = emailInputValue),
      password: (formElements.password.name = passwordInputValue),
    });
    event.currentTarget.reset();
  }
}
