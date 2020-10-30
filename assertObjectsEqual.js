const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1); 
  const obj2Keys = Object.keys(object2);
  let flag = true;
  if (obj1Keys.length !== obj2Keys.length) { 
    flag = false;
  } else {
    for (let indexOne in obj1Keys) {
     
      if (obj1Keys[indexOne] !== obj2Keys[indexOne]) {
        flag = false;
      }
    }
  } return flag;

};





const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  const result = eqObjects(actual, expected);
  if (result) {
    console.log(`✅ ✅ ✅  Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ ❌ ❌  Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

let x = {
  a: "b",
  b: 'a'

}

let y = {
  a: "b",
  b: 'a'

}


console.log(assertObjectsEqual(x,y))
