const chai = require('chai');
const { chunkArrayInGroups } = require('../../src/basic_algorithm/chunky_monkey.js');

const { expect } = chai;

describe('basic algorithm > Chunky Monkey', () => {
    it('should return [["a", "b"], ["c", "d"]], when chunkArrayInGroups(["a", "b", "c", "d"], 2)', () => {
        const result = chunkArrayInGroups(["a", "b", "c", "d"], 2);
        expect(result).to.be.deep.eq([["a", "b"], ["c", "d"]]);
    });
    it('should return [[0, 1, 2], [3, 4, 5]], when chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)', () => {
        const result = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
        expect(result).to.be.deep.eq([[0, 1, 2], [3, 4, 5]]);
    });
    it('should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]], when chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)', () => {
        const result = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
        expect(result).to.be.deep.eq([[0, 1], [2, 3], [4, 5], [6, 7], [8]]);
    });
});
