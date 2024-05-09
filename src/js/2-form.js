const form = document.querySelector('.feedback-form');
const btn = document.querySelector('.form-btn');

const formData = { email: '', message: '' };
populateData();

form.addEventListener('input', handleUInput);
form.addEventListener('submit', handleSubmit);

function handleUInput(event) {
  const key = event.target.name;
  formData[key] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateData() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (!data) {
    return;
  }

  const { email, message } = form.elements;

  email.value = data.email;
  message.value = data.message;
}

function handleSubmit(event) {
  event.preventDefault();
  const { email, message } = form.elements;
  if (email.value === '' || message.value === '') {
    return console.log('Fill please all fields');
  }
  formData.email = email.value;
  formData.message = message.value;

  console.log(formData);
  form.reset();
  localStorage.removeItem('feedback-form-state');
}
