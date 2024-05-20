import { formatExpirationDate, formatDate } from './format-date';

describe('formatDate', () => {
    it('converts YYYY-MM-DD to DD.MM.YYYY format', () => {
        expect(formatDate('2024-03-01')).toBe('01.03.2024');
    });
});
describe('formatExpirationDate', () => {
    it('converts YYYY-MM to MM/YY format', () => {
        expect(formatExpirationDate('2024-03')).toBe('03/24');
        expect(formatExpirationDate('2024-12')).toBe('12/24');
    });

    it('handles single-digit months correctly by padding them', () => {
        expect(formatExpirationDate('2024-09')).toBe('09/24');
    });
});
