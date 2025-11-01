
let humanScore = 0;
let computerScore = 0;
let humanSelection;
let computerSelection;

function getComputerChoice() {
    let n= (Math.random() * 10);
    if (n > 0 && (n < 3 || n===3)) {
        return "rock";
    } else if ((n > 4 || n===4) && (n < 6 || n===6 )) {
        return "paper";
    } else {
        return "scissors";
    }     
};

function getHumanChoice() {
    let answer= prompt("rock, paper or scissors");
        return answer.toLowerCase();
};

function playRound (humanChoice, computerChoice) {
              
    if (
        (humanChoice === "rock" && computerChoice === "scissors")  || 
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") 
    ) {
        console.log("Hai vinto! " + humanChoice + " batte " + computerChoice);
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log("Pari! Riprova! " + humanChoice + " è uguale a " + computerChoice)
    } else {
        console.log("Hai perso! " + computerChoice + " batte " + humanChoice);
        computerScore++;
    }     
};

function playGame() {

    for(let i = 1; i <= 5; i++) {
        computerSelection = getComputerChoice();    
        humanSelection = getHumanChoice();
        
        console.log("Numero Game:", i);
        console.log("Computer sceglie:", computerSelection );
        console.log("Utente sceglie:", humanSelection);
        
        playRound(humanSelection, computerSelection);         

        console.log("Punteggio Computer:", computerScore);
        console.log("Punteggio Utente:", humanScore);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! Hai battuto il computer!")
    } else { 
        console.log("Peccato, hai perso! Riprova!")
    }
}
    
playGame();