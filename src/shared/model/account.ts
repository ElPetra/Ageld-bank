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

export const CREDIT_ACCOUNT = 'Кредитный счет';
export const DEBIT_ACCOUNT = 'Дебетовый счет';
export const DEPOSIT_ACCOUNT = 'Депозитный счет';

export const accountTypes: Record<AccountType, string> = {
    credit: CREDIT_ACCOUNT,
    debit: DEBIT_ACCOUNT,
    deposit: DEPOSIT_ACCOUNT
};

export const ACCOUNT_NUMBER_REPLACEMENT = '**************';

export const MY_ACCOUNTS = 'Мои счета';
export const OPENED_ACCOUNTS = 'Открытые счета';
export const OPEN_ACCOUNT_REQUEST = 'Заявки на открытие счета';
export const CLOSED_ACCOUNTS = 'Закрытые счета';
export const BLOCKED_ACCOUNTS = 'Заблокированные счета';

export const ACCOUNTS_NOT_FOUND =
    'На данный момент \n у Вас нет соответствующих счетов';

export const CREATE_ACCOUNT = 'Открыть счет';

export const CREATE_CREDIT_ACCOUNT_TITLE = 'Больше денег без лишних вложений';
export const CREATE_DEBIT_ACCOUNT_TITLE = 'Откройте счет не выходя из дома';
export const CREATE_DEPOSIT_ACCOUNT_TITLE = 'Сделайте шаг навстречу мечте';
export const GET_CARD_IN_OFFICE = 'Заберу в офисе банка';
export const CARD_DELIVERY_REQUIRED = 'Потребуется доставка';
export const ACCOUNT_CREATION_FAILED = 'Не удалось открыть счет';
export const ACCOUNT_CREATION_SUCCESS = 'Мы открыли вам счет!';
export const GO_TO_ACCOUNT_LIST = 'Перейти к списку счетов';
