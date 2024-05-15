// Crea due array che hanno un numero di elementi diversi. 
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

// - Crea un array tot elementi

// - Crea un array tot elementi + 1 

// -Crea un ciclo while fino a quando array con meno elementi ha stessi elementi di quello più lungo
//     - Aggiungo elementi a quello più corto 

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let shortArray;
let longArray;

if(arrayA.lenght > arrayB.lenght){
    longArray = arrayA
    shortArray = arrayB
} else {
    longArray = arrayB
    shortArray = arrayA
}

while(shortArray.length < longArray.length){
    shortArray.push(Math.floor(Math.random() * 100) + 1)
}

console.log(arrayA, arrayB)


