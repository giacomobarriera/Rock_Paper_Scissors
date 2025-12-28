
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
    /*let answer= prompt("rock, paper or scissors");
        return answer.toLowerCase();*/

    const container = document.querySelector(".container");
    const computerChoiceButton = document.querySelector("#pc");

    const humanBox = document.createElement("div");
    container.insertBefore(humanBox, computerChoiceButton);
    humanBox.style.border = "1px solid yellow";
    humanBox.style.display = "flex";
    
    //posizionare al centro i tre pulsanti creati e procedere con le altri funzioni.

    //cercare di comprendere misura humanBox
    humanBox.style.boxSizing = "content-box";

    const divScissors = document.createElement("div");
    const scissors = document.createElement("button");
    humanBox.appendChild(divScissors);
    divScissors.appendChild(scissors);
    scissors.textContent = "SCISSORS";
    divScissors.style.display = "flex";

    
    const divRock = document.createElement("div");
    const rock = document.createElement("button");
    humanBox.appendChild(divRock);
    divRock.appendChild(rock);
    rock.textContent = "ROCK";
    divRock.style.display = "flex";

    const divPaper = document.createElement("div");
    const paper = document.createElement("button")
    humanBox.appendChild(divPaper);
    divPaper.appendChild(paper);
    paper.textContent = "PAPER";
    divPaper.style.display = "flex";
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
resultBox.style.border = "2px solid green";
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
    hmnChoice.textContent = "Utente sceglie: " + humanSelection;
})

computerChoice.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    const computerChoice = document.createElement("div")
    resultBox.appendChild(computerChoice);
    pcChoice.textContent = "Computer sceglie: " + computerSelection;
});

//conteggio game
let nRound = 0;
const nrRound= document.createElement("div");
resultBox.appendChild(nrRound);
nrRound.textContent = "Numero partita: " + nRound;

//punteggi
const score = document.createElement("div");
resultBox.appendChild(score);
score.style.border = "1px solid red";

const hmnScore = document.createElement("div")
score.appendChild(hmnScore);
hmnScore.textContent = "Utente: " + humanScore;

const pcScore = document.createElement("div");
score.appendChild(pcScore);
pcScore.textContent = "Computer: " + computerScore;

//scelte giocatori
const choose = document.createElement("div");
resultBox.appendChild(choose);
choose.style.border = "1px solid black";

const hmnChoice = document.createElement("div");
choose.appendChild(hmnChoice);
hmnChoice.textContent = "Utente sceglie: ";

const pcChoice = document.createElement("div");
choose.appendChild(pcChoice);
pcChoice.textContent = "Computer sceglie: ";

//vincitore
const roundScore = document.createElement("div")
resultBox.appendChild(roundScore);
roundScore.textContent = "GAME: ";
const subScore = document.createElement("a");
roundScore.appendChild(subScore);


//funzione playRound
function playRound (humanChoice, computerChoice) {
              
    if (
        (humanChoice === "rock" && computerChoice === "scissors")  || 
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") 
    ) {
        subScore.textContent = "UTENTE!!!"
        humanScore++;
        hmnScore.textContent = "Utente: " + humanScore;
        nRound++;
        nrRound.textContent = "Numero partita: " + nRound;

    } else if (humanChoice === computerChoice) {
        subScore.textContent = "PARI...";
        nRound++;
        nrRound.textContent = "Numero partita: " + nRound;

    } else {
        subScore.textContent = "COMPUTER!";
        computerScore++;
        pcScore.textContent = "Computer: " + computerScore;
        nRound++;
        nrRound.textContent = "Numero partita: " + nRound;
    }     
};

playR.addEventListener("click", () => {
    const roundScore = document.createElement("div");
    resultBox.appendChild(roundScore);
    roundScore.textContent = playRound(humanSelection, computerSelection)


});



//funzione per dichiarazione vincitore