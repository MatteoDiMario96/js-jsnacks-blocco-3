const arrayVuoto = [];

let NumeroUtente = Number.parseInt(prompt("Da quanti elementi vuoi che sia costituito un array !"), 10)

if(NumeroUtente < 5 || NumeroUtente > 500 || isNaN(NumeroUtente)){
    NumeroUtente = 50;
    console.log("Mi dispiace ti ho dato come valore io 50")
}

for( let i = 0; i < NumeroUtente; i++){
    arrayVuoto.push(Math.floor(Math.random() * 100) + 1)
}

for(let i = arrayVuoto.length - 1; i > arrayVuoto.length - 6; i--){
    console.log(arrayVuoto[i])
}

let numeroElementiStampati = Number.parseInt(prompt("Dimmi in numero quanti elementi vorresti visualizzare dell'arrey in console..."))

if(numeroElementiStampati > NumeroUtente){
    console.log("Mi dispiace, hai fatto male i conti, cosi non possiamo farlo. ")
}

for(let i = arrayVuoto.length - 1; i > arrayVuoto.length - (numeroElementiStampati + 1); i--){
    console.log("Scelto dall'utente:",arrayVuoto[i])
}


console.log(arrayVuoto)

