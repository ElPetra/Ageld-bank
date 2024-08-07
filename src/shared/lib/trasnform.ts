import {
    type Account,
    type AccountResponse,
    type CustomerCard,
    type CustomerCardResponse,
    type CardProductResponse,
    type CardProduct,
    type CardProductDetails,
    type CardProductDetailsResponse,
    type CardDetailsResponse,
    type CardDetails,
    type AccountDetailsResponse,
    type AccountDetails,
    type DepositProduct,
    type DepositProductResponse,
    type Currency,
    type Deposit,
    type DepositResponse,
    type DepositDetails,
    type DepositDetailsResponse,
    type PaymentSystem,
    cardStatusesToProductStatus
} from 'src/shared/model';

export const transformAccounts = (res: AccountResponse[]): Account[] =>
    res.map(el => ({
        number: el.accountNumber,
        type: el.type,
        balance: el.accountBalance,
        status: el.statusName,
        currency: el.currencyName,
        isMaster: el.masterAccount,
        name: el.nameAccount || ''
    }));

export const transformAccountDetails = (
    res: AccountDetailsResponse
): AccountDetails => ({
    number: res.accountNumber,
    name: res.nameAccount || '',
    isMaster: res.masterAccount,
    type: res.type,
    currency: res.currencyName,
    status: res.statusName,
    balance: res.accountBalance,
    createdAt: res.createdAt,
    closedAt: res.closedAt,
    blockReason: res.blockReason || '',
    blockComment: res.blockComment || ''
});

export const transformCards = (res: CustomerCardResponse[]): CustomerCard[] =>
    res.map(el => ({
        active: el.active,
        id: el.cardId,
        number: el.cardNumber,
        expires: el.expires,
        status: cardStatusesToProductStatus[el.cardStatus],
        image: el.image,
        balance: el.balance,
        name: el.productName,
        type: el.typeCard,
        isVirtual: el.isVirtual,
        currency: el.currencyCode.toLowerCase() as Currency
    }));

export const transformCardDetails = (
    res: CardDetailsResponse
): CardDetails => ({
    number: res.cardNumber,
    balance: res.balance,
    status: cardStatusesToProductStatus[res.cardStatus],
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
        .map(el => ({
            active: el.active,
            id: el.id,
            name: el.productName,
            image: el.cardImage,
            paymentSystem: el.paymentSystem.toLowerCase() as PaymentSystem,
            type: el.cardType,
            level: el.cardLevel || 'Нет данных',
            currency: el.currencyCode.toLowerCase() as Currency
        }))
        .filter(el => el.active);

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

export const transformDepositProducts = (
    res: DepositProductResponse[]
): DepositProduct[] =>
    res.map(el => ({
        id: el.id,
        name: el.name,
        currency: el.currency.toLowerCase() as Currency,
        amountMin: el.amountMin,
        amountMax: el.amountMax,
        dayMin: el.dayMin,
        dayMax: el.dayMax,
        capitalization: el.capitalization,
        replenishment: el.replenishment,
        withdrawal: el.withdrawal,
        revocable: el.revocable
    }));

export const transformDeposit = (res: DepositResponse[]): Deposit[] =>
    res.map(el => ({
        productId: el.depositProductId,
        name: el.productName,
        currency: el.currencyName.toLowerCase() as Currency,
        balance: el.currentBalance || 0,
        closedAt: el.closedAt,
        account: el.depositAccount,
        id: el.depositId
    }));

export const transformDepositDetails = (
    res: DepositDetailsResponse
): DepositDetails => ({
    name: res.name,
    currency: res.currency.toLowerCase() as Currency,
    timeLimited: res.timeLimited,
    revocable: res.revocable,
    capitalization: res.capitalization,
    withdrawal: res.withdrawal,
    status: res.productStatus,
    withAutoProlongation: res.autorenStatus,
    initialAmount: res.initialAmount,
    balance: res.curBalance || 0,
    percentBalance: res.percBalance || 0,
    startDate: res.startDate,
    endDate: res.endDate,
    isAutoProlongation: res.autorenewStatus,
    percentRate: res.percentRate || 0,
    mainAccount: res.mainNum,
    percentAccount: res.percNum,
    mAccountId: res.maccountId,
    pAccountId: res.paccountId
});
