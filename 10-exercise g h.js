function toggleFunction(className){
  const buttonElement = document.querySelector("." + className);
  if(!buttonElement.classList.contains('is-toggled')){
    turnOffPreviousButton();
    buttonElement.classList.add('is-toggled');
   
   
  }
  else 
    buttonElement.classList.remove('is-toggled');
}
    function turnOffPreviousButton(){
      const previousButton = document.querySelector('.is-toggled');
      console.log(previousButton);
      if(previousButton)
        previousButton.classList.remove('is-toggled');
      
    }
  
