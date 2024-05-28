import i18n from 'src/shared/model/i18n';

export type Currency = 'eur' | 'usd' | 'rub';

export const ALL_CURRENCY = i18n.t('Все');
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

export const ACTIVE_PRODUCT = i18n.t('Активный');
export const CLOSED_PRODUCT = i18n.t('Закрытый');
export const BLOCKED_PRODUCT = i18n.t('Заблокированный');
export const MASTER_PRODUCT = i18n.t('Основной');
export const AUTOPROLONGATION = i18n.t('Автопролонгация');
export const NO_AUTOPROLONGATION = i18n.t('Автопролонгация отключена');
export const REQUISITES = i18n.t('Реквизиты');

export const productStatuses: Record<ProductStatus, string> = {
    active: ACTIVE_PRODUCT,
    closed: CLOSED_PRODUCT,
    blocked: BLOCKED_PRODUCT,
    autoprolongation: AUTOPROLONGATION,
    autoprolongationoff: NO_AUTOPROLONGATION
};
