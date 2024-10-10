//Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


  function dnaStrand(dna){
  
    // Split the single character into in array
    const dnaSplitted = dna.split('');
    
    // For every letter if the condition is true into the correct characters
    for(let i = 0; i < dnaSplitted.length; i++){
      if(dnaSplitted[i] === 'A'){
        dnaSplitted[i] = 'T'
      }else if(dnaSplitted[i] === 'T'){
        dnaSplitted[i] = 'A'
      }else if(dnaSplitted[i] === 'C'){
        dnaSplitted[i] = 'G'
      }else if(dnaSplitted[i] === 'G'){
        dnaSplitted[i] = 'C'
      }
    }
    
    // Reconverte the array into string
    const dnaConvertedString = dnaSplitted.join('');
    return dnaConvertedString;
  }
