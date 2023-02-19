const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true for identical un-nested objects", () => {
    const input = {a: 1, b: 2, c: 3};
    assert.strictEqual(eqObjects(input, input), true);
  });
  it("returns false for different un-nested objects", () => {
    const inputOne = {a: 1, b: 2, c: 3};
    const inputTwo = {a: 1, b: 2, c: 5};
    assert.strictEqual(eqObjects(inputOne, inputTwo), false);
  });
  it("returns true for identical nested objects", () => {
    const input = {a: 1, b: {c:2, d:3}, e: 5, f: {g:1, h: {i: 2}}};
    assert.strictEqual(eqObjects(input, input), true);
  });
  it("returns false for different nested objects", () => {
    const inputOne = {a: 1, b: {c:2, d:3}, e: 5, f: {g:1, h: {j: 2}}};
    const inputTwo = {a: 1, b: {c:2, d:3}, e: 5, f: {g:1, h: {i: 2}}};
    assert.strictEqual(eqObjects(inputOne, inputTwo), false);
  });
  it("returns true for identical objects with nested arrays", () => {
    const input = {a: 1, b: [5, 6], c: [7, 6, 4]};
    assert.strictEqual(eqObjects(input, input), true);
  });
});