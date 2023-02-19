const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("counts all items in an array if marked for counting in a to-count object", () => {
    const inputArr = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const toCount = {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false
    };
    const expected = {
      Jason: 1,
      Fang: 2,
      Karima: 0
    };
    assert.deepEqual(countOnly(inputArr, toCount), expected);
  });
  it("returns undefined for items marked false for counting", () => {
    const inputArr = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const toCount = {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false
    };
    assert.strictEqual(countOnly(inputArr, toCount)["Agouhanna"], undefined);
  });
});
