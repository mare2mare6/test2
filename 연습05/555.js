const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // 폼 제출 막기

  const text = input.value.trim();
  if (text === '') return;

  const li = document.createElement('li');
  
  const span = document.createElement('span');
  span.textContent = text;
  span.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '삭제';
  deleteBtn.addEventListener('click', function () {
    list.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = '';
});
