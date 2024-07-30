export const formatDate = (str: string): string => {
    str = str.split(' ')[0];
    const [year, month, day] = str.split('-');
    return `${day}.${month}.${year}`;
};

export const getTerm = (start: string, end: string): number => {
    start = start.split(' ')[0];
    end = end.split(' ')[0];
    const [startYear, startMonth, startDay] = start.split('-');
    const [endYear, endMonth, endDay] = end.split('-');
    return (
        +endDay -
        +startDay +
        (+endMonth - +startMonth) * 30 +
        (+endYear - +startYear) * 365
    );
};

export const formatExpirationDate = (str: string): string => {
    const [year, month] = str.split('-');
    return `${month}/${year.substring(2, 4)}`;
};
