const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// test eqArrays using assertEqual
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should FAIL

console.log("Should return true");
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
console.log("Should return false");
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log("Should return false");
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false