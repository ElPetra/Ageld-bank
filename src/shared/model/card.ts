export interface Card {
    balance: number;
    number: string;
    expirationAt: string;
    name: string;
    level: 'classic' | 'classic-junior' | 'gold' | 'platinum' | 'premium';
    paymentSystem: 'МИР' | 'VISA';
    currency: 'rub' | 'usd' | 'eur';
}
