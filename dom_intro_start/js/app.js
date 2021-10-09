console.log('app loaded', window);

document.addEventListener('DOMContentLoaded', () => {
//     const title = document.querySelector('h1');
// title.textContent = 'Crop rotation in the 14th century was CONSIDERABLY more widespread.'

// const welcomeParagraph = document.querySelector('#welcome-paragraph');
// console.log(welcomeParagraph);
// console.dir(welcomeParagraph);
// const redElement = document.querySelector('li.red');
// console.log(redElement);

// const allListElements = document.querySelectorAll('li');
// console.log(allListElements);

const redListItem = document.querySelector('li.red');
redListItem.textContent = 'RED!!!';
redListItem.classList.add('bold');

const newListItem = document.createElement('li');
newListItem.textContent = 'Purple';
newListItem.classList.add('purple');

const list = document.querySelector('ul');
list.appendChild(newListItem);
})