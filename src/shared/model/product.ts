export const ALL_CURRENCY = 'Все';
export const RUB = 'RUB';
export const EUR = 'EUR';
export const USD = 'USD';

export const currencyFilters = [ALL_CURRENCY, RUB, USD, EUR];

export const currencySymbol = {
    rub: '₽',
    eur: '€',
    usd: '$'
};

export type Currency = keyof typeof currencySymbol;

interface CurrencyVariant {
    value: Currency;
    text: string;
}

export const currency: CurrencyVariant[] = [
    {
        value: 'rub',
        text: RUB
    },
    {
        value: 'eur',
        text: EUR
    },
    {
        value: 'usd',
        text: USD
    }
];
