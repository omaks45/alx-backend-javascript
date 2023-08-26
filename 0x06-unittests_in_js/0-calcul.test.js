const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

describe('calculateNumber', () => {
    it('rounding of a', () => {
        assert.equal(calculateNumber(1.78, 3), 5);
        assert.equal(calculateNumber(15.2, 0), 15);
        assert.equal(calculateNumber(9.5, 7), 17);
    });

    it('rounding of b', () => {
        assert.equal(calculateNumber(9, 15.78), 25);
        assert.equal(calculateNumber(13, 1.2), 14);
        assert.equal(calculateNumber(2, 5.9), 8);
    });

    it('suming of a and b', () => {
        assert.equal(calculateNumber(5.47, 22.45), 27);
        assert.equal(calculateNumber(5.2, 7.2), 12);
        assert.equal(calculateNumber(5.6, 8.7), 15);
    });
})
