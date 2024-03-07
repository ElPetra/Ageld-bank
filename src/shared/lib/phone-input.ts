export const formatPhoneInputValue = (str: string): string =>
    '+7' + str.replaceAll(/\D/gm, '').slice(1, 12);

export const maskPhoneInputValue = (val: string): string => {
    const valArray = val.split('');
    valArray.length = 12;
    return val === ''
        ? val
        : valArray
              .fill('_', val.length)
              .map((n, i) => {
                  switch (i) {
                      case 2:
                          return '(' + n;
                      case 5:
                          return ')' + n;
                      case 8:
                          return '-' + n;
                      case 10:
                          return '-' + n;
                      default:
                          return n;
                  }
              })
              .join('');
};
