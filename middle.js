
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


module.exports = middle