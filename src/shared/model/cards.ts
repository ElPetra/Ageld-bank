import type { Currency } from 'src/shared/model';

export type CardReceiveType = 'inOffice' | 'delivery';

export const typeCardName = {
    ALL: 'Все',
    CREDIT: 'Кредитная',
    DEBIT: 'Дебетовая'
};

export type TypeCard = keyof typeof typeCardName;
//export type TypeCardValues = (typeof typeCardName)[TypeCard];

export const paymentSystemName = {
    ALL: 'Все',
    MIR: 'МИР',
    VISA: 'VISA'
};

export type PaymentSystem = keyof typeof paymentSystemName;
export type PaymentSystemValues = (typeof paymentSystemName)[PaymentSystem];

export type CardLevel = 'CLASSIC' | 'GOLD' | 'PLATINUM' | 'PREMIUM';

export interface Card {
    cardId: number;
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
}

export interface CardProduct {
    nameProduct: string;
    imageUrl: string;
    cardProductId: string;
    paymentSystem: PaymentSystemValues;
    typeCard: TypeCard;
    level: CardLevel;
}
export interface CardProductInfo {
    nameProduct: string;
    image: string;
    paymentSystem: PaymentSystemValues;
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

export const CREATE_CARD = 'Создать карту';
export const CARDS_NOT_FOUND =
    'На данный момент \n у Вас нет соответствующих карт';

export const CARD_NUMBER_REPLACEMENT = ' **** **** ';
