const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// test if middle() mutates input array
let testArray = [1, 2, 3, 4, 5, 6];
middle(testArray);
assertArraysEqual(testArray, [1, 2, 3, 4, 5, 6]);

// test if middle() yields intended outputs
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle(["Malcome", "in", "the", "Middle"]), ["in", "the"]);