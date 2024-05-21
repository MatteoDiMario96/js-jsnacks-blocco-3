// ! Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer

const secondUtent = Number.parseInt(prompt("Dimmi dei secondi da attendere!"), 10);

let clock = setInterval (function(){
    secondUtent--;
    console.log(secondUtent);
    if(secondUtent <= 0){
        clearInterval(clock);
        alert("Interrompi Timer");
    }
})