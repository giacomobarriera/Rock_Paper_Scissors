
let humanScore = 0;
let computerScore = 0;
let humanSelection;
let computerSelection;

function getComputerChoice() {
    let n= (Math.random() * 10);
    if (n > 0 && n <= 3) {
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
    

//elementi dinamici
const body = document.querySelector("body");

const resultBox = document.createElement("div");
body.appendChild(resultBox);
resultBox.style.backgroundColor = "ivory";
resultBox.textContent = "SCELTE DEL COMPUTER E DELL'UTENTE";




//buttons per funzioni
const humanChoice = document.querySelector("#hmn");
const computerChoice = document.getElementById("pc");
const playR = document.getElementById("playR");


//collegamento eventi ai bottoni
humanChoice.addEventListener("click", () => {
    humanSelection = getHumanChoice()
    const humanChoice = document.createElement("div")
    resultBox.appendChild(humanChoice);
    humanChoice.textContent = "Utente sceglie: " + humanSelection;
})

computerChoice.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    const computerChoice = document.createElement("div")
    resultBox.appendChild(computerChoice);
    computerChoice.textContent = "Computer sceglie:" + computerSelection;
});

//punteggi
const score = document.createElement("div");
resultBox.appendChild(score);

const hmnScore = document.createElement("div")
score.appendChild(hmnScore);
hmnScore.textContent = "Utente: " + humanScore;

const pcScore = document.createElement("div");
score.appendChild(pcScore);
pcScore.textContent = "Computer: " + computerScore;

//funzione playRound
function playRound (humanChoice, computerChoice) {
              
    if (
        (humanChoice === "rock" && computerChoice === "scissors")  || 
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") 
    ) {
        const roundScore = document.createElement("div")
        resultBox.appendChild(roundScore);
        roundScore.textContent = "Hai vinto! " + humanChoice + " batte " + computerChoice;
        humanScore++;
        hmnScore.textContent = "Utente: " + humanScore;

    } else if (humanChoice === computerChoice) {
        const roundScore = document.createElement("div")
        resultBox.appendChild(roundScore);
        roundScore.textContent = "Pari! Riprova! " + humanChoice + " è uguale a " + computerChoice;
    } else {
        const roundScore = document.createElement("div")
        resultBox.appendChild(roundScore);
        roundScore.textContent = "Hai perso! " + computerChoice + " batte " + humanChoice;
        computerScore++;
        pcScore.textContent = "Computer: " + computerScore;

    }     
};

playR.addEventListener("click", () => {
    const roundScore = document.createElement("div");
    resultBox.appendChild(roundScore);
    roundScore.textContent = playRound(humanSelection, computerSelection)


});



//funzione per dichiarazione vincitore