const chai = require('chai');
const { getIndexToIns } = require('../../src/basic_algorithm/where_do_i_belong.js');

const { expect } = chai;

describe('basic algorithm > Where do I Belong', () => {
    it('should return a number abd value of 3, when getIndexToIns([10, 20, 30, 40, 50], 35)', () => {
        const result = getIndexToIns([10, 20, 30, 40, 50], 35);
        expect(result).to.be.a('number');
        expect(result).to.be.eq(3);
    });
    it('should return a number abd value of 2, when getIndexToIns([10, 20, 30, 40, 50], 30)', () => {
        const result = getIndexToIns([10, 20, 30, 40, 50], 30);
        expect(result).to.be.a('number');
        expect(result).to.be.eq(2);
    });
    it('should return a number abd value of 0, when getIndexToIns([3, 10, 5], 3)', () => {
        const result = getIndexToIns([3, 10, 5], 3);
        expect(result).to.be.a('number');
        expect(result).to.be.eq(0);
    });
    it('should return a number abd value of 0, when getIndexToIns([], 1) ', () => {
        const result = getIndexToIns([], 1);
        expect(result).to.be.a('number');
        expect(result).to.be.eq(0);
    });
    it('should return a number abd value of 1, when getIndexToIns([1,2,3,4], 1.5)', () => {
        const result = getIndexToIns([1, 2, 3, 4], 1.5);
        expect(result).to.be.a('number');
        expect(result).to.be.eq(1);
    });
});
