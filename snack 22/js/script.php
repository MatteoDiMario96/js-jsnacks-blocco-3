<!-- Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. -->


<?php

function getCount($str) {
    // Count the vowels
    $vowelsCount = 0;
    
    // Write the vowels
    $vowels = ['a', 'e', 'i', 'o', 'u'];
    
    //Cicle for any character of the string 
    for($i = 0; $i < strlen($str); $i++){
        
        // If the character is in the array vowels add 1 to the count 
        if(in_array($str[$i], $vowels)){
          $vowelsCount++;
      }
    }
    
    return $vowelsCount;
  }
