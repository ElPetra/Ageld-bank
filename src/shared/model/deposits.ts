import i18n from 'src/shared/model/i18n';

import type { Currency, CurrencyResponse } from 'src/shared/model';

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
    1: 'Без возможности снятия средств',
    2: 'До минимальной суммы',
    3: 'В пределах начисленных процентов'
};

export interface DepositProduct {
    id: number;
    name: string;
    currency: Currency;
    dayMin: number;
    dayMax: number;
    amountMin: number;
    amountMax: number;
    capitalization: 0 | 1 | 2 | 3 | 4 | 5;
    replenishment: boolean;
    withdrawal: 1 | 2 | 3;
    revocable: boolean;
    percentRate: number;
}

export interface CustomerDeposit {
    productId?: string;
    name: string;
    currency: Currency;
    balance?: number;
    closedAt?: string;
    number?: string;
    id: number;
    typeCapitalization?: boolean;
    limitAmountMin?: 0.0;
    limitMonthsMin?: 1;
    typeRevocable?: false;
    depositProductStatus?: true;
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
    id: number;
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
        name: 'A-Geld бессрочный',
        balance: 1000,
        number: '1234567891017780',
        productId: '1234567'
    },
    {
        id: 1234567,
        currency: 'eur',
        closedAt: '15.10.2025',
        name: 'A-Geld бессрочный',
        balance: 1000,
        number: '1234567891017781',
        productId: '1234567'
    },
    {
        id: 12345678,
        currency: 'usd',
        closedAt: '15.10.2025',
        name: 'A-Geld бессрочный',
        balance: 1000,
        number: '1234567891017782',
        productId: '1234567'
    }
];
export type DepositsResponse = {
    id: number,
    productName: string,
    currencyName: CurrencyResponse,
    typeCapitalization: boolean,
    limitAmountMin: number,
    limitMonthsMin: number,
    typeRevocable: false,
    depositProductStatus: boolean
};
