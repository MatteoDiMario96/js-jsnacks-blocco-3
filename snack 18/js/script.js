
// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

//For example, take 153 (3 digits), which is narcissistic:

// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// and 1652 (4 digits), which isn't:

// 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

// The Challenge:
// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

// This may be True and False in your language, e.g. PHP. 


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


  