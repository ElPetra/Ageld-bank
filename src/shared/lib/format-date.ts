export const formatDateRuLocale = (str: Date): string => {
    return str.toLocaleString('ru-RU', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });
};

export const formatCardExpirationDate = (str: string): string => {
    const [year, month] = str.split('-');
    return `${month}/${year}`;
};
