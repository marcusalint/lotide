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


const middle = function(array) {
  let output = [];
  let mid = array.length / 2
  if (array.length === 1 || array.length === 2) {
    return [];   
  } else if (array.length % 2 === 0) {
    output = array.splice(mid - 1, 2)
  } else {
    output = array.splice((Math.floor(mid)),1);
  }
  return output;
}


console.log(middle([1,2,3,4,5]))
console.log(middle([1,2,3,4,5,6]))
console.log(middle([1,2]))