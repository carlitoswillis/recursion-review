// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // base cases: numbers, strings, booleans
  // recursive cases: arrays and objects
  let resultString = '';

  var isUnconvertable = function (type) {

    if (typeof type === 'undefined' || typeof type === 'Symbol' || typeof type === 'function' || type === null) {
      return true;
    } else {
      return false;
    }

  };
  const chopper = function(string) {
    let chopped = string.split('');
    chopped.pop();
    chopped = chopped.join('');
    return chopped;
  };

  if (isUnconvertable(obj)) {
    return 'null';
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (typeof obj === 'boolean' || typeof obj === 'number') {
    return obj + '';
  }

  if (Array.isArray(obj)) {

    resultString += '[';

    for (let i = 0; i < obj.length; i++) {
      resultString += stringifyJSON(obj[i]) + ',';
    }

    if (resultString.length > 2) {
      resultString = chopper(resultString);
    }

    resultString += ']';

    return resultString;

  }

  if (typeof obj === 'object') {
    resultString += '{';

    for (var key in obj) {

      if (isUnconvertable(obj[key]) && obj[key] !== null) {
        continue;
      }
      resultString += stringifyJSON(key) + ':';
      resultString += stringifyJSON(obj[key]) + ',';
    }
    if (resultString[resultString.length - 1] !== '{') {
      resultString = chopper(resultString);
    }

    resultString += '}';
  }

  return resultString;

  // your code goes here
};