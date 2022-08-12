let playerSelection;
let pcSelection;
//==============================================================================

function playerPlay (e){
playerSelection=e.target.textContent.toLowerCase();
console.log('Your hand shows a ' + playerSelection)
return playerSelection;
}

//------------------------------------------------------------------------------

 function pcPlay(){
    const pcOptions=["rock","paper","scissors"];
    pcSelection = pcOptions[Math.floor(Math.random() * pcOptions.length)];
    console.log('PC\'s hand shows a ' + pcSelection);
    return pcSelection;
  }


//------------------------------------------------------------------------------
    

function playRound(){
  switch (true) {
    case playerSelection === pcSelection:
      alert("DRAW!!");
      break;

    case playerSelection == "paper" && pcSelection == "rock":
    case playerSelection == "rock" && pcSelection == "scissors":
    case playerSelection == "scissors" && pcSelection == "paper":
      alert('YOU WON THE ROUND')
      wins++;
      break;

    case playerSelection == "rock" && pcSelection == "paper":
    case playerSelection == "paper" && pcSelection == "scissors":
    case playerSelection == "scissors" && pcSelection == "rock":
      alert('YOU LOST THE ROUND')
      looses++;
      break;

    default:
      console.log("Sorry, Something went terribly wrong!!")
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