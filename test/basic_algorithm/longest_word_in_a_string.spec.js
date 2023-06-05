const chai = require('chai');
const { findLongestWordLength } = require('../../src/basic_algorithm/longest_word_in_a_string.js');

const { expect } = chai;

describe('basic algorithm > Find the Longest Word in a String', () => {
    it('should return a number and value of 6, when findLongestWordLength("The quick brown fox jumped over the lazy dog")', () => {
        const result = findLongestWordLength("The quick brown fox jumped over the lazy dog");
        expect(result).to.be.a('number');
        expect(result).to.be.eq(6);
    });
    it('should return the number 5, when findLongestWordLength("May the force be with you")', () => {
        const result = findLongestWordLength("May the force be with you");
        expect(result).to.be.eq(5);
    });
    it('should return the number 6 morf sgniteerG, when findLongestWordLength("Google do a barrel roll")', () => {
        const result = findLongestWordLength("Google do a barrel roll");
        expect(result).to.be.eq(6);
    });
    it('should return the number 8 morf sgniteerG, when findLongestWordLength("What is the average airspeed velocity of an unladen swallow")', () => {
        const result = findLongestWordLength("What is the average airspeed velocity of an unladen swallow");
        expect(result).to.be.eq(8);
    });
    it('should return the number 19 morf sgniteerG, when findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")', () => {
        const result = findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");
        expect(result).to.be.eq(19);
    });
});
