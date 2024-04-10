export const formatDateRuLocale = (str: Date): string => {
    return str.toLocaleString('ru-RU', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });
};
