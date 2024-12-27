import type { Currency } from '../model';

export function currencySign(currency: Currency) {
    let symbol;
    switch (currency) {
        case 'rub':
            symbol = '₽';
            break;
        case 'eur':
            symbol = '€';
            break;
        case 'usd':
            symbol = '$';
            break;
    }
    return symbol;
}
