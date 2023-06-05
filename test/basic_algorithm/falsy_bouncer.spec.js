const chai = require('chai');
const { bouncer } = require('../../src/basic_algorithm/falsy_bouncer.js');

const { expect } = chai;

describe('basic algorithm > Falsy Bouncer', () => {
    it('should return [7, "ate", 9] and input arr isn\'t mutated, when bouncer([7, "ate", "", false, 9])', () => {
        let originalArr = [7, "ate", "", false, 9];
        let arr = [...originalArr]
        const result = bouncer(arr);
        expect(result).to.be.deep.eq([7, "ate", 9]);
        expect(arr).to.deep.equal(originalArr);
    });
    it('should return ["a", "b", "c"], when bouncer(["a", "b", "c"])', () => {
        const result = bouncer(["a", "b", "c"]);
        expect(result).to.be.deep.eq(["a", "b", "c"]);
    });
    it('should return [], when bouncer([false, null, 0, NaN, undefined, ""])', () => {
        const result = bouncer([false, null, 0, NaN, undefined, ""]);
        expect(result).to.be.deep.eq([]);
    });
});
