export const formatDate = (str: string): string => {
    str = str.split(' ')[0];
    const [year, month, day] = str.split('-');
    return `${day}.${month}.${year}`;
};

export const formatExpirationDate = (str: string): string => {
    const [year, month] = str.split('-');
    return `${month}/${year.substring(2, 4)}`;
};
