import type { Currency } from 'src/shared/model';

export type CardReceiveType = 'inOffice' | 'delivery';

export const cardBaseUrl =
    import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/card';

export const typeCardName = {
    ALL: 'Все',
    CREDIT: 'Кредитная',
    DEBIT: 'Дебетовая'
} as const;

export type TypeCard = keyof typeof typeCardName;
export type TypeCardName = (typeof typeCardName)[TypeCard];

export const paymentSystemName = {
    ALL: 'Все',
    MIR: 'МИР',
    VISA: 'VISA'
} as const;

export type PaymentSystem = keyof typeof paymentSystemName;
export type PaymentSystemName = (typeof paymentSystemName)[PaymentSystem];

export type CardLevel = 'CLASSIC' | 'GOLD' | 'PLATINUM' | 'PREMIUM';

export interface Card {
    balance: number;
    number: string;
    expirationAt: string;
    name: string;
    level: CardLevel;
    paymentSystem: PaymentSystemName;
    currency: Currency;
}

export interface CardProduct {
    nameProduct: string;
    imageUrl: string;
    cardProductId: string;
    paymentSystem: PaymentSystemName;
    typeCard: TypeCard;
    level: CardLevel;
}
export interface CardProductInfo {
    nameProduct: string;
    image: string;
    paymentSystem: PaymentSystemName;
    typeCard: TypeCard;
    level: CardLevel;
    isVirtual: boolean;
    feeUse: number;
    withdrawLimitDay: number;
    withdrawLimitMonth: number;
    transactionLimitDay: number;
    transactionLimitMonth: number;
    payLimitDay: number;
    payLimitMonth: number;
    overWithdrawDay: number;
    overWithdrawMonth: number;
    overTransactionDay: number;
    overTransactionMonth: number;
    overPayDay: number;
    overPayMonth: number;
    conditionWithdraw: number;
    conditionPartnerWithdraw: number;
    conditionWorldWithdraw: number;
    conditionTransaction: number;
    conditionPay: number;
}

import type { USER_ID, USER_PHONE } from '../api/services/constants';

export const customerBaseUrl =
    import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/customer';

export interface CustomerInfo {
    firstName: string;
    lastName: string;
    middleName: string;
    phoneNumber: string;
    email: string;
    birthDate: string;
    childCount: number;
    registrationDateBank: string;
    status: string;
}

export interface CustomerData {
    [USER_ID]: string;
    [USER_PHONE]: string;
}

export const accountBaseUrl =
    import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/account';

export interface AccountCreationData {
    type: string;
    currencyName: string;
}

export type Status = 'active' | 'closed' | 'requested' | 'blocked';
export type AccountType = 'master' | 'credit' | 'deposit';

export interface Account {
    id: string;
    number: string;
    type: 'credit' | 'deposit' | 'current';
    balance: string;
    status: Status;
    currency: Currency;
    master: boolean;
    created: Date;
    closed?: Date;
    blockReason?: string;
    contractNumber: string;
}

export const ACCOUNT_NUMBER_REPLACEMENT = '**********';

export const CREDIT_ACCOUNT = 'Кредитный счет';
export const DEPOSIT_ACCOUNT = 'Депозитный счет';
export const CURRENT_ACCOUNT = 'Текущий счет';

export const ACTIVE_ACCOUNT = 'Активный';
export const CLOSED_ACCOUNT = 'Закрытый';
export const BLOCKED_ACCOUNT = 'Заблокированный';
export const REQUESTED_ACCOUNT = 'Заявка на открытие счета';

export const CREATE_CURRENT_ACCOUNT_TITLE = 'Откройте счет не выходя из дома';
export const CREATE_CREDIT_ACCOUNT_TITLE = 'Больше денег без лишних вложений';
export const CREATE_DEPOSIT_ACCOUNT_TITLE = 'Сделайте шаг навстречу мечте';

export const accountTypes = {
    credit: CREDIT_ACCOUNT,
    deposit: DEPOSIT_ACCOUNT,
    current: CURRENT_ACCOUNT
};

export const accountStatuses = {
    active: ACTIVE_ACCOUNT,
    closed: CLOSED_ACCOUNT,
    blocked: BLOCKED_ACCOUNT,
    requested: REQUESTED_ACCOUNT
};
