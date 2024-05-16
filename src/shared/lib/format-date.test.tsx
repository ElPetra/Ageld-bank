import { formatCardExpirationDate, formatDateRuLocale } from './format-date';

describe('formatDateRuLocale', () => {
    it('formats the date correctly in Russian locale', () => {
        const date = new Date('2024-03-01');
        const formatted = formatDateRuLocale(date);
        expect(formatted).toBe('01.03.2024');
    });
});
describe('formatCardExpirationDate', () => {
    it('converts YYYY-MM to MM/YYYY format', () => {
        expect(formatCardExpirationDate('2024-03')).toBe('03/2024');
        expect(formatCardExpirationDate('2024-12')).toBe('12/2024');
    });

    it('handles single-digit months correctly by padding them', () => {
        expect(formatCardExpirationDate('2024-09')).toBe('09/2024');
    });
});
