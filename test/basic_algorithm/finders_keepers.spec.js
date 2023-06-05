const chai = require('chai');
const { findElement } = require('../../src/basic_algorithm/finders_keepers.js');

const { expect } = chai;

describe('basic algorithm > Finders Keepers', () => {
    it('should return 8, when findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })', () => {
        const result = findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; });
        expect(result).to.be.a('number');
        expect(result).to.be.eq(8);
    });
    it('should return undefined, when findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })', () => {
        const result = findElement([1, 3, 5, 9], function (num) { return num % 2 === 0; });
        expect(result).to.be.eq(undefined);
    });
});
