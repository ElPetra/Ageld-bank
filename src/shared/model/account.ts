import i18next from 'i18next';

import type { Currency, ProductStatus } from 'src/shared/model';

export type AccountType = 'credit' | 'debit' | 'deposit';

export interface AccountDetails {
    number: string;
    name: string;
    isMaster: boolean;
    type: AccountType;
    currency: Currency;
    status: ProductStatus;
    balance: number;
    createdAt: string;
    closedAt: string;
    blockReason: string;
    blockComment: string;
}

export interface AccountDetailsResponse {
    accountNumber: string;
    nameAccount: null | string;
    masterAccount: boolean;
    type: AccountType;
    currencyName: Currency;
    statusName: ProductStatus;
    accountBalance: number;
    createdAt: string;
    closedAt: string;
    blockReason: null | string;
    blockComment: null | string;
}

export interface AccountResponse {
    accountNumber: string;
    type: AccountType;
    accountBalance: number;
    statusName: ProductStatus;
    currencyName: Currency;
    masterAccount: boolean;
    nameAccount: null | string;
}

export interface Account {
    number: string;
    type: AccountType;
    balance: number;
    status: ProductStatus;
    currency: Currency;
    isMaster: boolean;
    name: string;
}

export const CREDIT_ACCOUNT = i18next.t('Кредитный счет');
export const DEBIT_ACCOUNT = i18next.t('Дебетовый счет');
export const DEPOSIT_ACCOUNT = i18next.t('Депозитный счет');

export const accountTypes: Record<AccountType, string> = {
    credit: CREDIT_ACCOUNT,
    debit: DEBIT_ACCOUNT,
    deposit: DEPOSIT_ACCOUNT
};

export const ACCOUNT_NUMBER_REPLACEMENT = '**************';

export const MY_ACCOUNTS = i18next.t('Мои счета');
export const OPENED_ACCOUNTS = i18next.t('Открытые счета');
export const OPEN_ACCOUNT_REQUEST = i18next.t('Заявки на открытие счета');
export const CLOSED_ACCOUNTS = i18next.t('Закрытые счета');
export const BLOCKED_ACCOUNTS = i18next.t('Заблокированные счета');

export const ACCOUNTS_NOT_FOUND = i18next.t(
    'На данный момент \n у Вас нет соответствующих счетов'
);

export const CREATE_ACCOUNT = 'Открыть счет';

export const CREATE_CREDIT_ACCOUNT_TITLE = i18next.t(
    'Больше денег без лишних вложений'
);
export const CREATE_DEBIT_ACCOUNT_TITLE = i18next.t(
    'Откройте счет не выходя из дома'
);
export const CREATE_DEPOSIT_ACCOUNT_TITLE = i18next.t(
    'Сделайте шаг навстречу мечте'
);
export const GET_CARD_IN_OFFICE = i18next.t('Заберу в офисе банка');
export const CARD_DELIVERY_REQUIRED = i18next.t('Потребуется доставка');
export const ACCOUNT_CREATION_FAILED = i18next.t('Не удалось открыть счет');
export const ACCOUNT_CREATION_SUCCESS = i18next.t('Мы открыли вам счет!');
export const GO_TO_ACCOUNT_LIST = i18next.t('Перейти к списку счетов');
