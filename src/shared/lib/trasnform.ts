import type {
    Account,
    AccountDetails,
    AccountDetailsResponse,
    AccountResponse,
    AccountType,
    Currency,
    Deposit,
    DepositDetails,
    DepositDetailsResponse,
    DepositProduct,
    DepositProductDetails,
    DepositProductDetailsResponse,
    DepositProductResponse,
    DepositResponse,
    ProductStatus
} from 'src/shared/model';

export const transformAccounts = (res: AccountResponse[]): Account[] =>
    res.map(el => ({
        number: el.accountNumber,
        type: el.type.toLowerCase() as AccountType,
        balance: el.accountBalance,
        status: el.status.toLowerCase() as ProductStatus,
        currency: el.currencyName.toLowerCase() as Currency,
        isMaster: el.masterAccount,
        name: el.nameAccount || ''
    }));

export const transformAccount = (res: AccountResponse[]): Account | undefined =>
    res
        .map(el => ({
            number: el.accountNumber,
            type: el.type.toLowerCase() as AccountType,
            balance: el.accountBalance,
            status: el.status.toLowerCase() as ProductStatus,
            currency: el.currencyName.toLowerCase() as Currency,
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
    type: res.type.toLowerCase() as AccountType,
    currency: res.currencyName.toLowerCase() as Currency,
    status: res.status.toLowerCase() as ProductStatus,
    balance: res.accountBalance,
    createdAt: res.createdAt,
    closedAt: res.closedAt,
    blockReason: res.blockReason || '',
    blockComment: res.blockComment || ''
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
