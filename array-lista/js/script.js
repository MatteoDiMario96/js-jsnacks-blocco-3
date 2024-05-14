const frigorifero = [
    "banana",
    "mela",
    "pera",
    "ciliegia",
    "arancia",
    "mandarino",
    "cocomero",
    "limone",
    "fragola"
];

frigorifero.push("pesca")

for(let i = 0; i < frigorifero.length; i++){
    if (frigorifero[i] === "cocomero"){
        console.log("Non ti preoccupare, abbiamo il cocomero!")
    } else if (frigorifero[i] !== "cocomero"){

    } else {
        console.log("Mi dispiace, devi uscire a comprarlo!")
    }
} 

// Aggiunto ciclo for per aumentare sempre di uno nell indice dell'array.
// e gli ho chiesto SE nell'array frigorifero nel tuo i( che quindi cresce con il ciclo e quindi cambia valore) è === "cocomero" l'elemento che io stavo cercando. Se si stampa ce l'ho se è diverso da cocomenro non fai nulla altrimenti ( cioè se non ho niente) dimmi di andarlo a comprare 