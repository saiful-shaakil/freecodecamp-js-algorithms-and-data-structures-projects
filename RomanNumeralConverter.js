/* 
=========
Roman Numeral Converter
=========

*/

/* 
Solutions:
*/
function convertToRoman(num) {
  //inserting the main values in a object
  const numerals = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };
  //declaring a variable to return the result
  let romanized = "";
  // converting the object into array by using object keys and using reverse to get the greater number first
  let decimalKeys = Object.keys(numerals).reverse();
  //using map to check every value of the array if it is matched the codition in while loop
  decimalKeys.map((key) => {
    while (key <= num) {
      romanized += numerals[key];
      num -= key;
    }
  });
  return romanized;
}

convertToRoman(36);
