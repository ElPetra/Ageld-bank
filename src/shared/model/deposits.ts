import i18next from 'i18next';

import type { SvgIconName } from 'src/shared/ui';
import type { Currency } from 'src/shared/model';

import type { ProductStatus } from 'src/shared/model';

export const INFO_ABOUT_DEPOSIT = i18next.t('Информация по депозиту');
export const REQUEST_DEPOSIT = i18next.t('Оформить');
export const FUND = i18next.t('Пополнить');
export const YES = i18next.t('Да');
export const NO = i18next.t('Нет');
export const WITHDRAW = i18next.t('Отозвать');
export const PROLONGATE = i18next.t('Пролонгировать');
export const CUSTOMER_DEPOSITS = i18next.t('Мои депозиты');
export const DEPOSIT_CURRENCY = 'Валюта счета';
export const DEPOSITS_TITLE = 'Депозиты';
export const DISABLE_AUTOPROLONGATION = i18next.t('Отключить автопролонгацию');
export const ENABLE_AUTOPROLONGATION = i18next.t('Включить автопролонгацию');
export const DEPOSIT_PROLONGATE = i18next.t('Пролонгировать');
export const AUTOMATIC_PROLONGATION = i18next.t('Автоматическая пролонгация');
export const DEPOSITS_OFFERED = i18next.t('Депозиты A-geld');
export const INTEREST_RATE = i18next.t('Процентная ставка');
export const DEPOSIT_BALANCE = i18next.t('Сумма на депозитном счете');
export const INITIAL_BALANCE = i18next.t('Изначальная сумма депозита');
export const SHOW_MORE = i18next.t('Показать больше');
export const DEPOSIT_PLAN = i18next.t('Схема депозита');
export const TO_DEPOSIT_LIST = i18next.t('К списку депозитов');
export const URGENT = i18next.t('Срочный');
export const CONNECTED_SUBACCOUNT_NUM = i18next.t('№ счета с процентами');
export const IRREVOCABILITY = i18next.t('Отзывной');
export const UNTIMELY_WITHDRAWAL_INTEREST_RATE = i18next.t(
    'Процентная ставка при досрочном отзыве депозита'
);
export const DEPOSIT_TERM = i18next.t('Длительность существования');
export const DEPOSIT_END_OF_TERM = i18next.t('Окончание срока вклада');
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
    autoRenewal: boolean;
    capitalization: string;
    irrevocability: boolean;
    untimelyWithdrawalInterestRate: string;
    subAccountNum: number;
}
export interface DepositProduct {
    nameProduct: string;
    imageUrl: string;
    depositProductId: string;
}
export interface balanceProps {
    deposit: MockDeposit;
    startBalance: number;
}

export const MAKE_DEPOSIT = i18next.t('Выполнить депозит');
export const DEPOSITS_NOT_FOUND = i18next.t(
    'На данный момент \n у Вас нет депозитов'
);

export const mockDeposits: MockDeposit[] = [
    {
        id: 123456,
        currency: 'rub',
        closed: '15.10.2025',
        name: 'Liberty бессрочный',
        icon: 'rub',
        interestRate: '15.5%',
        balance: '1000',
        depositAccount: '12345',
        status: 'active',
        term: '2 Месяца',
        startBalance: 900,
        autoRenewal: true,
        capitalization: 'much capital very money',
        irrevocability: true,
        untimelyWithdrawalInterestRate: '1%',
        subAccountNum: 222233333
    },
    {
        id: 1234567,
        currency: 'eur',
        closed: '15.10.2025',
        name: i18next.t('Liberty бессрочный'),
        icon: 'eur',
        interestRate: '15.5%',
        balance: '1000',
        depositAccount: '12345',
        status: 'active',
        term: '2 Месяца',
        startBalance: 900,
        autoRenewal: true,
        capitalization: 'much capital very money',
        irrevocability: true,
        untimelyWithdrawalInterestRate: '1%',
        subAccountNum: 2222333334
    },
    {
        id: 12345678,
        currency: 'usd',
        closed: '15.10.2025',
        name: i18next.t('Liberty бессрочный'),
        icon: 'usd',
        interestRate: '15.5%',
        balance: '1000',
        depositAccount: '12345',
        status: 'active',
        term: '2 Месяца',
        startBalance: 900,
        autoRenewal: true,
        capitalization: 'much capital very money',
        irrevocability: true,
        untimelyWithdrawalInterestRate: '1%',
        subAccountNum: 22223333344
    }
];
