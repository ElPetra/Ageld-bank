import { getIconName, getStatusName } from './card';

describe('getIconName', () => {
    it('returns "visa-icon" for "VISA"', () => {
        expect(getIconName('VISA')).toBe('visa-icon');
    });

    it('returns "mir-icon" for "МИР"', () => {
        expect(getIconName('МИР')).toBe('mir-icon');
    });

    it('returns "visa-icon" as default when the payment type is unknown', () => {
        expect(getIconName('MASTER')).toBe('visa-icon');
    });
});

describe('getStatusName', () => {
    it('returns "Активная" for "ACTIVE"', () => {
        expect(getStatusName('ACTIVE')).toBe('Активная');
    });

    it('returns "Заблокированная" for "BLOCKED"', () => {
        expect(getStatusName('BLOCKED')).toBe('Заблокированная');
    });

    it('returns "Неизвестный статус" as default when the status is unknown', () => {
        expect(getStatusName(null)).toBe('Неизвестный статус');
    });

    it('returns "Неизвестный статус" as default when the status is an unrecognized string', () => {
        expect(getStatusName('INACTIVE')).toBe('Неизвестный статус');
    });
});
