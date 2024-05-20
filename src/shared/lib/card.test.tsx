import { getIconName, getStatusName } from './card';

describe('getIconName', () => {
    it('returns "visa-icon" for "VISA"', () => {
        expect(getIconName('VISA')).toBe('visa-icon');
    });

    it('returns "mir-icon" for "МИР"', () => {
        expect(getIconName('МИР')).toBe('mir-icon');
    });
});

describe('getStatusName', () => {
    it('returns "Активная" for "active"', () => {
        expect(getStatusName('active')).toBe('Активная');
    });

    it('returns "Заблокированная" for "blocked"', () => {
        expect(getStatusName('blocked')).toBe('Заблокированная');
    });

    it('returns "Закрытая" for "closed"', () => {
        expect(getStatusName('closed')).toBe('Закрытая');
    });
});
