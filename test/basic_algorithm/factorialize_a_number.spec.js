const chai = require('chai');
const { factorialize } = require('../../src/basic_algorithm/factorialize_a_number.js');

const { expect } = chai;

describe('basic algorithm > Factorialize a Number', () => {
    it('should return a number and value of 120, when factorialize(5)', () => {
        const result = factorialize(5);
        expect(result).to.be.a('number');
        expect(result).to.be.eq(120);
    });
    it('should return 3628800, when factorialize(10)', () => {
        const result = factorialize(10);
        expect(result).to.be.eq(3628800);
    });
    it('should return 2432902008176640000, when factorialize(20)', () => {
        const result = factorialize(20);
        expect(result).to.be.eq(2432902008176640000);
    });
    it('should return 1, when factorialize(0)', () => {
        const result = factorialize(0);
        expect(result).to.be.eq(1);
    });
});
