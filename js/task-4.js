const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);
const label = form.querySelectorAll('label');
for (const item of label) {
  item.classList.add('label-form');
  item.querySelector('input').classList.add('input');
}
const btn = form.querySelector('button').classList.add('btn-form');
function handleSubmit(event) {
  event.preventDefault();
  const elements = event.target.elements;
  if (!elements.email.value.trim() || !elements.password.value.trim()) {
    return alert('All form fields must be filled in');
  }
  const info = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };
  console.log(info);
  event.target.reset();
}
