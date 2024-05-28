import i18n from 'src/shared/model/i18n';

import type { SvgIconName } from 'src/shared/ui';
import type { Currency } from 'src/shared/model';

import type { ProductStatus } from 'src/shared/model';

export const INFO_ABOUT_DEPOSIT = i18n.t('Информация по депозиту');
export const REQUEST_DEPOSIT = i18n.t('Оформить');
export const FUND = i18n.t('Пополнить');
export const YES = i18n.t('Да');
export const NO = i18n.t('Нет');
export const WITHDRAW = i18n.t('Отозвать');
export const PROLONGATION = i18n.t('Пролонгировать');
export const CUSTOMER_DEPOSITS = i18n.t('Мои депозиты');
export const DEPOSIT_CURRENCY = i18n.t('Валюта счета');
export const DEPOSITS_TITLE = i18n.t('Депозиты');
export const DISABLE_AUTOPROLONGATION = i18n.t('Отключить автопролонгацию');
export const ENABLE_AUTOPROLONGATION = i18n.t('Включить автопролонгацию');
export const DEPOSIT_PROLONGATE = i18n.t('Пролонгировать');
export const AUTOMATIC_PROLONGATION = i18n.t('Автоматическая пролонгация');
export const DEPOSITS_OFFERED = i18n.t('Депозиты A-geld');
export const INTEREST_RATE = i18n.t('Процентная ставка');
export const DEPOSIT_BALANCE = i18n.t('Сумма на депозитном счете');
export const INITIAL_BALANCE = i18n.t('Изначальная сумма депозита');
export const SHOW_MORE = i18n.t('Показать больше');
export const DEPOSIT_PLAN = i18n.t('Схема депозита');
export const TO_DEPOSIT_LIST = i18n.t('К списку депозитов');
export const URGENT = i18n.t('Срочный');
export const CONNECTED_SUBACCOUNT_NUM = i18n.t('№ счета с процентами');
export const IRREVOCABILITY = i18n.t('Отзывной');
export const UNTIMELY_WITHDRAWAL_INTEREST_RATE = i18n.t(
    'Cтавка при досрочном отзыве'
);
export const DEPOSIT_TERM = i18n.t('Длительность существования');
export const DEPOSIT_END_OF_TERM = i18n.t('Окончание срока вклада');

export const MAKE_DEPOSIT = i18n.t('Выполнить депозит');
export const DEPOSITS_NOT_FOUND = i18n.t(
    'На данный момент \n у Вас нет депозитов'
);

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
        name: 'Liberty бессрочный',
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
        name: 'Liberty бессрочный',
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
