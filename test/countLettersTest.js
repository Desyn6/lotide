const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns an object of all letters (key) and their counts (values) for an input all lowercase string", () => {
    const input = "lighthouse in the house";
    const expected = {
      l: 1,
      i: 2,
      g: 1,
      h: 4,
      t: 2,
      o: 2,
      u: 2,
      s: 2,
      e: 3,
      n: 1,
    };
    assert.deepEqual(countLetters(input), expected);
  });
  it("returns an objects of all letters (key) and thier counts (values) regardless of case in a string", () => {
    const input = "LiGhThoUse iN thE houSe";
    const expected = {
      l: 1,
      i: 2,
      g: 1,
      h: 4,
      t: 2,
      o: 2,
      u: 2,
      s: 2,
      e: 3,
      n: 1,
    };
    assert.deepEqual(countLetters(input), expected);
  });
});


