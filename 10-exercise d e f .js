function toggleFunction(buttonName){
  const buttonElement= document.querySelector(buttonName);
  if(buttonElement.classList.contains('is-toggled')){
    buttonElement.classList.remove('is-toggled');
  }
  else{
    buttonElement.classList.add('is-toggled');
  }
}