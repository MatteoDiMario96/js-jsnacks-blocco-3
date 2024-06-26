// > Crea un array composto da 15 automobili.
// > Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// < Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// < Infine stampa separatamente i 3 array.

const automobili = [
    {
        marca: "opel",
        modello: "corsa",
        alimentazione: "benzina"
    },
    {
        marca: "opel",
        modello: "corsa",
        alimentazione: "diesel"
    },
    {
        marca: "opel",
        modello: "corsa",
        alimentazione: "gpl"
    },
    {
        marca: "opel",
        modello: "corsa",
        alimentazione: "elettrico"
    },
    {
        marca: "opel",
        modello: "corsa",
        alimentazione: "metano"
    },
    {
        marca: "opel",
        modello: "corsa",
        alimentazione: "benzina"
    },
    {
        marca: "opel",
        modello: "corsa",
        alimentazione: "diesel"
    },
    {
        marca: "opel",
        modello: "corsa",
        alimentazione: "gpl"
    },
    {
        marca: "opel",
        modello: "corsa",
        alimentazione: "elettrico"
    },
    {
        marca: "opel",
        modello: "corsa",
        alimentazione: "metano"
    },
    {
        marca: "opel",
        modello: "corsa",
        alimentazione: "benzina"
    },
    {
        marca: "opel",
        modello: "corsa",
        alimentazione: "diesel"
    },
    {
        marca: "opel",
        modello: "corsa",
        alimentazione: "gpl"
    },
    {
        marca: "opel",
        modello: "corsa",
        alimentazione: "elettrico"
    },
    {
        marca: "opel",
        modello: "corsa",
        alimentazione: "metano"
    },
]

const arrayBenzina = automobili.filter((elemento) => {
    if(elemento.alimentazione === "benzina")
    return true;
})
console.log(arrayBenzina)

const arrayDiesel = automobili.filter((elemento) => {
    if(elemento.alimentazione === "diesel")
    return true;
})
console.log(arrayDiesel)

const arrayAltreAuto = automobili.filter((elemento) => {
    if(elemento.alimentazione !== "benzina" && elemento.alimentazione !== "diesel")
    return true;
})
console.log(arrayAltreAuto)