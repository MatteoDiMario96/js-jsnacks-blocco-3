const arrayA = [1, 2, 3, 4, 5, 6, 7, 8];

const arrayB = ["Matteo", "Sara", "Giovanni", "Paolo", "Alfredo", "Paola", "Mirko", "Samantha", "Riccardo", "Arnaldo"];


for(let i = arrayA.length + 1; i < arrayB.length + 1; i++){
    arrayA.push(i)
}
console.log(arrayA,arrayB)