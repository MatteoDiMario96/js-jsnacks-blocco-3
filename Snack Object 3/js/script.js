// Crea un array di oggetti che rappresentano delle persone, 10.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const persone = [
    {
        nome: "Matteo",
        cognome: "Di Mario",
        'età': "27"
    },
    {
        nome: "Matteo",
        cognome: "Di Mario",
        'età': "15"
    },
    {
        nome: "Matteo",
        cognome: "Di Mario",
        'età': "19"
    },
    {
        nome: "Matteo",
        cognome: "Di Mario",
        'età': "12"
    },
    {
        nome: "Matteo",
        cognome: "Di Mario",
        'età': "33"
    },
    {
        nome: "Matteo",
        cognome: "Di Mario",
        'età': "18"
    },
    {
        nome: "Matteo",
        cognome: "Di Mario",
        'età': "11"
    },
    {
        nome: "Matteo",
        cognome: "Di Mario",
        'età': "45"
    },
    {
        nome: "Matteo",
        cognome: "Di Mario",
        'età': "19"
    },
    {
        nome: "Matteo",
        cognome: "Di Mario",
        'età': "8"
    }
];

const nuovoArrayDiPersone = persone.map((elemento) => {
    if(elemento[età] > 18){
        return `Con quest'età puoi guidare${elemento[età]}`
    }
});

nuovoArrayDiPersone = persone.map((elemento) => {
    if(elemento[età] < 18){
        return `Con quest'età mi dispiace ma non puoi guidare${elemento[età]}`
    }
});

console.log(nuovoArrayDiPersone)
