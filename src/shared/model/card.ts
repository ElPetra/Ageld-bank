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

export const paymentSystemName = {
    ALL: 'Все',
    MIR_CARD: 'МИР',
    VISA_CARD: 'VISA'
} as const;

export type PaymentSystem = keyof typeof paymentSystemName;

export type CardLevel = 'CLASSIC' | 'GOLD' | 'PLATINUM' | 'PREMIUM';

export interface Card {
    balance: number;
    number: string;
    expirationAt: string;
    name: string;
    level: CardLevel;
    paymentSystem: PaymentSystem;
    currency: Currency;
}

export interface CardProduct {
    nameProduct: string;
    imageUrl: string;
    cardProductId: string;
    paymentSystem: PaymentSystem;
    typeCard: TypeCard;
    level: CardLevel;
}
export interface CardProductInfo {
    nameProduct: string;
    image: string;
    paymentSystem: PaymentSystem;
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
