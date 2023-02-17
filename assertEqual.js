const assertEqual = function(actual, expected) {
  let printOut;

  if (actual === expected) {
    printOut = `✔️ Assertion Passed: ${actual} === ${expected}`;
  } else {
    printOut = `❌ Assertion Failed: ${actual} !== ${expected}`;
  }
  
  console.log(printOut);
};

module.exports = assertEqual;