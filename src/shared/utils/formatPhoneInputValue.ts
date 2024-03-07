export const formatPhoneInputValue = (str: string): string => {
    const newStr =
        str.length > 1
            ? '+7' + str.replaceAll(/\D/gm, '').slice(1, 12)
            : '+7' + str.replace(/\D/gm, '');
    return newStr;
};
