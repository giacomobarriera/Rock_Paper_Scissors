

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
        console.log("Rock");
    } else if ((n > 4 || n===4) && (n < 6 || n===6 )) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    }
        
}

getComputerChoice();