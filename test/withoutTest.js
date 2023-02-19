const assert = require('chai').assert;
const without = require('../without');


describe('#without', () => {
  it("returns [1, 4, 5] for [1, 2, 3, 4, 5] and [2, 3]", () => {
    assert.deepEqual(without([1, 2, 3, 4, 5], [2, 3]), [1, 4, 5]);
  });
  it("returns [1, 2, 3, 4, 5] for [1, 2, 3, 4, 5] and [0]", () => {
    assert.deepEqual(without([1, 2, 3, 4, 5], [0]), [1, 2, 3, 4, 5]);
  });
  it("does not mutate the original input array", () => {
    const input = [1, 2, 3, 4, 5];
    without(input, [1, 2]);
    assert.deepEqual(input, [1, 2, 3, 4, 5]);
  });
  it("returns undefined if input is not an array", () => {
    assert.strictEqual(without(1, [2], undefined));
  });
  it("returns the original array if toRemove is undefined", () => {
    assert.deepEqual(without([1, 2]), [1, 2]);
  });
  it("returns the original array if the toRemove is not an array", () => {
    assert.deepEqual(without([1, 2], 3), [1, 2]);
  });
});