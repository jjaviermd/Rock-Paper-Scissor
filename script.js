const buttons = document.querySelectorAll('button');
buttons.forEach((button)=> {
  button.addEventListener('click', playerPlay);
});

//==============================================================================
function playerPlay (){
  let playerSelection = '';
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button)=> {
    button.addEventListener('click', () =>{
      playerSelection += button.id;
    })
    return playerSelection;
})
}

//------------------------------------------------------------------------------

 function pcPlay(){
    const pcOptions=["rock","paper","scissors"];
    return pcOptions[Math.floor(Math.random() * pcOptions.length)];
        }


//------------------------------------------------------------------------------
    

function playRound(){
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