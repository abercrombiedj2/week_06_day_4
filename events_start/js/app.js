document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  const button = document.querySelector('#button');
  button.addEventListener('click', handleButtonClick);

  const textInput = document.querySelector('#input');
  textInput.addEventListener('input', handleInput);

  const selectInput = document.querySelector('#select');
  selectInput.addEventListener('change', handleSelectInput);

  const formInput = document.querySelector('#form');
  formInput.addEventListener('submit', handleFormInput);
});

const handleButtonClick = function(){
  const resultParagraph = document.querySelector('#button-result');
  resultParagraph.textContent = 'That button has definitely been clicked.';
}

const handleInput = function(event){
  // 1. Get value from the input.
  let inputValue = event.target.value;
  // 2. Update the paragraph text.
  const resultParagraph = document.querySelector('#input-result');
  resultParagraph.textContent = `You typed: ${inputValue}`;
}

const handleSelectInput = function(event){
  let selectValue = event.target.value;
  const resultParagraph = document.querySelector('#select-result');
  resultParagraph.textContent = `You went with: ${selectValue}`;
}

const handleFormInput = function(event){
  event.preventDefault();
  const resultParagraph = document.querySelector('#form-result');
  resultParagraph.textContent = `${event.target.first_name.value} ${event.target.last_name.value}`;
}