const tail = require('../tail')
const assertEqual = require('../assertEqual')

/*test that the tail function does not modify the input array*/
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

/*Test output array using assertEqual in a for loop*/
const assertTestIn = [1, 2, 3, 4, 5];
let assertTestOut = tail(assertTestIn);

console.log("Test that tail has returned [2, 3, 4, 5]")
for (let i = 0; i < assertTestOut.length; i++) {
  assertEqual(assertTestOut[i], assertTestIn[i + 1]);
}