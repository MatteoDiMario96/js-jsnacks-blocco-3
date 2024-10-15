// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


  function moveZeros(arr) {
  
    // Nuovo array per elementi diversi da 0
    let result = []; 
    
    // Nuovo array per gli zeri
    let zeros = [];  
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        zeros.push(arr[i]); // Aggiungi l'elemento all'array degli zeri
      } else {
        result.push(arr[i]); // Aggiungi l'elemento all'array dei non-zeri
      }
    }
  
    // Unisci l'array dei non-zeri con l'array degli zeri
    return result.concat(zeros);
  }
