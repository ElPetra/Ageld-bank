import type {
    Account,
    AccountResponse,
    CustomerCard,
    CustomerCardResponse,
    CardProductResponse,
    CardProduct,
    CardProductDetails,
    CardProductDetailsResponse,
    ProductStatus,
    CardDetailsResponse,
    CardDetails,
    AccountDetailsResponse,
    AccountDetails,
    DepositProduct,
    DepositProductResponse,
    Currency,
    Deposit,
    DepositResponse,
    DepositDetails,
    DepositDetailsResponse,
    DepositProductDetailsResponse,
    DepositProductDetails
} from 'src/shared/model';

export const transformAccounts = (res: AccountResponse[]): Account[] =>
    res.map(el => ({
        number: el.accountNumber,
        type: el.type,
        balance: el.accountBalance,
        status: el.status,
        currency: el.currencyName,
        isMaster: el.masterAccount,
        name: el.nameAccount || ''
    }));

export const transformAccount = (res: AccountResponse[]): Account | undefined =>
    res
        .map(el => ({
            number: el.accountNumber,
            type: el.type,
            balance: el.accountBalance,
            status: el.status.toLowerCase() as ProductStatus,
            currency: el.currencyName,
            isMaster: el.masterAccount,
            name: el.nameAccount || ''
        }))
        .filter(item => item.status === 'active')[0];

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
        id: el.cardId,
        number: el.accountNumber,
        expirationAt: el.expirationAt,
        image: el.image,
        level: el.level,
        name: el.nameProduct,
        paymentSystem: el.paymentSystem,
        status: el.statusName.toLowerCase() as ProductStatus,
        type: el.typeCard
    }));

export const transformCardDetails = (
    res: CardDetailsResponse
): CardDetails => ({
    number: res.cardNumber,
    balance: res.balance,
    status: res.statusName.toLowerCase() as ProductStatus,
    expirationAt: res.expirationAt,
    name: res.nameProduct,
    type: res.typeCard,
    isVirtual: res.isVirtual,
    level: res.level,
    paymentSystem: res.paymentSystem,
    image: res.image
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
    limits: [
        {
            key: 'withdrawLimitDay',
            value: res.withdrawLimitDay
        },
        {
            key: 'withdrawLimitMonth',
            value: res.withdrawLimitMonth
        },
        {
            key: 'transactionLimitDay',
            value: res.transactionLimitDay
        },
        {
            key: 'transactionLimitMonth',
            value: res.transactionLimitMonth
        },
        {
            key: 'payLimitDay',
            value: res.payLimitDay
        },
        {
            key: 'payLimitMonth',
            value: res.payLimitMonth
        },
        {
            key: 'overWithdrawDay',
            value: res.overWithdrawDay
        },
        {
            key: 'overWithdrawMonth',
            value: res.overWithdrawMonth
        },
        {
            key: 'overTransactionDay',
            value: res.overTransactionDay
        },
        {
            key: 'overTransactionMonth',
            value: res.overTransactionMonth
        },
        {
            key: 'overPayDay',
            value: res.overPayDay
        },
        {
            key: 'overPayMonth',
            value: res.overPayMonth
        }
    ],
    conditions: [
        {
            key: 'conditionWithdraw',
            value: res.conditionWithdraw
        },
        {
            key: 'conditionPartnerWithdraw',
            value: res.conditionPartnerWithdraw
        },
        {
            key: 'conditionWorldWithdraw',
            value: res.conditionWorldWithdraw
        },
        {
            key: 'conditionTransaction',
            value: res.conditionTransaction
        },
        {
            key: 'conditionPay',
            value: res.conditionPay
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

export const transformDepositProductDetails = (
    res: DepositProductDetailsResponse
): DepositProductDetails => ({
    id: res.id,
    name: res.name,
    currency: res.currency.toLowerCase() as Currency,
    amountMin: res.amountMin,
    amountMax: res.amountMax,
    dayMin: res.dayMin,
    dayMax: res.dayMax,
    timeLimited: res.timeLimited,
    capitalization: res.capitalization,
    replenishment: res.replenishment,
    withdrawal: res.withdrawal,
    revocable: res.revocable,
    penalty: res.penalty,
    percentRate: res.percentRate || 0
});
