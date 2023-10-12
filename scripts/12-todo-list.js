
const todoList = [{name : 'make-dinner', dueDate:'08-10-2023'} ,
{name: 'wash dishes' , dueDate: '09-10-2023'}];
renderTodoList();

function renderTodoList(){
  let todoListHTML ='';
  todoList.forEach(function(todoObject, index){
    const name =todoObject.name;
    const dueDate= todoObject.dueDate;
     //const{name ,dueDate} = todoObject ; //destructuring.
    const html = 
    `<div> ${name} </div>
     <div>${dueDate}</div> 
     <button class="delete-todo-button" onclick="
      todoList.splice(${index}, 1);
      renderTodoList();
    ">Delete</button>`;
    todoListHTML += html;
  });

    document.querySelector('.js-todo-list').innerHTML = todoListHTML; 
  }
  

function addTodo(){
const inputElement =document.querySelector('.js-name-input');
  let name = inputElement.value;
  const dateInputElement= document.querySelector('.js-due-date-input')
  const dueDate =dateInputElement.value;
    todoList.push({
      name: name,
    dueDate:dueDate});
  //todoList.push({
  //  name,
   // dueDate
  

  //});
  inputElement.value = '';
  renderTodoList();
}