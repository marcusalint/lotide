const assertEqual = require('../assertEqual')

const head = require('../head')





console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual('hello', 'hello'));
console.log(assertEqual('hello', 'hi'));
console.log(assertEqual(7, 7));
console.log(assertEqual(7, 9));


console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));