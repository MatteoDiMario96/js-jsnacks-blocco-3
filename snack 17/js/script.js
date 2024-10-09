// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function wordReverse(str){
    const wordSplitted = str.split(' ');

    for (let index = 0; index < wordSplitted.length; index++) {
        wordSplitted[index] = wordSplitted[index].split('').reverse().join('');
    }

    return wordSplitted.join(' ');
}

