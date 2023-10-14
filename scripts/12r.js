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

let isAutoPlaying = false ;
let intervalId;

  function autoPlay(){
    if(isAutoPlaying === false){
   intervalId = setInterval(()=> {
      const playerMove =pickComputerMove();
      playGame(playerMove);
    } , 1000);
    isAutoPlaying = true;
    document.querySelector('.Auto-play-button').innerText='Stop autoPlay';
    }
else{
  clearInterval(intervalId); // clearing the intervalId / stopping the interval.
  isAutoPlaying = false; // to restart the autoplaying when we click the button again.
  document.querySelector('.Auto-play-button').innerText='auto Play';

}
}

document.querySelector('.js-rock-button').addEventListener('click', ()=>{
  playGame('rock');
});
document.querySelector('.js-paper-button').addEventListener('click',() =>{
playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click',() =>{
  playGame('scissors');
});
document.querySelector('.js-auto-play-button').addEventListener('click',() =>{
autoPlay();
});

document.querySelector('.js-reset-score-button').addEventListener('click',() =>{

  resetQuestion();
 
});

document.body.addEventListener('keydown',(event) =>{
  if(event.key === 'r')
    playGame('rock');
  else if(event.key === 'p')
    playGame('paper');
  else if(event.key === 's')
    playGame('scissors');
  else if(event.key === 'a')
    autoPlay();
  else if(event.key === 'backspace'){

  }
});

function resetQuestion(){
  document.querySelector('.js-reset-score-question').innerHTML = `<p class="reset-question">Are you sure you want to reset the score ?</p>
  <button class="reset-yes-button js-reset-yes-button">yes</button>
  <button class="reset-no-button js-reset-no-button">No</button>`;

 document.querySelector('.js-reset-yes-button').addEventListener('click',() =>{
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score'); // resetting the score in the localStorage
  updateScoreElement(); // to display the resetted score on the screen .
  hideresetQuestion();
 });
 document.querySelector('.js-reset-no-button').addEventListener('click',() =>{hideresetQuestion()});
}

function hideresetQuestion(){
  document.querySelector('.js-reset-score-question').innerHTML ='';

}

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