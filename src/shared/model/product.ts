export type Currency = 'eur' | 'usd' | 'rub';
export type CurrencyResponse = 'EUR' | 'USD' | 'RUB';

export const ALL = 'Все';
export const RUB = 'RUB';
export const EUR = 'EUR';
export const USD = 'USD';

export const currencyMinFilters = [RUB, USD, EUR];
export const currencyFilters = [ALL, RUB, USD, EUR];

export const currencySymbol = {
    rub: '₽',
    eur: '€',
    usd: '$'
};

export type ProductStatus = 'active' | 'closed' | 'blocked';
export type ProductStatusResponse = 'ACTIVE' | 'CLOSED' | 'BLOCKED';

export const productStatuses: Record<ProductStatus, string> = {
    active: 'Активный',
    closed: 'Закрытый',
    blocked: 'Заблокированный'
};
