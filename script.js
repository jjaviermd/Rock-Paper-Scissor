
//==============================================================================

function playerPlay (e){
let playerSelection=e.target.textContent.toLowerCase();
console.log('Your hand shows a ' + playerSelection)
return playerSelection;
}

//------------------------------------------------------------------------------

 function pcPlay(){
    const pcOptions=["rock","paper","scissors"];
    let pcSelection = pcOptions[Math.floor(Math.random() * pcOptions.length)];
    console.log('PC\'s hand shows a ' + pcSelection);
    return pcSelection;
  }


//------------------------------------------------------------------------------
    

function playRound(playerSelection, pcSelection){
  switch (true) {
    case playerSelection === pcSelection:
      console.log("Its a tie! Try one more time!");
      ties++
      break;

    case playerSelection == "paper" && pcSelection == "rock":
    case playerSelection == "rock" && pcSelection == "scissors":
    case playerSelection == "scissors" && pcSelection == "paper":
      console.log("Good job! Keep on track");
      wins++;
      break;

    case playerSelection == "rock" && pcSelection == "paper":
    case playerSelection == "paper" && pcSelection == "scissors":
    case playerSelection == "scissors" && pcSelection == "rock":
      console.log("crap!!, but its not over");
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
    playRound(playerSelection,pcSelection)
  } )
})