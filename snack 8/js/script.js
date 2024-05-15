// Snack9 Crea un array vuoto. Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero,
//  se è dispari inseriscilo nell'array.

const arrayVuoto = [];
let numeroUtente;
while(arrayVuoto.length(6)){
    numeroUtente = Number.parseInt(prompt("Type a number"), 10);
}

if(numeroUtente % 2 === 1 ){
    arrayVuoto.push(numeroUtente)
}