import { getIconName } from './card';

describe('getIconName', () => {
    it('returns "visa" for "VISA"', () => {
        expect(getIconName('VISA')).toBe('visa');
    });

    it('returns "mir" for "МИР"', () => {
        expect(getIconName('МИР')).toBe('mir');
    });
});
