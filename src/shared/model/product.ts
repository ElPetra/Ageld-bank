export const currencySymbol = {
    rub: '₽',
    usd: '$',
    eur: '€'
};

export type Currency = keyof typeof currencySymbol;
