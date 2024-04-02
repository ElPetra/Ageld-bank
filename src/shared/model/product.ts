export interface Product {
    balance: number;
    cardNumber: string;
    expirationAt: string;
    nameProduct: string;
    level: 'classic' | 'classic-junior' | 'gold' | 'platinum' | 'premium';
    paymentSystem: 'МИР' | 'VISA';
    currencyName: 'rub' | 'usd' | 'eur';
}
