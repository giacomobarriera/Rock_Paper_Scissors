
let humanScore = 0;
let computerScore = 0;
let humanSelection;
let computerSelection;

//definizione container 
const container = document.querySelector(".container");

const computerChoiceButton = document.querySelector("#pc");

const humanChoiceButton = document.querySelector("#hmn");

const roundBox = document.querySelector("#playR");


function getComputerChoice() {


    //opzione per agg o togliere alternative
    const existingPcBox = document.querySelector(".pc-box");

    if (existingPcBox) {
        existingPcBox.remove();
        return null;
    }

    // box per pulsanti
    const pcBox = document.createElement("div");
    pcBox.classList.add("card", "pc-box");
    container.insertBefore(pcBox, roundBox);
    pcBox.style.border = "1px solid orange";
    pcBox.style.display = "flex";
    pcBox.style.boxSizing = "content-box";

    //scelta scissors computer
    const pcScissors = document.createElement("div");
    const pcButtonScissors = document.createElement("button");
    pcBox.appendChild(pcScissors);
    pcScissors.appendChild(pcButtonScissors);
    pcButtonScissors.textContent = "SCISSORS";
    pcScissors.style.display = "flex";
   
    //scelta rock computer
    const pcRock = document.createElement("div");
    const pcButtonRock = document.createElement("button");
    pcBox.appendChild(pcRock);
    pcRock.appendChild(pcButtonRock);
    pcButtonRock.textContent = "ROCK";
    pcRock.style.display = "flex";

    //scelta paper computer
    const pcPaper = document.createElement("div");
    const pcButtonPaper = document.createElement("button");
    pcBox.appendChild(pcPaper);
    pcPaper.appendChild(pcButtonPaper);
    pcButtonPaper.textContent = "PAPER";
    pcPaper.style.display = "flex";

    //funzione
    let n= (Math.random() * 10);
    if (n > 0 && n <= 3) {
        //colora la scelta
        pcButtonRock.style.backgroundColor = "orange";
        return "rock";
    } else if ((n > 4 || n===4) && (n < 6 || n===6 )) {
        //colora la scelta
        pcButtonPaper.style.backgroundColor = "orange";
        return "paper";
    } else {
        //colora la scelta
        pcButtonScissors.style.backgroundColor = "orange";
        return "scissors";
    }     
    
};

function getHumanChoice() {

    //opzione per aggiungere e rimuovere alternative
    const existingHumanBox = document.querySelector(".human-box");

    if (existingHumanBox) {
        existingHumanBox.remove();
        return null;
    }

    const humanBox = document.createElement("div");
    humanBox.classList.add("card", "human-box"); //aggiunta classe per agg e rimuovere
    container.insertBefore(humanBox, computerChoiceButton);
    humanBox.style.border = "1px solid yellow";
    humanBox.style.display = "flex";
    
    //posizionare al centro i tre pulsanti creati e procedere con le altri funzioni.

    //cercare di comprendere misura humanBox
    humanBox.style.boxSizing = "content-box";

    const divScissors = document.createElement("div");
    const scissors = document.createElement("button");
    scissors.classList.add("btn-scelta");//utile per click
    humanBox.appendChild(divScissors);
    divScissors.appendChild(scissors);
    scissors.textContent = "SCISSORS";
    divScissors.style.display = "flex";

    const divRock = document.createElement("div");
    const rock = document.createElement("button");
    rock.classList.add("btn-scelta"); // utile per click
    humanBox.appendChild(divRock);
    divRock.appendChild(rock);
    rock.textContent = "ROCK";
    divRock.style.display = "flex";

    const divPaper = document.createElement("div");
    const paper = document.createElement("button");
    paper.classList.add("btn-scelta");// utile per click
    humanBox.appendChild(divPaper);
    divPaper.appendChild(paper);
    paper.textContent = "PAPER";
    divPaper.style.display = "flex";

    //funzione per buttons btn-scelta
    document.querySelectorAll(".btn-scelta").forEach(button => {
        button.addEventListener("click", function() {
            //rimuovere colorazione
           document.querySelectorAll(".btn-scelta").forEach(btn => {
            btn.style.backgroundColor = "";
            btn.style.color = "";
           });
           //colorare pulsante cliccato
           this.style.backgroundColor = "orange";
           
         humanSelection = button.textContent.toLowerCase();
         
         hmnChoice.textContent = "La tua scelta: " + humanSelection;
        });
    })
};


    
//elementi dinamici
const body = document.querySelector("body");

const resultBox = document.createElement("div");
body.appendChild(resultBox);
resultBox.classList.add("card");
//resultBox.style.backgroundColor = "ivory";
//resultBox.style.border = "2px solid green";
//resultBox.textContent = "SCELTE DEL COMPUTER E DELL'UTENTE";

//buttons per funzioni
const humanChoice = document.querySelector("#hmn");
const computerChoice = document.getElementById("pc");
const playR = document.getElementById("playR");

humanChoice.addEventListener("click", () => {
    getHumanChoice();
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
score.classList.add("card");
//score.style.border = "1px solid red";

const hmnScore = document.createElement("div")
score.appendChild(hmnScore);
hmnScore.textContent = "Utente: " + humanScore;

const pcScore = document.createElement("div");
score.appendChild(pcScore);
pcScore.textContent = "Computer: " + computerScore;

//scelte giocatori
const choose = document.createElement("div");
resultBox.appendChild(choose);
choose.classList.add("card");
//choose.style.border = "1px solid black";

const hmnChoice = document.createElement("div");
choose.appendChild(hmnChoice);
hmnChoice.textContent = "Utente sceglie: ";

const pcChoice = document.createElement("div");
choose.appendChild(pcChoice);
pcChoice.textContent = "Computer sceglie: ";

//vincitore
const roundScore = document.createElement("div")
resultBox.appendChild(roundScore);
roundScore.classList.add("card");
roundScore.textContent = "GAME: ";
const subScore = document.createElement("a");
roundScore.appendChild(subScore);


//funzione playRound
//inserire qui logica funzione per vincitore
function playRound (humanChoice, computerChoice) {
    
    if (
        (humanChoice === "rock" && computerChoice === "scissors")  || 
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") 
    ) { 
        if (humanScore < 4) {
        subScore.textContent = "UTENTE!!!"
        humanScore++;
        hmnScore.textContent = "Utente: " + humanScore;
        nRound++;
        nrRound.textContent = "Numero partita: " + nRound;
        } else {
        alert("Bravo! Hai vinto!");
        humanScore = 0;
        hmnScore.textContent = "Utente: " + humanScore;
        nRound = 0;
        nrRound.textContent = "Numero partita: " + nRound;
        computerScore = 0;
        pcScore.textContent = "Computer: " + computerScore;
        subScore.textContent = "";
        }
    } else if (humanChoice === computerChoice) {
        subScore.textContent = "PARI...";
        nRound++;
        nrRound.textContent = "Numero partita: " + nRound;
    } else {
        if (computerScore < 4) {
        subScore.textContent = "COMPUTER!";
        computerScore++;
        pcScore.textContent = "Computer: " + computerScore;
        nRound++;
        nrRound.textContent = "Numero partita: " + nRound;
        } else {
            alert("Peccato! Hai Perso!");
            humanScore = 0;
        hmnScore.textContent = "Utente: " + humanScore;
        nRound = 0;
        nrRound.textContent = "Numero partita: " + nRound;
        computerScore = 0;
        pcScore.textContent = "Computer: " + computerScore;
        subScore.textContent = "";
        }
    }   
};

playR.addEventListener("click", () => {
    if (!humanSelection) {
        alert("Prima scegli la tua mossa!");
        return;
    } else if (!computerSelection) {
        alert("Prima fai scegliere al computer!");
        return;
    }
    
    const existingHumanBox = document.querySelector(".human-box");
    const existingPcBox = document.querySelector(".pc-box");

    if (existingHumanBox) {
        existingHumanBox.remove();
    
    }
    if (existingPcBox) {
        existingPcBox.remove();
    
    }

    playRound(humanSelection, computerSelection);

   //resettare le scelte  
    humanSelection = null;
    computerSelection = null;

});