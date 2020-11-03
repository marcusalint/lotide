const assertEqual = require('../assertEqual')
const tail = require('../tail')








console.log(tail([1,2,3,4,5]));


const words = ["Mini Mo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3)); // original array should still have 3 elements!