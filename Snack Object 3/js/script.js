// Crea un array di oggetti che rappresentano delle persone, 10.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const persone = [
    {
        nome: "Matteo",
        cognome: "Di Mario",
        eta: "27"
    },
    {
        nome: "Matteo",
        cognome: "Di Mario",
        eta: "15"
    },
    {
        nome: "Matteo",
        cognome: "Di Mario",
        eta: "19"
    },
    {
        nome: "Matteo",
        cognome: "Di Mario",
        eta: "12"
    },
    {
        nome: "Matteo",
        cognome: "Di Mario",
        eta: "33"
    },
    {
        nome: "Matteo",
        cognome: "Di Mario",
        eta: "18"
    },
    {
        nome: "Matteo",
        cognome: "Di Mario",
        eta: "11"
    },
    {
        nome: "Matteo",
        cognome: "Di Mario",
        eta: "45"
    },
    {
        nome: "Matteo",
        cognome: "Di Mario",
        eta: "19"
    },
    {
        nome: "Matteo",
        cognome: "Di Mario",
        eta: "8"
    }
];

let nuovoArrayDiPersone = persone.map((elemento) => {
        return `${elemento.nome} ${elemento.cognome}, ${ (elemento.eta > 18) ? "Puoi guidare perchè maggiorenne" : "Non puoi guidare perchè minorenne" }`
    
});


console.log(nuovoArrayDiPersone)
