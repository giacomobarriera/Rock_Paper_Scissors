

console.log("Hello World!");


/*SCELTA del COMPUTER
Chiedere al computer di scegliere un numero a caso;
Trasformare il numero da decimale in intero
IF numero è tra 0 e 3
    allora chiama rock
ELSE IF numero è tra 4 e 6
    allora chiama paper
ELSE numero è gra 7 e 9 
    allora chiama scissors*/

function getComputerChoice() {
    let n= (Math.random() * 10);
            console.log(n);

    if (n > 0 && (n < 3 || n===3)) {
        console.log("rock");
    } else if ((n > 4 || n===4) && (n < 6 || n===6 )) {
        console.log("paper");
    } else {
        console.log("scissors");
    }
        
}

getComputerChoice();

/*Scelta UTENTE
Chiedere all'utente di scegliere un valore
IF valore è Rock
    allora mostra Rock
IF valore è Paper
    allora mostra Paper
IF valore è Scissors
    allora mostra Scissors
*/

function getHumanChoice() {
    let answer= prompt("rock, paper or scissors");
        
    if (answer == "rock" 
        || answer == "paper" 
        || answer == "scissors") {
        console.log(answer)
    } else {
        console.log("Try again");
    }
}

getHumanChoice();


let humanScore = 0;
let computerScore = 0;


/*logica Singolo Round
creare nuova variabile "a" per trasforare humanChoice in minuscolo;
IF "a" uguale a rock e computerChoice uguale a Scissors
    allora messaggio "Hai vinto! Sasso batte forbici"
    e aumenta di 1 humanScore
ELSE IF "a" uguale a scissors e computerChoice uguale a Paper
    allora messaggio "Hai Vinto! Forbici battono carta"
    e aumenta di 1 humanScore
ELSE IF "a" uguale a paper e computerChoice uguale a Rock   
    allora messaggio "Hai vinto! Carta batte Sasso"
    e aumenta di 1 humanScore

ELSE IF "a" uguale a computerCHoice
    allora messaggio "Pari! Ancora una volta!"

ELSE messaggio "Hai Perso! "computerChoice" batte "a"
*/

function playRound (humanChoice, computerChoice) {

}