
const todoList =JSON.parse(localStorage.getItem('todoList')) ||[{name:'makedinner', dueDate:'2022-12-22'},{
  name:'wash clothes',
  dueDate:'2022-10-25'
}];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';
  for(let i=0; i<todoList.length; i++){
    const todoObject = todoList[i];
    const name =todoObject.name;
    const dueDate= todoObject.dueDate;
     //const{name ,dueDate} = todoObject ; //destructuring.
    const html = 
    `<div> ${name} </div>
     <div>${dueDate}</div> 
     <button class="delete-todo-button" onclick="
      todoList.splice(${i}, 1);
      renderTodoList();
      addToLocalStorage();
    ">Delete</button>`;
    todoListHTML += html;
  }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML; 
  }
  

function addTodo(){
const inputElement =document.querySelector('.js-name-input');
  let name = inputElement.value;
  const dateInputElement= document.querySelector('.js-due-date-input')
  const dueDate =dateInputElement.value;
    todoList.push({
      name,
    dueDate});
  //todoList.push({
  //  name,
   // dueDate
  

  //});
  inputElement.value = '';
  renderTodoList();
  addToLocalStorage();
}
function addToLocalStorage(){
  localStorage.setItem('todoList',JSON.stringify(todoList));
}