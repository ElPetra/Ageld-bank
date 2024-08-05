import { getIconName } from './card';

describe('getIconName', () => {
    it('returns "visa" for "VISA"', () => {
        expect(getIconName('Visa')).toBe('visa');
    });

    it('returns "mir" for "MIR"', () => {
        expect(getIconName('MIR')).toBe('mir');
    });

    it('returns "master card" for "MasterCard"', () => {
        expect(getIconName('MasterCard')).toBe('master card');
    });
});
