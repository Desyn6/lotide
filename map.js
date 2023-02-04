const map = function(inputArray, callbackFn) {
  const output = [];   // intialize empty array for results

  for (const element of inputArray){ //loop through all array elements
    // push result of callbackFn with element as argument to output array 
    output.push(callbackFn(element));
  }
  return output;
};

// test map function with anonymous function
const test = [1, 2, 3, 4, 5]; 
const cbF = function(x) {
  return x * 2;
}

console.log(map(test, cbF))

// test map function with in-line anonymous function
console.log(map(test, x => x + 2));

// test map function with strings
const words = ["Did", "everyone", "need", "new", "yarn?"];
console.log(map(words, x => x[0]));
console.log(map(words, x => x.length));