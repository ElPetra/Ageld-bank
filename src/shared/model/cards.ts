import type { SvgIconName } from 'src/shared/ui';
import type { ProductStatus } from 'src/shared/model';

export type CardTypeFilters = 'ALL' | 'CREDIT' | 'DEBIT' | 'DEPOSIT';
export type PaymentSystemFilters = 'ALL' | 'MIR' | 'VISA';
export type PaymentSystemFiltersValues = 'Все' | 'МИР' | 'VISA';

export type CardType = 'CREDIT' | 'DEBIT' | 'DEPOSIT';
export type CardLevel = 'CLASSIC' | 'GOLD' | 'PLATINUM' | 'PREMIUM';
export type PaymentSystemValues = 'МИР' | 'VISA';

export const CARDS_TITLE = 'Карты';
export const CREATE_CARD = 'Создать карту';
export const CARDS_NOT_FOUND =
    'На данный момент \n у Вас нет соответствующих карт';
export const CARD_NUMBER_REPLACEMENT = '**** **** **** ';
export const CARD_BALANCE = 'Баланс';
export const CARD_CURRENCY = 'Валюта счета';
export const INFO_ABOUT_CARD = 'Информация по карте';
export const REQUEST_CARD = 'Оформить';
export const MORE_DETAILS = 'Подробнее';
export const EXPIRY_DATE = 'Срок действия';
export const CUSTOMER_CARDS = 'Мои карты';
export const CARD_PRODUCTS = 'Карточные продукты';

export const ALL_CARD = 'Bce';
export const CREDIT_CARD = 'Кредитная';
export const DEBIT_CARD = 'Дебетовая';
export const DEPOSIT_CARD = 'Депозитная';
export const MIR_CARD = 'МИР';
export const VISA_CARD = 'VISA';

export const typeCardName: Record<CardTypeFilters, string> = {
    ALL: ALL_CARD,
    CREDIT: CREDIT_CARD,
    DEBIT: DEBIT_CARD,
    DEPOSIT: DEPOSIT_CARD
};

export const paymentSystemName: Record<PaymentSystemFilters, string> = {
    ALL: ALL_CARD,
    MIR: MIR_CARD,
    VISA: VISA_CARD
};

export interface Detail {
    id: number;
    name: string;
    icon: SvgIconName;
}

export interface Card {
    cardId: string;
    cardName: string;
    customerId: number;
    accountNumber: string;
    userLimit: number;
    cardProductId: string;
    cardNumber: string;
    balance: number;
    cvvEncrypted: string;
    pinCodeHash: string;
    statusName: string;
    expirationAt: string;
    createdAt: string;
    paymentSystem: PaymentSystemValues;
    isVirtual: boolean;
    level: CardLevel;
    typeCard: CardTypeFilters;
}

export interface CardProduct {
    id: string;
    name: string;
    image: string;
    paymentSystem: PaymentSystemValues;
    type: CardType;
    level: CardLevel;
}

export interface CardProductResponse {
    cardProductId: string;
    nameProduct: string;
    imageUrl: string;
    paymentSystem: PaymentSystemValues;
    typeCard: CardType;
    level: CardLevel;
}

export interface CustomersCard {
    number: string;
    expirationAt: string;
    image: string;
    level: CardLevel;
    name: string;
    paymentSystem: PaymentSystemValues;
    status: ProductStatus;
    type: CardType;
}

export interface CustomersCardResponse {
    accountNumber: string;
    expirationAt: string;
    image: string;
    level: CardLevel;
    nameProduct: string;
    paymentSystem: PaymentSystemValues;
    statusName: ProductStatus;
    typeCard: CardType;
}

export interface CardProductDetails {
    name: string;
    image: string;
    paymentSystem: PaymentSystemValues;
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
    paymentSystem: PaymentSystemValues;
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
