export const formatPhoneInputValue = (str: string): string => {
    const newStr =
        str.length > 1
            ? '+7' + str.replaceAll(/\D/gm, '').slice(1, 12)
            : '+7' + str.replace(/\D/gm, '');
    return newStr;
};

export const maskPhoneInputValue = (val: string): string => {
    const valArray = val.split('');
    valArray.length = 12;
    const formated =
        val === ''
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
    return formated;
};
