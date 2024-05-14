const arrayVuoto = [];

let NumeroUtente = Number.parseInt(prompt("Da quanti elementi vuoi che sia costituito un array !"), 10)

if(NumeroUtente < 5 || NumeroUtente > 500 || isNaN(NumeroUtente)){
    NumeroUtente = 50;
    console.log("Mi dispiace ti ho dato come valore io 50")
}

for( let i = 0; i < NumeroUtente; i++){
    arrayVuoto.push(Math.floor(Math.random() * 100) + 1)
}



