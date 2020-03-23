// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // base cases: numbers, strings, booleans
  // recursive cases: arrays and objects
  let resultString = '';

  if (typeof obj === 'string'){
    return '"' + obj + '"';
  }

  if (typeof obj === 'boolean'){
    return obj + '';
  }

  if (Array.isArray(obj)){
    for (let i = 0; i < obj.length - 1; i++){
      resultString += stringifyJSON(obj[i]) + ',';
    }
    resultString += stringifyJSON(obj[obj.length - 1]);
  }

  return resultString;

  // your code goes here
};
