
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

<?php
function toCamelCase($str) {
    // Dividi la stringa in base a '-' o '_'
    $stringExploded = preg_split('/[-_]/', $str);
    
    // La prima parola rimane invariata
    $camelCaseStr = $stringExploded[0];

    // Itera sulle parole successive
    for ($i = 1; $i < count($stringExploded); $i++) {
        // Converti la prima lettera della parola in maiuscolo e aggiungila
        $camelCaseStr .= ucfirst($stringExploded[$i]);
    }
    
    return $camelCaseStr;
}

