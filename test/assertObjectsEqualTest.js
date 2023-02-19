const assertObjectsEqual = require('../assertObjectsEqual');

// This test should pass
console.log(assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 2}));
// This test should pass
console.log(assertObjectsEqual({a: 1, b: [1, "str"]}, {a: 1, b: [1, "str"]}));
// This test should fail
console.log(assertObjectsEqual({a: 1, b: 1}, {a:1, b: 2}));
// This test should fail
console.log(assertObjectsEqual({a: 1, b: [1, "1"]}, {a: 1, b:[1, 1]}));
// This test should fail
console.log(assertObjectsEqual({a: 1}, {a: 1, b: 2}));