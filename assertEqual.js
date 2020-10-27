// Emoji

const checkMark = String.fromCodePoint(2705)




// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ " + "Assertion Passed: " + actual + " === " + expected)
  } else {
    console.log("🛑🛑🛑 " + "Assertion Failed: " + actual + " !== " + expected)
  }

};

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual('hello', 'hello'));
console.log(assertEqual('hello', 'hi'));
console.log(assertEqual(7, 7));
console.log(assertEqual(7, 9));