const chai = require('chai');
const { confirmEnding } = require('../../src/basic_algorithm/confirm_the_ending.js');

const { expect } = chai;

describe('basic algorithm > Confirm the Ending', () => {
    it('should return a boolean and value of true, when confirmEnding("Bastian", "n")', () => {
        const result = confirmEnding("Bastian", "n");
        expect(result).to.be.a('boolean');
        expect(result).to.be.eq(true);
    });
    it('should return true, when confirmEnding("Congratulation", "on")', () => {
        const result = confirmEnding("Congratulation", "on");
        expect(result).to.be.eq(true);
    });
    it('should return false, when confirmEnding(Connor", "n")', () => {
        const result = confirmEnding("Connor", "n");
        expect(result).to.be.eq(false);
    });
    it('should return false, when confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")', () => {
        const result = confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
        expect(result).to.be.eq(false);
    });

    it('should return true, when confirmEnding("He has to give me a new name", "name")', () => {
        const result = confirmEnding("He has to give me a new name", "name");
        expect(result).to.be.eq(true);
    });
});
