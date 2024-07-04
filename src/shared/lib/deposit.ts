export const convertToDays = (term: string): number | false => {
    const monthRegex = /(\d+)\sмесяц/;
    const yearRegex = /(\d+)\sгод/;
    let days = 0;
    const monthMatch = term.match(monthRegex);
    const yearMatch = term.match(yearRegex);
    if (monthMatch) {
        const months = parseInt(monthMatch[1], 10);
        days = months * 30;
    } else if (yearMatch) {
        const years = parseInt(yearMatch[1], 10);
        days = years * 365;
    } else if (term === 'Другой срок') {
        return false;
    }

    return days;
};

const isLeapYear = (year: number): boolean =>
    year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

export const calculateDaysInYear = (year: number): number =>
    isLeapYear(year) ? 366 : 365;

export const calculateProfit = (
    sumDeposit: number,
    percentRate: number,
    resultTerm: number,
    daysInYear: number
): number => (sumDeposit * percentRate * (resultTerm / daysInYear)) / 100;

export function floorDecimals(num: number) {
    return (Math.floor(num * 100) / 100).toFixed(2);
}
