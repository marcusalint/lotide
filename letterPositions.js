// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1 [i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function(actual, expected) {
//   if (eqArrays(actual, expected) === true) {
//     console.log(`✅ Assertion Passed : ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑 Assertion Failed : ${actual} !== ${expected}`);
//   }
// };





const letterPositions = function(sentence) {
  let results = {}
  let counter = -1;
  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {        
        counter += 1;
        results[letter].push(counter);
      } else {
        counter += 1;
        results[letter] = [counter];
      }
    } else {
      counter += 1;
    }
  }
  return results;

};








console.log(letterPositions('lighthouse in the house'))
assertArraysEqual(letterPositions('hello').e 1)
