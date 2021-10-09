document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleNewItemFormSubmit);
})


  const handleNewItemFormSubmit = function(event){
    event.preventDefault();

    let newTitle = `${event.target.title.value}`;
    let newAuthor = `${event.target.author.value}`;
    let newCategory = `${event.target.category.value}`;

    const newListTitle = document.createElement('li');
    newListTitle.textContent = newTitle;
    const newListAuthor = document.createElement('li');
    newListAuthor.textContent = newAuthor;
    const newListCategory = document.createElement('li');
    newListCategory.textContent = newCategory
    
    const readingList = document.querySelector(`#reading-list`)
    
    readingList.append(newListTitle);
    readingList.append(newListAuthor);
    readingList.append(newListCategory);
};