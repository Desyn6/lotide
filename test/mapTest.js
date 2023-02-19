const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it("should multiply all elements an array with a callback fn", () => {
    const input = [1, 2, 3, 4, 5];
    const callback = x => x * 2;
    const expected = [2, 4, 6, 8, 10];
    assert.deepEqual(map(input, callback), expected);
  });
  it("should return the lengths of all strings in an array w/ cbF", () => {
    const input = ["I", "have", "so", "many", "tests", "to", "write"];
    const callback = x => x.length;
    const expected = [1, 4, 2, 4, 5, 2, 5];
    assert.deepEqual(map(input, callback), expected);
  });
});