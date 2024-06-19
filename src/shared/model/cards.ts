import i18n from 'src/shared/model/i18n';

import type { ProductStatus } from 'src/shared/model';

type CardStatusResponse = 'ACTIVE' | 'CLOSED' | 'BLOCKED';

export type CardType = 'CREDIT' | 'DEBIT' | 'DEPOSIT';
export type CardLevel = 'CLASSIC' | 'GOLD' | 'PLATINUM' | 'PREMIUM';
export type PaymentSystem = 'МИР' | 'VISA';

export const CARD_NUMBER_REPLACEMENT = '**** **** **** ';
export const ALL = i18n.t('Bce');
export const CREDIT_CARD = i18n.t('Кредитная');
export const DEBIT_CARD = i18n.t('Дебетовая');
export const DEPOSIT_CARD = i18n.t('Депозитная');
export const MIR_CARD = i18n.t('МИР');
export const VISA_CARD = 'VISA';

export const typeCard: Record<CardType, string> = {
    CREDIT: CREDIT_CARD,
    DEBIT: DEBIT_CARD,
    DEPOSIT: DEPOSIT_CARD
};

export const typeCardFilters = [ALL, CREDIT_CARD, DEBIT_CARD, DEPOSIT_CARD];
export const paymentSystemFilters = [ALL, MIR_CARD, VISA_CARD];

export interface CustomerCard {
    id: string;
    number: string;
    expirationAt: string;
    image: string;
    level: CardLevel;
    name: string;
    paymentSystem: PaymentSystem;
    status: ProductStatus;
    type: CardType;
}

export interface CustomerCardResponse {
    cardId: string;
    accountNumber: string;
    expirationAt: string;
    image: string;
    level: CardLevel;
    nameProduct: string;
    paymentSystem: PaymentSystem;
    statusName: CardStatusResponse;
    typeCard: CardType;
}

export interface CardDetails {
    number: string;
    balance: number;
    status: ProductStatus;
    expirationAt: string;
    name: string;
    type: CardType;
    isVirtual: boolean;
    level: CardLevel;
    paymentSystem: PaymentSystem;
    image: string;
}

export interface CardDetailsResponse {
    customerId: number;
    cardNumber: string;
    balance: number;
    statusName: CardStatusResponse;
    expirationAt: string;
    nameProduct: string;
    typeCard: CardType;
    isVirtual: boolean;
    level: CardLevel;
    paymentSystem: PaymentSystem;
    image: string;
}

export interface CardProduct {
    id: string;
    name: string;
    image: string;
    paymentSystem: PaymentSystem;
    type: CardType;
    level: CardLevel;
}

export interface CardProductResponse {
    cardProductId: string;
    nameProduct: string;
    imageUrl: string;
    paymentSystem: PaymentSystem;
    typeCard: CardType;
    level: CardLevel;
}

export interface CardProductDetails {
    name: string;
    image: string;
    paymentSystem: PaymentSystem;
    type: CardType;
    level: CardLevel;
    isVirtual: boolean;
    feeUse: number;
    limits: { key: string, value: number }[];
    conditions: { key: string, value: number }[];
}

export interface CardProductDetailsResponse {
    nameProduct: string;
    image: string;
    paymentSystem: PaymentSystem;
    typeCard: CardType;
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
