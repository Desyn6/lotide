const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKeys", () => {
  it("returns the first matching key for a value callback fn", () => {
    const input = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const callback = x => x.stars === 2;
    const expected = "noma";
    assert.strictEqual(findKey(input, callback), expected);
  });
  it("returns the first matching key for a value callback fn", () => {
    const input = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const callback = x => x.stars > 2;
    const expected = "Akaleri";
    assert.strictEqual(findKey(input, callback), expected);
  });
});