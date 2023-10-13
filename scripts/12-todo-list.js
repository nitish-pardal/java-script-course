
const todoList = [{name : 'make-dinner', dueDate:'08-10-2023'} ,
{name: 'wash dishes' , dueDate: '09-10-2023'}];
renderTodoList();

function renderTodoList(){
  let todoListHTML ='';

  todoList.forEach((todoObject, index) => {
    const name =todoObject.name;
    const dueDate= todoObject.dueDate;
     //const{name ,dueDate} = todoObject ; //destructuring.
    const html = 
    `<div> ${name} </div>
     <div>${dueDate}</div> 
     <button class="delete-todo-button js-delete-todo-button" >Delete</button>`;
    todoListHTML += html;
  });

    document.querySelector('.js-todo-list').innerHTML = todoListHTML; 
  document.querySelectorAll('.js-delete-todo-button').   //this returns an array and thus we need to loop every element to add the eventListner.
     forEach((deletebutton , index ) =>{
  deletebutton.addEventListener('click',() =>{
    todoList.splice(index, 1);
      renderTodoList();
  });
});
  }
  
document.querySelector('.js-add-todo-button').addEventListener('click',() =>{
  addTodo();
});
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