export type Currency = 'eur' | 'usd' | 'rub';

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

export type ProductStatus =
    | 'active'
    | 'closed'
    | 'blocked'
    | 'autoprolongation'
    | 'autoprolongationoff';

export const ACTIVE_PRODUCT = 'Активный';
export const CLOSED_PRODUCT = 'Закрытый';
export const BLOCKED_PRODUCT = 'Заблокированный';
export const MASTER_PRODUCT = 'Основной';
export const CAPITALIZING_PRODUCT = 'Капитализация';
export const AUTOPROLONGATION = 'Автопролонгация';
export const NO_AUTOPROLONGATION = 'Автопролонгация отключена';
export const productStatuses: Record<ProductStatus, string> = {
    active: ACTIVE_PRODUCT,
    closed: CLOSED_PRODUCT,
    blocked: BLOCKED_PRODUCT,
    autoprolongation: AUTOPROLONGATION,
    autoprolongationoff: NO_AUTOPROLONGATION
};
