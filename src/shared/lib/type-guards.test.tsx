import { isObj } from './type-guards';

describe('isObj', () => {
    it('should return true for plain objects', () => {
        expect(isObj({})).toBe(true);
        expect(isObj({ key: 'value' })).toBe(true);
    });

    it('should return false for arrays', () => {
        expect(isObj([])).toBe(false);
        expect(isObj([1, 2, 3])).toBe(false);
    });

    it('should return false for null', () => {
        expect(isObj(null)).toBe(false);
    });

    it('should return false for strings', () => {
        expect(isObj('string')).toBe(false);
        expect(isObj('')).toBe(false);
    });

    it('should return false for numbers', () => {
        expect(isObj(123)).toBe(false);
        expect(isObj(0)).toBe(false);
        expect(isObj(NaN)).toBe(false);
    });

    it('should return false for booleans', () => {
        expect(isObj(true)).toBe(false);
        expect(isObj(false)).toBe(false);
    });

    it('should return false for functions', () => {
        expect(isObj(() => {})).toBe(false);
        expect(isObj(function () {})).toBe(false);
    });

    it('should return false for undefined', () => {
        expect(isObj(undefined)).toBe(false);
    });

    it('should return true for instances of classes', () => {
        class MyClass {}
        expect(isObj(new MyClass())).toBe(true);
    });

    it('should return true for objects created with Object.create(null)', () => {
        expect(isObj(Object.create(null))).toBe(true);
    });
});
