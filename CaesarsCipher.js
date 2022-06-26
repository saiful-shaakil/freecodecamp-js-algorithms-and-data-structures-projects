/* 
========
Caesars Cipher
========
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

/* 
=========
Solutions
=========
*/
function rot13(str) {
  //declaring variable to input the result;
  let result = "";
  //letter
  let startAlphabet = "ABCDEFGHIJKLM";
  let endAlphabet = "NOPQRSTUVWXYZ";

  //
  for (let i = 0; i < str.length; i++) {
    let letterToDecode = str[i];
    if (startAlphabet.indexOf(letterToDecode) >= 0) {
      result += endAlphabet[startAlphabet.indexOf(letterToDecode)];
    } else if (endAlphabet.indexOf(letterToDecode) >= 0) {
      result += startAlphabet[endAlphabet.indexOf(letterToDecode)];
    } else {
      result += letterToDecode;
    }
  }

  return result;
}

rot13("SERR PBQR PNZC");
