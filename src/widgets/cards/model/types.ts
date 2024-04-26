export interface Card {
    nameProduct: string;
    imageUrl: string;
    cardProductId: string;
    paymentSystem: string;
    typeCard: string;
    level: string;
}
export interface CardInfo {
    nameProduct: string;
    image: string;
    paymentSystem: string;
    typeCard: string;
    level: string;
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
export const typeFilters: Record<string, string> = {
    Все: 'ALL',
    Кредитная: 'CREDIT',
    Дебетовая: 'DEBIT'
};
