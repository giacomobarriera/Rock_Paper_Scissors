
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
    pcBox.style.display = "flex";

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
        //aggiungi classe selected
        pcButtonRock.classList.add("selected");
        return "rock";
    } else if ((n > 4 || n===4) && (n < 6 || n===6 )) {
        //aggiungi classe selected
        pcButtonPaper.classList.add("selected");
        return "paper";
    } else {
        //aggiungi classe selected
       pcButtonScissors.classList.add("selected");
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
    humanBox.style.display = "flex";
    
    //posizionare al centro i tre pulsanti creati e procedere con le altri funzioni.

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
            btn.classList.remove("selected");
           });
           //colorare pulsante cliccato
           this.classList.add("selected");
           
         humanSelection = button.textContent.toLowerCase();
         
         hmnChoice.textContent = "La tua scelta: " + humanSelection;
        });
    })
};


    
//elementi dinamici
const body = document.querySelector("body");

const resultBox = document.createElement("div");
body.appendChild(resultBox);
resultBox.classList.add("card", "resultBox");

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

const round = document.createElement("div");
resultBox.appendChild(round)
round.classList.add("card", "outBox");

//conteggio game
let nRound = 0;
const nrRound= document.createElement("div");
round.appendChild(nrRound);
nrRound.classList.add("card", "inBox")
nrRound.textContent = "N° partita: " + nRound;

//vincitore
const roundScore = document.createElement("div")
round.appendChild(roundScore);
roundScore.classList.add("card", "inBox");
roundScore.textContent = "GAME: ";
const subScore = document.createElement("a");
roundScore.appendChild(subScore);

//punteggi
const score = document.createElement("div");
resultBox.appendChild(score);
score.classList.add("card", "outBox");

const hmnScore = document.createElement("div")
score.appendChild(hmnScore);
hmnScore.classList.add("card", "inBox");
hmnScore.textContent = "Utente: " + humanScore;

const pcScore = document.createElement("div");
score.appendChild(pcScore);
pcScore.classList.add("card", "inBox");
pcScore.textContent = "Computer: " + computerScore;

//scelte giocatori
const choose = document.createElement("div");
resultBox.appendChild(choose);
choose.classList.add("card", "outBox");

const hmnChoice = document.createElement("div");
choose.appendChild(hmnChoice);
hmnChoice.classList.add("card", "inBox");
hmnChoice.textContent = "Utente sceglie: ";

const pcChoice = document.createElement("div");
choose.appendChild(pcChoice);
pcChoice.classList.add("card", "inBox");
pcChoice.textContent = "Computer sceglie: ";




//funzione playRound
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