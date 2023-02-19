const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });
  it("returns [[1, 2], 3] for [1, [1, 2], 3]", () => {
    assert.deepEqual(tail([1, [1, 2], 3]), [[1, 2], 3]);
  });
  it("returns undefined if the input array is undefined", () => {
    assert.strictEqual(tail(), undefined);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});