import i18next from 'i18next';

export type Currency = 'eur' | 'usd' | 'rub';

export const ALL_CURRENCY = i18next.t('Все');
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

export const ACTIVE_PRODUCT = i18next.t('Активный');
export const CLOSED_PRODUCT = i18next.t('Закрытый');
export const BLOCKED_PRODUCT = i18next.t('Заблокированный');
export const MASTER_PRODUCT = i18next.t('Основной');
export const CAPITALIZING_PRODUCT = i18next.t('Капитализация');
export const AUTOPROLONGATION = i18next.t('Автопролонгация');
export const NO_AUTOPROLONGATION = i18next.t('Автопролонгация отключена');
export const productStatuses: Record<ProductStatus, string> = {
    active: ACTIVE_PRODUCT,
    closed: CLOSED_PRODUCT,
    blocked: BLOCKED_PRODUCT,
    autoprolongation: AUTOPROLONGATION,
    autoprolongationoff: NO_AUTOPROLONGATION
};
