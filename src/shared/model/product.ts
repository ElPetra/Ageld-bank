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

export const REQUISITES = i18n.t('Реквизиты');

export const productStatuses: Record<ProductStatus, string> = {
    active: i18n.t('Активный'),
    closed: i18n.t('Закрытый'),
    blocked: i18n.t('Заблокированный'),
    autoprolongation: i18n.t('Автопролонгация'),
    autoprolongationoff: i18n.t('Автопролонгация отключена')
};
