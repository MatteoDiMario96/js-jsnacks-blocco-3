// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

// - Crea un Array vuoto 

// - Chiedi all'utente un numeor da inserire dentro all'array 

// - Continuo a chiedere numeri finche la loro somma non arriva almeno a 50. 

const arrayVuoto = [];

let numeroUtente;
let somma = 0; 

while (somma < 50){
    let numeroUtente = Number.parseInt(prompt("Type a number!"), 10)
    if(Number.isNaN(numeroUtente) !== true){
        somma += numeroUtente
        arrayVuoto.push(numeroUtente)
    } else {
        console.log("you wrong typing!")
    }
}

console.log(arrayVuoto, somma)









