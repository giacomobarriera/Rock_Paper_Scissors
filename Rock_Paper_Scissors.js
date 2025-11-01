
let humanScore = 0;
let computerScore = 0;
let nGame = 1;
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
        nGame++;
    } else if (humanChoice === computerChoice) {
        console.log("Pari! Riprova! " + humanChoice + " è uguale a " + computerChoice)
        nGame++;
    } else {
        console.log("Hai perso! " + computerChoice + " batte " + humanChoice);
        computerScore++;
        nGame;
    }     
};

/*logica intero Game

Confrontare score computer e score utente;
IF score utente maggiore di computer utente
    allora "Hai vinto!"
ELSE "Hai perso!"*/


function playGame() {

    for(let i = 1; i <= 5; i++) {
        const computerSelection = getComputerChoice();    
        const humanSelection = getHumanChoice();
        
        console.log("Numero Game:", nGame);
        console.log("Computer sceglie:", computerSelection );
        console.log("Utente sceglie:", humanSelection);
        
        playRound(humanSelection, computerSelection);         

        console.log("Punteggio Computer:", computerScore);
        console.log("Punteggio Utente:", humanScore);

    }
}

    
playGame();