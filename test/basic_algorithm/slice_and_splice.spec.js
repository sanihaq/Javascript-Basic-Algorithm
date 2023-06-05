const chai = require('chai');
const { frankenSplice } = require('../../src/basic_algorithm/slice_and_splice.js');

const { expect } = chai;

describe('basic algorithm > Slice and Splice', () => {
    it('should return [4, 1, 2, 3, 5], when frankenSplice([1, 2, 3], [4, 5], 1)', () => {
        const result = frankenSplice([1, 2, 3], [4, 5], 1);
        expect(result).to.be.deep.eq([4, 1, 2, 3, 5]);
    });
    it('should return ["a", 1, 2, "b"], when frankenSplice([1, 2], ["a", "b"], 1)', () => {
        const result = frankenSplice([1, 2], ["a", "b"], 1);
        expect(result).to.be.deep.eq(["a", 1, 2, "b"]);
    });
});

// frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
// frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
// frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
// All elements from the first array should be added to the second array in their original order. frankenSplice([1, 2, 3, 4], [], 0) should return [1, 2, 3, 4].
// The first array should remain the same after the function runs.
// The second array should remain the same after the function runs.
