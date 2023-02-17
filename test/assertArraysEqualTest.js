const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should return PASS
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]); // => should return FAIL
assertArraysEqual([1, 2, 3], [1, 2, '3']); // => should return FAIL
assertArraysEqual([[1, 2, 3], 3, [4, 4]], [[1, 2, 3], 3, [4, 4]]); // => PASS
assertArraysEqual([1, [[]], [4, [4, [7]]]], [1, [[]], [4, [4, [7]]]]); // PASS
assertArraysEqual([1, [[]], [4, [4, [7]]]], [1, [[1]], [4, [4, [7]]]]); // FAIL