export const formatDate = (str: string): string => {
    str = str.split(' ')[0];
    const [year, month, day] = str.split('-');
    return `${day}.${month}.${year}`;
};

export const getTerm = (start: string, end: string): number => {
    start = start.split(' ')[0];
    end = end.split(' ')[0];
    const result =
        (new Date(end).getTime() - new Date(start).getTime()) /
        1000 /
        3600 /
        24 /
        30;
    return result ? result : 1;
};

export const formatExpirationDate = (str: string): string => {
    const [year, month] = str.split('-');
    return `${month}/${year.substring(2, 4)}`;
};

export const getGenitiveMonth = (num: number): string => {
    if (num % 10 === 1 && num !== 11) {
        return 'месяца';
    } else {
        return 'месяцев';
    }
};
