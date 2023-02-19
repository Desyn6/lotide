const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("returns the first key in an object matching an input value", () => {
    const input = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const query = "The Wire";
    const expected = "drama";
    assert.strictEqual(findKeyByValue(input, query), expected);
  });
  it("return undefined for a value that has no corresponding key", () => {
    const input = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const query = "That 70's show";
    const expected = undefined;
    assert.strictEqual(findKeyByValue(input, query), expected);
  });
});