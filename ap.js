const submitBtn = document.querySelector('.todo-submit-btn');
const entrySelector = document.querySelector('.todo-entry-box');
const todoContainer = document.querySelector('.todo-container');
const todoItemContainer = document.querySelector('.todo-item');
const todoText = document.querySelector('.todo-text');
const delBtn = document.querySelector('.del-btn');

const todoList = [];

function handleSubmit() {
  let todoItemValue = entrySelector.value;
  let div = document.createElement('div');
  let delBtn = document.createElement('button');
  let itemSpan = document.createElement('SPAN');

  itemSpan.innerHTML = todoItemValue;

  div.className = 'todo-item';

  delBtn.className = 'del-btn';
  delBtn.innerHTML = 'Delete Item';

  div.appendChild(itemSpan);

  todoContainer.appendChild(div).appendChild(delBtn);

  entrySelector.value = '';
}

//event listeners
submitBtn.addEventListener('click', handleSubmit);

todoContainer.addEventListener('click', (e) => {
  e.target.parentNode.remove();
});
