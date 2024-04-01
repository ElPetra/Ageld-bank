export interface Product {
    balance: number;
    cardNumber: string;
    expirationAt: string;
    nameProduct: string;
    paymentSystem: 'МИР' | 'VISA';
    currencyName: 'rub' | 'usd' | 'eur';
}
