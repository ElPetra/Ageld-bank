import i18n from 'src/shared/model/i18n';

import type { Currency } from 'src/shared/model';

export const mockDepositPercentRate = 11;

export const depositTermFilters = [
    i18n.t('2 месяца'),
    i18n.t('3 месяца'),
    i18n.t('6 месяцев'),
    i18n.t('9 месяцев'),
    i18n.t('1 год'),
    i18n.t('2 года'),
    i18n.t('3 года'),
    i18n.t('Другой срок')
];

export const depositCapitalization: Record<0 | 1 | 2 | 3 | 4 | 5, string> = {
    0: 'Без капитализации',
    1: 'Ежедневная',
    2: 'Ежемесячная',
    3: 'Ежеквартальная',
    4: 'Полугодовая',
    5: 'Ежегодная'
};

export const depositWithdrawal: Record<1 | 2 | 3, string> = {
    1: i18n.t('Без возможности снятия средств'),
    2: i18n.t('До минимальной суммы'),
    3: i18n.t('В пределах начисленных процентов')
};

export interface DepositProduct {
    id: string;
    name: string;
    currency: Currency;
    amountMin: number;
    amountMax: number;
    dayMin: number;
    dayMax: number;
    capitalization: 0 | 1 | 2 | 3 | 4 | 5;
    replenishment: boolean;
    withdrawal: 1 | 2 | 3;
    revocable: boolean;
}

export interface DepositProductResponse {
    id: string;
    name: string;
    currency: 'EUR' | 'USD' | 'RUB';
    amountMin: number;
    amountMax: number;
    dayMin: number;
    dayMax: number;
    capitalization: 0 | 1 | 2 | 3 | 4 | 5;
    replenishment: boolean;
    withdrawal: 1 | 2 | 3;
    revocable: boolean;
}

export interface DepositProductDetails {
    id: string;
    name: string;
    currency: Currency;
    monthsMin: number;
    monthsMax: number;
    amountMin: number;
    amountMax: number;
    capitalization: boolean;
    replenishment: boolean;
    withdrawal: 1 | 2 | 3;
    revocable: boolean;
    percentRate: number;
}

export interface CustomerDeposit {
    productId: string;
    name: string;
    currency: Currency;
    balance: number;
    closedAt: string;
    number: string;
    id: number;
}

export interface CustomerDepositDetails {
    name: string;
    currency: Currency;
    timeLimited: boolean;
    revocable: boolean;
    capitalization: 0 | 1 | 2 | 3 | 4 | 5;
    withdrawal: 1 | 2 | 3;
    productStatus: boolean;
    autorenStatus: boolean;
    initialAmount: number;
    balance: number;
    percentBalance: number;
    startDate: string;
    endDate: string;
    autorenewStatus: boolean;
    percentRate: number;
    mainNum: string;
    mAccountId?: string;
    pAccountId?: string;
}

export interface DepositProfitability {
    id: string;
    name: string;
    currency: Currency;
    percentRate: number;
    sum: number;
    income: number;
}

export const mockDeposits: CustomerDeposit[] = [
    {
        id: 123456,
        currency: 'rub',
        closedAt: '15.10.2025',
        name: i18n.t('бессрочный'),
        balance: 1000,
        number: '1234567891017780',
        productId: '1234567'
    },
    {
        id: 1234567,
        currency: 'eur',
        closedAt: '15.10.2025',
        name: i18n.t('бессрочный'),
        balance: 1000,
        number: '1234567891017781',
        productId: '1234567'
    },
    {
        id: 12345678,
        currency: 'usd',
        closedAt: '15.10.2025',
        name: i18n.t('бессрочный'),
        balance: 1000,
        number: '1234567891017782',
        productId: '1234567'
    }
];
