// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function wordReverse(str){
    const wordSplitted = str.split(' ');

    for (let index = 0; index < wordSplitted.length; index++) {
        wordSplitted[index] = wordSplitted[index].split('').reverse().join('');
    }

    return wordSplitted.join(' ');
}


function narcissistic(value) {
  
    //Trasform into string 
    const valueString = value.toString();
    
    //Split in array 
    const valueSplitted = valueString.split('');
    
    //Count the digits
    const valueDigits = valueSplitted.length;
    
    // Variable for number elevated
    let count = 0;
    
    //Elevation to power added at count
    for(let i = 0; i < valueDigits; i++){
      count += Math.pow(valueSplitted[i],  valueDigits);
    }
    
    //Condition for Narcissistic numbers
    if(value === count){
      return true;
    }else{
      return false
    }
  }
