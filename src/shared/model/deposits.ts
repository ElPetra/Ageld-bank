import type { Currency, CurrencyResponse } from 'src/shared/model';

export const mockDepositPercentRate = 11;

export const depositTermFilters = [
    '2 месяца',
    '3 месяца',
    '6 месяцев',
    '9 месяцев',
    '1 год',
    '2 года',
    '3 года',
    'Другой срок'
];

export type DepositCapitalization = 0 | 1 | 2 | 3 | 4 | 5;
export type DepositWithdrawal = 0 | 1 | 2 | 3;

export const depositCapitalization: Record<DepositCapitalization, string> = {
    0: 'Без капитализации',
    1: 'Ежедневная',
    2: 'Ежемесячная',
    3: 'Ежеквартальная',
    4: 'Полугодовая',
    5: 'Ежегодная'
};

export const depositWithdrawal: Record<DepositWithdrawal, string> = {
    0: 'Нет данных',
    1: 'Без снятия',
    2: 'До минимальной суммы',
    3: 'Снятие процентов'
};

export interface DepositProduct {
    id: string;
    name: string;
    currency: Currency;
    amountMin: number;
    amountMax: number;
    dayMin: number;
    dayMax: number;
    capitalization: DepositCapitalization;
    replenishment: boolean;
    withdrawal: DepositWithdrawal;
    revocable: boolean;
}

export interface DepositProductResponse {
    id: string;
    name: string;
    currency: CurrencyResponse;
    amountMin: number;
    amountMax: number;
    dayMin: number;
    dayMax: number;
    capitalization: DepositCapitalization;
    replenishment: boolean;
    withdrawal: DepositWithdrawal;
    revocable: boolean;
}

export interface DepositProductDetails {
    id: string;
    name: string;
    currency: Currency;
    dayMin: number;
    dayMax: number;
    amountMin: number;
    amountMax: number;
    timeLimited: boolean;
    capitalization: DepositCapitalization;
    replenishment: boolean;
    withdrawal: DepositWithdrawal;
    revocable: boolean;
    penalty: number;
    percentRate: number;
}

export interface DepositProductDetailsResponse {
    id: string;
    name: string;
    currency: CurrencyResponse;
    dayMin: number;
    dayMax: number;
    amountMin: number;
    amountMax: number;
    timeLimited: boolean;
    capitalization: DepositCapitalization;
    replenishment: boolean;
    withdrawal: DepositWithdrawal;
    revocable: boolean;
    penalty: number;
    percentRate: number;
}

export interface Deposit {
    productId: string;
    name: string;
    currency: Currency;
    balance: number;
    closedAt: string;
    account: string;
    id: number;
}

export interface DepositResponse {
    depositProductId: string;
    productName: string;
    currencyName: CurrencyResponse;
    currentBalance: number;
    closedAt: string;
    depositAccount: string;
    depositId: number;
}

export interface DepositDetails {
    name: string;
    currency: Currency;
    timeLimited: boolean;
    revocable: boolean;
    capitalization: DepositCapitalization;
    withdrawal: DepositWithdrawal;
    status: boolean;
    withAutoProlongation: boolean;
    initialAmount: number;
    balance: number;
    percentBalance: number;
    startDate: string;
    endDate: string;
    isAutoProlongation: boolean;
    percentRate: number;
    mainAccount: string;
    percentAccount?: string;
    mAccountId?: string;
    pAccountId?: string;
}

export interface DepositDetailsResponse {
    name: string;
    currency: CurrencyResponse;
    timeLimited: boolean;
    revocable: boolean;
    capitalization: DepositCapitalization;
    withdrawal: DepositWithdrawal;
    productStatus: boolean;
    autorenStatus: boolean;
    initialAmount: number;
    curBalance: number;
    percBalance: number;
    startDate: string;
    endDate: string;
    autorenewStatus: boolean;
    percentRate: number;
    mainNum: string;
    percNum?: string;
    maccountId?: string;
    paccountId?: string;
}

export interface DepositProfitability {
    id: string;
    name: string;
    currency: Currency;
    percentRate: number;
    sum: number;
    income: number;
}
