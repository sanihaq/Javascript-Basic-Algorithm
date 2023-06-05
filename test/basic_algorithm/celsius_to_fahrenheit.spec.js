const chai = require('chai');
const { convertCtoF } = require('../../src/basic_algorithm/celsius_to_fahrenheit.js');

const { expect } = chai;

describe('basic algorithm > celsius to fahrenheit', () => {
    it('should return a number and a value of 32, when convertCtoF(0)', () => {
        const result = convertCtoF(0);
        expect(result).to.be.a('number');
        expect(result).to.be.eq(32);
    });
    it('should return a value of -22, when convertCtoF(-30)', () => {
        const result = convertCtoF(-30);
        expect(result).to.be.eq(-22);
    });
    it('should return a value of 14, when convertCtoF(-10)', () => {
        const result = convertCtoF(-10);
        expect(result).to.be.eq(14);
    });
    it('should return a value of 68, when convertCtoF(20)', () => {
        const result = convertCtoF(20);
        expect(result).to.be.eq(68);
    });
    it('should return a value of 86, when convertCtoF(30)', () => {
        const result = convertCtoF(30);
        expect(result).to.be.eq(86);
    });
});
