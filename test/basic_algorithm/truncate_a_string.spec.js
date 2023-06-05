const chai = require('chai');
const { truncateString } = require('../../src/basic_algorithm/truncate_a_string.js');

const { expect } = chai;

describe('basic algorithm > Truncate a String', () => {
    it('should return a string and a value of A-tisket..., when truncateString("A-tisket a-tasket A green and yellow basket", 8)', () => {
        const result = truncateString("A-tisket a-tasket A green and yellow basket", 8);
        expect(result).to.be.a('string');
        expect(result).to.be.eq('A-tisket...');
    });
    it('should return a value of Peter Piper..., when truncateString("Peter Piper picked a peck of pickled peppers", 11)', () => {
        const result = truncateString("Peter Piper picked a peck of pickled peppers", 11);
        expect(result).to.be.eq('Peter Piper...');
    });
    it('should return a value of A-tisket a-tasket A green and yellow basket, when truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)', () => {
        const result = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
        expect(result).to.be.eq('A-tisket a-tasket A green and yellow basket');
    });
    it('should return a value of A-tisket a-tasket A green and yellow basket, when truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)', () => {
        const result = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
        expect(result).to.be.eq("A-tisket a-tasket A green and yellow basket");
    });
    it('should return a value of A..., when truncateString("A-", 1)', () => {
        const result = truncateString("A-", 1);
        expect(result).to.be.eq("A...");
    });
    it('should return a value of Ab..., when truncateString("Absolutely Longer", 2)', () => {
        const result = truncateString("Absolutely Longer", 2);
        expect(result).to.be.eq("Ab...");
    });
});
