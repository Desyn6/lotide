const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {
  it("returns ['I', 'have'] for ['I', 'have', 'cheese'] and callback (x => x === 'cheese')", () => {
    const input = ['I', 'have', 'cheese'];
    const expected = ['I', 'have'];
    assert.deepEqual(takeUntil(input, x => x === 'cheese'), expected);
  });
  it("returns the original array if no callback function is declared", () => {
    const input = [1, 2, 3];
    const expected = [1, 2, 3];
    assert.deepEqual(takeUntil(input), expected);
  });
  it("returns undefined if input array is not an array", () => {
    assert.strictEqual(takeUntil(1, x => x === 1), undefined);
  });
  it("returns [1, 2] for [1, 2, 3, 4] and x => x === 3", () => {
    const input = [1, 2, 3, 4];
    const expected = [1, 2];
    assert.deepEqual(takeUntil(input, x => x === 3), expected);
  });
});


// // test function
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// const results3 = takeUntil(data1, x => x === 4);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results1, [1, 2, 5, 7, 2]);
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
// assertArraysEqual(results3, [1, 2, 5, 7, 2, -1, 2]);