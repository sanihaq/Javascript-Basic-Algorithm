const chai = require('chai');
const { titleCase } = require('../../src/basic_algorithm/case_a_sentence.js');

const { expect } = chai;

describe('basic algorithm > Case a Sentence', () => {
    it('should return a string with value of I\'m A Little Tea Pot, when titleCase("I\'m a little tea pot")', () => {
        const result = titleCase("I'm a little tea pot");
        expect(result).to.be.a('string');
        expect(result).to.be.eq("I'm A Little Tea Pot");
    });
    it('should return Short And Stout, when titleCase("sHoRt AnD sToUt")', () => {
        const result = titleCase("sHoRt AnD sToUt");
        expect(result).to.be.eq('Short And Stout');
    });
    it('should return Here Is My Handle Here Is My Spout, when titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")', () => {
        const result = titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
        expect(result).to.be.eq('Here Is My Handle Here Is My Spout');
    });
});
