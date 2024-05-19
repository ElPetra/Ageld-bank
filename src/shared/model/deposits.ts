import type { SvgIconName } from 'src/shared/ui';
import type { Currency } from 'src/shared/model';

import type { ProductStatus } from 'src/shared/model';

export const INFO_ABOUT_DEPOSIT = 'Информация по депозиту';
export const REQUEST_DEPOSIT = 'Оформить';
export const CUSTOMER_DEPOSITS = 'Мои депозиты';
export const DEPOSIT_CURRENCY = 'Валюта счета';
export const DEPOSITS_TITLE = 'Депозиты';
export const DEPOSITS_OFFERED = 'Депозиты A-geld';
export const INTEREST_RATE = 'Процентная ставка';
export const DEPOSIT_BALANCE = 'Сумма на депозитном счете';
export const START_BALANCE = 'Изначальная сумма депозита';
export const SHOW_MORE = 'Показать больше';
export const DEPOSIT_PLAN = 'Схема депозита';
export const TO_DEPOSIT_LIST = 'К списку депозитов'
export const URGENT = 'Срочный';
export const DEPOSIT_TERM = 'Длительность существования';
export const DEPOSIT_END_OF_TERM = 'Окончание срока вклада';
export interface MockDeposit {
    id: number;
    currency: Currency;
    closed: string;
    name: string;
    icon: SvgIconName;
    interestRate: string;
    balance: string;
    depositAccount: string;
    status: ProductStatus;
    term: string;
    startBalance: number;
}

export interface DepositProduct {
    nameProduct: string;
    imageUrl: string;
    depositProductId: string;
}
export const depositBalanceConcat = (deposit: MockDeposit) => {
    return deposit.balance + ' ' + deposit.currency.toUpperCase();
};
export const MAKE_DEPOSIT = 'Выполнить депозит';
export const DEPOSITS_NOT_FOUND = 'На данный момент \n у Вас нет депозитов';

export const mockDeposits: MockDeposit[] = [
    {
        id: 123,
        currency: 'rub',
        closed: '15.10.2025',
        name: 'Liberty бессрочный',
        icon: 'rub',
        interestRate: '15.5%',
        balance: '1000',
        depositAccount: '12345',
        status: 'active',
        term: '2 Месяца',
        startBalance: 900
    },
    {
        id: 1234,
        currency: 'eur',
        closed: '15.10.2025',
        name: 'Liberty бессрочный',
        icon: 'eur',
        interestRate: '15.5%',
        balance: '1000',
        depositAccount: '12345',
        status: 'active',
        term: '2 Месяца',
        startBalance: 900
    },
    {
        id: 12345,
        currency: 'usd',
        closed: '15.10.2025',
        name: 'Liberty бессрочный',
        icon: 'usd',
        interestRate: '15.5%',
        balance: '1000',
        depositAccount: '12345',
        status: 'active',
        term: '2 Месяца',
        startBalance: 900
    }
];
