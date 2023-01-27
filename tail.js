/* assertEqual function to test Tail.js output */
const assertEqual = function(actual, expected) {

  let printOut;

  if (actual === expected) {
    printOut = `✔️ Assertion Passed: ${actual} === ${expected}`;
  } else {
    printOut = `❌ Assertion Failed: ${actual} !=== ${expected}`;
  }
  
  console.log(printOut);
};

/* Function code for returning tail elements of an input array */
const tail = function(inputArray) {
  let outputArray = [];

  /*to trim out first value, start index at 1*/
  for (let i = 1; i < inputArray.length; i++) {
    outputArray[i - 1] = inputArray[i];
  }

  return outputArray;
};

/*test that the tail function does not modify the input array*/
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

/*Test output array using assertEqual in a for loop*/
const assertTestIn = [1, 2, 3, 4, 5];
let assertTestOut = tail(assertTestIn);

for (let i = 0; i < assertTestOut.length; i++) {
  assertEqual(assertTestOut[i], assertTestIn[i + 1]);
}