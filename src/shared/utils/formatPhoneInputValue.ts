export const formatPhoneInputValue = (str: string): string =>
    '+7' + str.replaceAll(/\D/gm, '').slice(1, 12);
