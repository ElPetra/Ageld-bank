import { getIconName } from './card';

describe('getIconName', () => {
    it('returns "visa-icon" for "VISA"', () => {
        expect(getIconName('VISA')).toBe('visa-icon');
    });

    it('returns "mir-icon" for "МИР"', () => {
        expect(getIconName('МИР')).toBe('mir-icon');
    });
});
