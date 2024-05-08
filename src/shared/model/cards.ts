import type { SvgIconName } from 'src/shared/ui';
import type { Currency, Status } from 'src/shared/model';

export type CardReceiveType = 'inOffice' | 'delivery';

export const typeCardName = {
    ALL: 'Все',
    CREDIT: 'Кредитная',
    DEBIT: 'Дебетовая'
};
export const typeCustomerCardName = {
    ALL: 'Все',
    CREDIT: 'Кредитная',
    DEBIT: 'Дебетовая',
    DEPOSIT: 'Депозитная'
};
export const CARD_NUMBER_REPLACEMENT = '**** **** **** ';
export const CARD_BALANCE = 'Баланс';
export const CARD_CURRENCY = 'Валюта счета';
export const INFO_ABOUT_CARD = 'Информация по карте';
export const REQUEST_CARD = 'Оформить';
export const MORE_DETAILS = 'Подробнее';
export const EXPIRY_DATE = 'Срок действия';
export const CUSTOMER_CARDS = 'Мои карты';
export const CARD_PRODUCTS = 'Карточные продукты';

export type TypeCard = keyof typeof typeCardName;
export type TypeCustomerCard = keyof typeof typeCustomerCardName;

//export type TypeCardValues = (typeof typeCardName)[TypeCard];

export const paymentSystemName = {
    ALL: 'Все',
    MIR: 'МИР',
    VISA: 'VISA'
};

export type PaymentSystem = keyof typeof paymentSystemName;
export type PaymentSystemValues = (typeof paymentSystemName)[PaymentSystem];

export type CardLevel = 'CLASSIC' | 'GOLD' | 'PLATINUM' | 'PREMIUM';
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
    typeCard: TypeCard;
}

export interface MockCard {
    balance: number;
    number: string;
    expirationAt: string;
    name: string;
    level: CardLevel;
    paymentSystem: PaymentSystemValues;
    currency: Currency;
    icon: SvgIconName;
}

export interface CardProduct {
    nameProduct: string;
    imageUrl: string;
    cardProductId: string;
    paymentSystem: PaymentSystemValues;
    typeCard: TypeCard;
    level: CardLevel;
}
export interface CustomersCard {
    accountNumber: string;
    statusName: Status;
    expirationAt: string;
    typeCard: TypeCard;
    nameProduct: string;
    level: CardLevel;
    paymentSystem: PaymentSystemValues;
    image: string;
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
