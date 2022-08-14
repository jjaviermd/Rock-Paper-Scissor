let playerSelection;
let pcSelection;
let playerWins = 0;
let pcWins = 0;
let roundCounter =0;
const mainContainer = document.querySelector('main');
const divPlayerHand = document.createElement('div');
  mainContainer.appendChild(divPlayerHand);
const divPcHand = document.createElement('div');
  mainContainer.appendChild(divPcHand);
const divResults =  document.createElement('div');
  mainContainer.appendChild(divResults);
const divGameEnd = document.createElement('div');
  mainContainer.appendChild(divGameEnd);
//==============================================================================

function playerPlay (e){
  playerSelection=e.target.textContent.toLowerCase();
  divPlayerHand.textContent = 'Your hand shows a ' + playerSelection;
  return playerSelection;
}

//------------------------------------------------------------------------------

 function pcPlay(){
    const pcOptions=["rock","paper","scissors"];
    pcSelection = pcOptions[Math.floor(Math.random() * pcOptions.length)];
    divPcHand.textContent = 'PC\'s hand shows a ' + pcSelection;
    return pcSelection;
  }


//------------------------------------------------------------------------------
    

function playRound(){
  switch (true) {
    case playerSelection === pcSelection:
      roundCounter++;
      divResults.textContent = "DRAW!! Score: YOU: "+playerWins +" PC: "+pcWins+ ". Rounds: "+ roundCounter;
      break;

    case playerSelection == "paper" && pcSelection == "rock":
    case playerSelection == "rock" && pcSelection == "scissors":
    case playerSelection == "scissors" && pcSelection == "paper":
      playerWins++
      roundCounter++;
      divResults.textContent= 'YOU WON THE ROUND. Score: YOU: '+playerWins +' PC: '+pcWins+'. Rounds: '+ roundCounter;
      if(playerWins === 5) {
        divGameEnd.textContent = 'GAME OVER. You are the winner!';
        playerWins=0;
        pcWins=0
        roundCounter=0;
      }
      break;

    case playerSelection == "rock" && pcSelection == "paper":
    case playerSelection == "paper" && pcSelection == "scissors":
    case playerSelection == "scissors" && pcSelection == "rock":
      pcWins++
      roundCounter++;
      divResults.textContent= 'YOU LOST THE ROUND. Score: YOU: '+playerWins +' PC: '+pcWins+'. Rounds: '+ roundCounter;
      if (pcWins === 5) {
        divGameEnd.textContent = 'GAME OVER. You loose!';
        playerWins=0;
        pcWins=0;
        roundCounter=0;
      }
      break;
        }
      }
//==============================================================================
const rpsbtn = document.querySelectorAll('.btn');

rpsbtn.forEach((button)=> {
  button.addEventListener('click', (e)=>{
    playerPlay(e);
    pcPlay();
    playRound();
  } )
})
//==============================================================================