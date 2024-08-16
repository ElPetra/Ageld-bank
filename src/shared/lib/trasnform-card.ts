import { cardStatusesToProductStatus } from 'src/shared/model';

import type {
    CardDetails,
    CardDetailsResponse,
    CardProduct,
    CardProductDetails,
    CardProductDetailsResponse,
    CardProductResponse,
    Currency,
    CustomerCard,
    CustomerCardResponse,
    PaymentSystem
} from 'src/shared/model';

export const transformCards = (res: CustomerCardResponse[]): CustomerCard[] =>
    res.map(el => ({
        active: el.active,
        id: el.id,
        number: el.cardNumber,
        expires: el.expires,
        status: cardStatusesToProductStatus[el.cardStatus || 2],
        image: el.cardImage,
        balance: el.balance,
        name: el.productName,
        type: el.cardType,
        isVirtual: el.isVirtual,
        currency: el.currencyCode.toLowerCase() as Currency
    }));

export const transformCardDetails = (
    res: CardDetailsResponse
): CardDetails => ({
    number: res.cardNumber,
    balance: res.balance,
    status: cardStatusesToProductStatus[res.cardStatus || 2],
    expires: res.expires,
    name: res.productName,
    type: res.cardType,
    isVirtual: res.isVirtual,
    currency: res.currencyCode.toLowerCase() as Currency,
    paymentSystem: res.paymentSystem.toLowerCase() as PaymentSystem,
    image: res.cardImage
});

export const transformCardProducts = (
    res: CardProductResponse[]
): CardProduct[] =>
    res
        .filter(el => el.active)
        .map(el => ({
            active: el.active,
            id: el.id,
            name: el.productName,
            image: el.cardImage,
            paymentSystem: el.paymentSystem.toLowerCase() as PaymentSystem,
            type: el.cardType,
            level: el.cardLevel || 'Нет данных',
            currency: el.currencyCode.toLowerCase() as Currency
        }));

export const transformCardProductDetails = (
    res: CardProductDetailsResponse
): CardProductDetails => ({
    name: res.name,
    image: res.cardImage,
    paymentSystem: res.paymentSystem.toLowerCase() as PaymentSystem,
    type: res.cardType,
    level: res.cardLevel || 'Нет данных',
    isVirtual: res.isVirtual,
    currency: res.currencyCode.toLowerCase() as Currency,
    cardFee: res.cardFee,
    serviceFee: res.serviceFee,
    active: res.active,
    cashbackLimit: res.cashbackLimit,
    dayOperationLimit: res.dayOperationLimit,
    monthOperationLimit: res.monthOperationLimit,
    limits: [
        {
            key: 'amountDay',
            value: res.amountDay
        },
        {
            key: 'amountOperation',
            value: res.amountOperation
        },
        {
            key: 'withdrawalOperation',
            value: res.withdrawalOperation
        }
    ],
    conditions: [
        {
            key: 'client',
            value: res.client
        },
        {
            key: 'partnerClient',
            value: res.partnerClient
        },
        {
            key: 'localCustomer',
            value: res.localCustomer
        },
        {
            key: 'internationalCustomer',
            value: res.internationalCustomer
        },
        {
            key: 'transferClient',
            value: res.transferClient
        },
        {
            key: 'transferPartnerClient',
            value: res.transferPartnerClient
        },
        {
            key: 'transferNonPartnerClient',
            value: res.transferNonPartnerClient
        },
        {
            key: 'internationalTransfer',
            value: res.internationalTransfer
        }
    ]
});
