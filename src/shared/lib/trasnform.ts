import type {
    Account,
    AccountResponse,
    CustomersCard,
    CustomersCardResponse,
    CardProductResponse,
    CardProduct,
    CardProductDetails,
    CardProductDetailsResponse
} from 'src/shared/model';

// export const transformAccount = (res: AccountResponse): Account => ({
//     number: res.accountNumber,
//     type: res.type,
//     balance: res.accountBalance,
//     status: res.statusName,
//     currency: res.currencyName,
//     isMaster: res.masterAccount,
//     name: res.nameAccount || ''
// });

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

export const transformCards = (res: CustomersCardResponse[]): CustomersCard[] =>
    res.map(el => ({
        number: el.accountNumber,
        expirationAt: el.expirationAt,
        image: el.image,
        level: el.level,
        name: el.nameProduct,
        paymentSystem: el.paymentSystem,
        status: el.statusName,
        type: el.typeCard
    }));

export const transformCardDetails = (
    res: CardProductDetailsResponse
): CardProductDetails => ({
    name: res.nameProduct,
    image: res.image,
    paymentSystem: res.paymentSystem,
    type: res.typeCard,
    level: res.level,
    isVirtual: res.isVirtual,
    feeUse: res.feeUse,
    withdrawLimitDay: res.withdrawLimitDay,
    withdrawLimitMonth: res.withdrawLimitMonth,
    transactionLimitDay: res.transactionLimitDay,
    transactionLimitMonth: res.transactionLimitMonth,
    payLimitDay: res.payLimitDay,
    payLimitMonth: res.payLimitMonth,
    overWithdrawDay: res.overWithdrawDay,
    overWithdrawMonth: res.overWithdrawMonth,
    overTransactionDay: res.overTransactionDay,
    overTransactionMonth: res.overTransactionMonth,
    overPayDay: res.overPayDay,
    overPayMonth: res.overPayMonth,
    conditionWithdraw: res.conditionWithdraw,
    conditionPartnerWithdraw: res.conditionPartnerWithdraw,
    conditionWorldWithdraw: res.conditionWorldWithdraw,
    conditionTransaction: res.conditionTransaction,
    conditionPay: res.conditionPay
});

export const transformCardProducts = (
    res: CardProductResponse[]
): CardProduct[] =>
    res.map(el => ({
        id: el.cardProductId,
        name: el.nameProduct,
        image: el.imageUrl,
        paymentSystem: el.paymentSystem,
        type: el.typeCard,
        level: el.level
    }));

export const transformCardProductDetails = (
    res: CardProductDetailsResponse
): CardProductDetails => ({
    name: res.nameProduct,
    image: res.image,
    paymentSystem: res.paymentSystem,
    type: res.typeCard,
    level: res.level,
    isVirtual: res.isVirtual,
    feeUse: res.feeUse,
    withdrawLimitDay: res.withdrawLimitDay,
    withdrawLimitMonth: res.withdrawLimitMonth,
    transactionLimitDay: res.transactionLimitDay,
    transactionLimitMonth: res.transactionLimitMonth,
    payLimitDay: res.payLimitDay,
    payLimitMonth: res.payLimitMonth,
    overWithdrawDay: res.overWithdrawDay,
    overWithdrawMonth: res.overWithdrawMonth,
    overTransactionDay: res.overTransactionDay,
    overTransactionMonth: res.overTransactionMonth,
    overPayDay: res.overPayDay,
    overPayMonth: res.overPayMonth,
    conditionWithdraw: res.conditionWithdraw,
    conditionPartnerWithdraw: res.conditionPartnerWithdraw,
    conditionWorldWithdraw: res.conditionWorldWithdraw,
    conditionTransaction: res.conditionTransaction,
    conditionPay: res.conditionPay
});

// limits: [
//     {
//         key: 'withdrawLimitDay',
//         value: res.withdrawLimitDay
//     },
//     {
//         key: 'withdrawLimitMonth',
//         value: res.withdrawLimitMonth
//     },
//     {
//         key: 'transactionLimitDay',
//         value: res.transactionLimitDay
//     },
//     {
//         key: 'transactionLimitMonth',
//         value: res.transactionLimitMonth
//     },
//     {
//         key: 'payLimitDay',
//         value: res.payLimitDay
//     },
//     {
//         key: 'payLimitMonth',
//         value: res.payLimitMonth
//     },
//     {
//         key: 'overWithdrawDay',
//         value: res.overWithdrawDay
//     },
//     {
//         key: 'overWithdrawMonth',
//         value: res.overWithdrawMonth
//     },
//     {
//         key: 'overTransactionDay',
//         value: res.overTransactionDay
//     },
//     {
//         key: 'overTransactionMonth',
//         value: res.overTransactionMonth
//     },
//     {
//         key: 'overPayDay',
//         value: res.overPayDay
//     },
//     {
//         key: 'overPayMonth',
//         value: res.overPayMonth
//     }
// ],
//     conditions: [
//     {
//         key: 'conditionWithdraw',
//         value: res.conditionWithdraw
//     },
//     {
//         key: 'conditionPartnerWithdraw',
//         value: res.conditionPartnerWithdraw
//     },
//     {
//         key: 'conditionWorldWithdraw',
//         value: res.conditionWorldWithdraw
//     },
//     {
//         key: 'conditionTransaction',
//         value: res.conditionTransaction
//     },
//     {
//         key: 'conditionPay',
//         value: res.conditionPay
//     }
// ]
