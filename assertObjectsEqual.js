// include helper functions
const exp = require('constants');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let out;

  if (eqObjects(actual, expected)) {
    out = `✔️ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`;
  } else {
    out = `❌ Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`;
  }
  return out;
};

module.exports = assertObjectsEqual;