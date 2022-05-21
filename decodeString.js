// In this challenge, you’ll write a decoder.

// Write a function that takes in a string and returns a string. 
// A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

// The number in the string represents how many characters each letter should shift. For example:

// >>> "1a" // "b"
// >>> "3ce" // "fh"
// >>> "2fcjjm" // "hello"

function decoder(str) {
    let key = Number(str[0]);
    let solution = "";
    for (let i = 1; i < str.length; i++) {
      let strValue = str[i].charCodeAt() + key;
      solution += String.fromCharCode(strValue);
    }
    return solution;
  }

console.log(decoder('2fcjjm'));