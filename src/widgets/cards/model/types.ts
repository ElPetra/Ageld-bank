export interface Card {
    nameProduct: string;
    imageUrl: string;
    cardProductId: string;
    paymentSystem: string;
    typeCard: string;
    level: string;
}
export const typeFilters: Record<string, string> = {
    Все: 'ALL',
    Кредитная: 'CREDIT',
    Дебетовая: 'DEBIT'
};
