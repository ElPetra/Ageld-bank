import i18next from 'i18next';

import type { SvgIconName } from 'src/shared/ui';
import type { ProductStatus } from 'src/shared/model';

type CardStatusResponse = 'ACTIVE' | 'CLOSED' | 'BLOCKED';

export type CardType = 'CREDIT' | 'DEBIT' | 'DEPOSIT';
export type CardLevel = 'CLASSIC' | 'GOLD' | 'PLATINUM' | 'PREMIUM';
export type PaymentSystem = 'МИР' | 'VISA';

export const CARDS_TITLE = i18next.t('Карты');
export const CREATE_CARD = i18next.t('Создать карту');
export const CARDS_NOT_FOUND = i18next.t(
    'На данный момент \n у Вас нет соответствующих карт'
);
export const CARD_NUMBER_REPLACEMENT = '**** **** **** ';
export const CARD_BALANCE = i18next.t('Баланс');
export const CARD_CURRENCY = i18next.t('Валюта счета');
export const INFO_ABOUT_CARD = i18next.t('Информация по карте');
export const REQUEST_CARD = i18next.t('Оформить');
export const MORE_DETAILS = i18next.t('Подробнее');
export const EXPIRY_DATE = i18next.t('Срок действия');
export const CUSTOMER_CARDS = i18next.t('Мои карты');
export const CARD_PRODUCTS = i18next.t('Карточные продукты');

export const ALL_CARD = i18next.t('Bce');
export const CREDIT_CARD = i18next.t('Кредитная');
export const DEBIT_CARD = i18next.t('Дебетовая');
export const DEPOSIT_CARD = i18next.t('Депозитная');
export const MIR_CARD = i18next.t('МИР');
export const VISA_CARD = i18next.t('VISA');

export const typeCard: Record<CardType, string> = {
    CREDIT: CREDIT_CARD,
    DEBIT: DEBIT_CARD,
    DEPOSIT: DEPOSIT_CARD
};

export const typeCardFilters = [
    ALL_CARD,
    CREDIT_CARD,
    DEBIT_CARD,
    DEPOSIT_CARD
];
export const paymentSystemFilters = [ALL_CARD, MIR_CARD, VISA_CARD];

export interface Detail {
    id: number;
    name: string;
    icon: SvgIconName;
}

export interface CustomerCard {
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
