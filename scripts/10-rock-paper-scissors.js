let score=JSON.parse(localStorage.getItem('score')) ||
{
 wins:0,
 losses:0,
 ties:0
};  // setting the default values to zero for a case when there is no value in the localStorage.

/* if (!score){  this is same as writing if (score === 'null')
 score ={
   wins:0,
   losses:0,
   ties:0
 };
}*/
updateScoreElement(); // calling the function that updates the score.
let result='';


console.log(JSON.parse(localStorage.getItem('score'))); // getting the values from the local storage.

//saving the result of the comparison between user's choice and computer's choice.

function playGame(playerMove){
 const computerMove=pickComputerMove();/* calling )the function to get a random guess for the computer move.*/

 if(playerMove === 'scissors'){
   if(computerMove === 'rock'){
     result='you loose';
   }else if(computerMove === 'paper' ){
    result='you win';}
   else if(computerMove === 'scissors'){
    result='Tie';
   }
 }

 else if(playerMove ==='paper')
 {
   if(computerMove === 'rock'){
     result='you win';
   }else if(computerMove === 'paper')
    {result='Tie';}
   else if(computerMove === 'scissors')
    {result='you loose';}
 }

 else if(playerMove === 'rock')
 {
   if(computerMove === 'rock'){
     result='Tie';
   }else if(computerMove === 'paper'){
     result='you loose';
   }
   else if(computerMove === 'scissors'){
     result='you win';
   }
 }

     if(result === 'you win'){
       score.wins +=1;
     }
     else if(result === 'you loose'){
       score.losses +=1;
     }
     else if (result === 'Tie'){
       score.ties +=1;
     } 

    localStorage.setItem('score',JSON.stringify(score)); // saving to a local storage

   updateScoreElement(); //to update the score everytime when you play the game 

   document.querySelector('.js-result')
    .innerHTML=result;
   
    document.querySelector('.js-moves')
    .innerHTML = ` you 
    <img src="resources/${playerMove}-emoji.png" class="move-icon" alt="">
    <img src="resources/${computerMove}-emoji.png" class="move-icon" alt="">
    computer;`

}

function updateScoreElement(){ // function to update the score on the screen.
 document.querySelector('.js-score')
.innerHTML= `wins:${score.wins}, losses :${score.losses}, ties:${score.ties}`;
}

function pickComputerMove()
{

 const randomNumber=Math.random(); // a new random number is generated every time when the function is called.

 let computerMove=''; // for generation the random number(generates a random number between 0 and 1)

 if(randomNumber >=0 && randomNumber < 1/3)// compairing the random number to let the computer choose between the rock paper and scissors.
 {
   computerMove='rock';
 }
 else  if(randomNumber >=1/3 && randomNumber < 2/3){
   computerMove='paper';
 }
 else if(randomNumber >=2/3 && randomNumber < 1){
     computerMove='scissors';
 }

 return computerMove; 
}