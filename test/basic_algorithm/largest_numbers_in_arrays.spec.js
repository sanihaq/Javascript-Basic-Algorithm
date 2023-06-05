const chai = require('chai');
const { largestOfFour } = require('../../src/basic_algorithm/largest_numbers_in_arrays.js');

const { expect } = chai;

describe('basic algorithm > Largest Numbers in Arrays', () => {
    it('should return a array and value of [5, 27, 39, 1001], when largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])', () => {
        const result = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
        expect(result).to.be.a('array');
        expect(result).to.be.deep.eq([5, 27, 39, 1001]);
    });
    it('should return [9, 35, 97, 1000000], when largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])', () => {
        const result = largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
        expect(result).to.be.deep.eq([9, 35, 97, 1000000]);
    });
    it('should return [25, 48, 21, -3], when largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])', () => {
        const result = largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
        expect(result).to.be.deep.eq([25, 48, 21, -3]);
    });
});
