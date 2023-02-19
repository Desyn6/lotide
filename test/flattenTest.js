const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]", () => {
    const input = [1, 2, [3, 4], 5, [6]];
    const expected = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(flatten(input), expected);
  });
  it("does not mutate the input array", () => {
    let input = [1, 2, [3, 4]];
    flatten(input);
    assert.deepEqual(input, [1, 2, [3, 4]]);
  });
});