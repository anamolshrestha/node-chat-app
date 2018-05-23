const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString',()=>{
    it('should reject non-String values',()=>{
        const res = isRealString(98);
        expect(res).toBe(false);
    });

    it('should reject string with only spaces',()=>{
        const res = isRealString('    ');
        expect(res).toBe(false);
    });

    it('should allow string with non-space characters',()=>{
        const res = isRealString('  test  ');
        expect(res).toBe(true);
    });
});