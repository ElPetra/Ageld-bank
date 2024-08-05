export type Currency = 'eur' | 'usd' | 'rub';
export type CurrencyResponse = 'EUR' | 'USD' | 'RUB';

export const ALL_CURRENCY = 'Все';
export const RUB = 'RUB';
export const EUR = 'EUR';
export const USD = 'USD';

export const currencyMinFilters = [RUB, USD, EUR];
export const currencyFilters = [ALL_CURRENCY, RUB, USD, EUR];

export const currencySymbol = {
    rub: '₽',
    eur: '€',
    usd: '$'
};

export type ProductStatus = 'active' | 'closed' | 'blocked';

export const productStatuses: Record<ProductStatus, string> = {
    active: 'Активный',
    closed: 'Закрытый',
    blocked: 'Заблокированный'
};
