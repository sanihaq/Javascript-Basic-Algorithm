const chai = require('chai');
const { repeatStringNumTimes } = require('../../src/basic_algorithm/repeat_a_string.js');

const { expect } = chai;

describe('basic algorithm > Repeat a String', () => {
    it('should return a string and a value of ***, when repeatStringNumTimes("*", 3)', () => {
        const result = repeatStringNumTimes("*", 3);
        expect(result).to.be.a('string');
        expect(result).to.be.eq('***');
    });
    it('should return a value of abcabcabc, when repeatStringNumTimes("abc", 3)', () => {
        const result = repeatStringNumTimes("abc", 3);
        expect(result).to.be.eq('abcabcabc');
    });
    it('should return a value of abcabcabcabc, when repeatStringNumTimes("abc", 4)', () => {
        const result = repeatStringNumTimes("abc", 4);
        expect(result).to.be.eq('abcabcabcabc');
    });
    it('should return a value of abc, when repeatStringNumTimes("abc", 1)', () => {
        const result = repeatStringNumTimes("abc", 1);
        expect(result).to.be.eq("abc");
    });
    it('should return a value of "", when repeatStringNumTimes("abc", -2)', () => {
        const result = repeatStringNumTimes("abc", -2);
        expect(result).to.be.eq("");
    });
    it('should return a value of "", when repeatStringNumTimes("abc", 0)', () => {
        const result = repeatStringNumTimes("abc", 0);
        expect(result).to.be.eq("");
    });
});
