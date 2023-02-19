# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @desyn6/lotide`

**Require it:**

`const _ = require('@desyn6/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Compares two arrays and console logs pass if the arrays are idential, and false otherwise. This function supports nested arrays.
* `assertEqual`: Compares two primitives, returns true if same, returns false otherwise.
* `assertObjectsEqual`: Compares two objects and console logs pass if the objects are idential, and false otherwise. This function supports nested objects.
* `countLetters`: Accepts a single string and returns an object with letters as keys (in order of appearance) and the letter count as values.
* `countOnly`: Accepts (1) an array of primitives to items to be counted and (2) an object with keynames matching items to be counted and a true/false value. (e.g., (1) `["orange", "apple", "orange", "pear"]`, and (2) `{orange: true, apple: false}`)
* `findKeys`: Accepts an object and a callback function. Returns the first key which matches the criteria of the callback function. (e.g., `findKeys({a: 1, b: 2, c: 3, d: 4}, x => x > 2)` returns `c`).
* `findKeyByValue`: Accepts an object and a primitive query. `findKeyByValues` returns the key corresponding to the query. The primitive query must be a perfect match and is case sensitive.
* `flatten`: Accepts an array with nested arrays and reduce a shallow copy with nesting reduced by one level. (e.g., `[1, [1, [2]]]` becomes `[1, 1, [2]]`);
* `head`: Returns either the first character of a string, or the first element of an array. This function does not mutate the input array.
* `letterPositions`: Accepts a string and returns an object with letters as keys (in order of occurrence) whose values are arrays of the indices at which the letter occurs. Spaces are ignored.
* `map`: Accepts unnested arrays of primitives and a callback function. This function returns a shallow copy of the input array with the callback function applied to each element. 
* `middle`: Accepts an array and returns an array containing the value at the middle index for input arrays of odd length (e.g., the value at index 1 for an array containing 3 elements), and the two values at the middle indices for input arrays of even length (e.g., values at indices 1 and 2 for an array containing 4 elements).
* `tail`: Accepts an array and returns a shallow copy with the first element removed (i.e., values at index i = 1 to end).
* `takeUntil`: Accepts an array and a callback function. `takeUntil` will return a shallow copy of the input array up to, but excluding the element for which the callback function returns true.
* `without`: Accepts (1) an input array from which values are to be excluded, and (2) an array of values to be excluded from (1). This function does not mutate input array (1) nor (2).