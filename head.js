const assertEqual = function(actual, expected) {

  let printOut;

  if (actual === expected) {
    printOut = `✔️ Assertion Passed: ${actual} === ${expected}`;
  } else {
    printOut = `❌ Assertion Failed: ${actual} !=== ${expected}`;
  }
  
  console.log(printOut);
};

/* Function code for head, which returns first array element */
const head = function(inputArray) {
  return inputArray[0];
};

/* Test cases for head function */
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([], undefined));
assertEqual(head([1]), 1);