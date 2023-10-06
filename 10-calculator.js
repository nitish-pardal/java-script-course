   
      let calculation = localStorage.getItem('calculation') || '';

      function updateCalculation(number){ 
         calculation += number;
         calculationDisplay(calculation);
      }
      function calculationDisplay(calculation){
        
        document.querySelector('.js-calculation-display').innerHTML = calculation;
      }