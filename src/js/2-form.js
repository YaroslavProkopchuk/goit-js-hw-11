const formData = {
  email: '',
  message: '',
};
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');
populateText();
form.addEventListener('input', onTextInput);

function onTextInput(event) {
  const { name, value } = event.target;
  if (formData.hasOwnProperty(name)) {
    formData[name] = value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
}

function populateText() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);

    if (parsedData.email) {
      input.value = parsedData.email;
      formData.email = parsedData.email;
    }

    if (parsedData.message) {
      textarea.value = parsedData.message;
      formData.message = parsedData.message;
    }
  }
}

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();

  const trimmedEmail = formData.email.trim();
  const trimmedMessage = formData.message.trim();

  if (!trimmedEmail || !trimmedMessage) {
    alert('Fill please all fields');
    return;
  }

  console.log({ email: trimmedEmail, message: trimmedMessage });

  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
}
