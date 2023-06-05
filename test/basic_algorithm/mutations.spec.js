const chai = require('chai');
const { mutation } = require('../../src/basic_algorithm/mutations.js');

const { expect } = chai;

describe('basic algorithm > Mutations', () => {
    it('should return false, when mutation(["hello", "hey"])', () => {
        const result = mutation(["hello", "hey"]);
        expect(result).to.be.eq(false);
    });
    it('should return true, when mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])', () => {
        const result = mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
        expect(result).to.be.eq(true);
    });
});
