import { ALL } from 'src/shared/model';

import type {
    ProductStatus,
    Currency,
    CurrencyResponse
} from 'src/shared/model';

import type { SvgIconName } from '../ui';

export type CardType = 'CREDIT' | 'DEBIT';
export type CardLevel = 'CLASSIC' | 'GOLD' | 'PLATINUM' | 'PREMIUM';

export type PaymentSystemResponse = 'MIR' | 'Visa' | 'MasterCard';
export type PaymentSystem = 'mir' | 'visa' | 'mastercard';

export const CARD_NUMBER_REPLACEMENT = '**** **** **** ';
export const CREDIT_CARD = 'Кредитная';
export const DEBIT_CARD = 'Дебетовая';

export type CardStatusResponse = 1 | 2 | 3;

export const cardStatusesToProductStatus: Record<
    CardStatusResponse,
    ProductStatus
> = {
    1: 'active',
    2: 'closed',
    3: 'blocked'
};

export const cardStatusesToText: Record<ProductStatus, string> = {
    active: 'Активная',
    closed: 'Закрытая',
    blocked: 'Заблокированная'
};

export const typeCard: Record<CardType, string> = {
    CREDIT: CREDIT_CARD,
    DEBIT: DEBIT_CARD
};

export const typeCardFilters = [ALL, CREDIT_CARD, DEBIT_CARD];

export interface CardProduct {
    active: boolean;
    id: string;
    name: string;
    image: string;
    paymentSystem: PaymentSystem;
    type: CardType;
    level: CardLevel;
    currency: Currency;
}

export interface CardProductResponse {
    active: boolean;
    id: string;
    productName: string;
    cardImage: string;
    paymentSystem: PaymentSystemResponse;
    cardType: CardType;
    cardLevel: CardLevel;
    currencyCode: CurrencyResponse;
}

export interface CardProductDetails {
    name: string;
    image: string;
    paymentSystem: PaymentSystem;
    type: CardType;
    level: CardLevel;
    isVirtual: boolean;
    cardFee: number;
    serviceFee: number;
    currency: Currency;
    active: boolean;
    cashbackLimit: number;
    dayOperationLimit: number;
    monthOperationLimit: number;
    limits: { key: string, value: number }[];
    conditions: { key: string, value: number }[];
}

export interface CardProductDetailsResponse {
    id: string;
    name: string;
    cardImage: string;
    paymentSystem: PaymentSystemResponse;
    cardType: CardType;
    cardLevel: CardLevel;
    isVirtual: boolean;
    cardFee: number;
    serviceFee: number;
    currencyCode: CurrencyResponse;
    active: boolean;
    cashbackLimit: number;
    dayOperationLimit: number;
    monthOperationLimit: number;
    amountDay: number;
    amountOperation: number;
    withdrawalOperation: number;
    client: number;
    partnerClient: number;
    localCustomer: number;
    internationalCustomer: number;
    transferClient: number;
    transferPartnerClient: number;
    transferNonPartnerClient: number;
    internationalTransfer: number;
}

export interface CustomerCard {
    active: boolean;
    id: string;
    number: string;
    expires: string;
    image: string;
    status: ProductStatus;
    balance: number;
    currency: Currency;
    isVirtual: boolean;
    name: string;
    type: CardType;
}

export interface CustomerCardResponse {
    active: boolean;
    id: string;
    cardNumber: string;
    expires: string;
    cardImage: string;
    cardStatus: CardStatusResponse;
    balance: number;
    currencyCode: CurrencyResponse;
    isVirtual: boolean;
    productName: string;
    cardType: CardType;
}

export interface CardDetails {
    number: string;
    balance: number;
    status: ProductStatus;
    expires: string;
    name: string;
    type: CardType;
    isVirtual: boolean;
    currency: Currency;
    paymentSystem: PaymentSystem;
    image: string;
}

export interface CardDetailsResponse {
    customerId: number;
    cardNumber: string;
    balance: number;
    cardStatus: CardStatusResponse;
    expires: string;
    productName: string;
    cardType: CardType;
    isVirtual: boolean;
    currencyCode: CurrencyResponse;
    paymentSystem: PaymentSystemResponse;
    cardImage: string;
}

//TODO проверить реальные значения, когда будет готов бэк
export type TPaySystems =
    | 'gold'
    | 'classic-junior'
    | 'premium'
    | 'classic'
    | 'platinum';

export type TCardIconWithName = {
    icon?: SvgIconName,
    name: string,
    link: string
};
