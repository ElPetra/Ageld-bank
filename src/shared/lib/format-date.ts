export const formatDate = (str: string): string => {
    str = str.split(' ')[0];
    const [year, month, day] = str.split('-');
    return `${day}.${month}.${year}`;
};

export const getTerm = (start: string, end: string): number => {
    start = start.split(' ')[0];
    end = end.split(' ')[0];
    return (
        (new Date(end).getTime() - new Date(start).getTime()) / 1000 / 3600 / 24
    );
};

export const formatExpirationDate = (str: string): string => {
    const [year, month] = str.split('-');
    return `${month}/${year.substring(2, 4)}`;
};
