const chai = require('chai');
const { reverseString } = require('../../src/basic_algorithm/reverse_a_string.js');

const { expect } = chai;

describe('basic algorithm > Reverse a String', () => {
    it('should return a string and value of olleh, when reverseString("hello")', () => {
        const result = reverseString("hello");
        expect(result).to.be.a('string');
        expect(result).to.be.eq('olleh');
    });
    it('should return the string ydwoH, when reverseString("Howdy")', () => {
        const result = reverseString("Howdy");
        expect(result).to.be.eq('ydwoH');
    });
    it('should return the string htraE morf sgniteerG, when reverseString("Greetings from Earth")', () => {
        const result = reverseString("Greetings from Earth");
        expect(result).to.be.eq('htraE morf sgniteerG');
    });
});
