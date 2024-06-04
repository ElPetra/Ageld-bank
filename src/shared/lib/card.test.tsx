import { getIconName } from './card';

describe('getIconName', () => {
    it('returns "visa-icon" for "VISA"', () => {
        expect(getIconName('VISA')).toBe('visa');
    });

    it('returns "mir-icon" for "МИР"', () => {
        expect(getIconName('МИР')).toBe('mir');
    });
});
