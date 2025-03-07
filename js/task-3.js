const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
textInput.classList.add('input');
const resultText = document.querySelector('h1').classList.add('res-text');

textInput.addEventListener('input', event => {
  const notTrimText = event.currentTarget.value.trim();
  if (!notTrimText) {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = notTrimText;
  }
});
