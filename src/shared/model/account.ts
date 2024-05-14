import type { Currency } from 'src/shared/model';
import type { SvgIconName } from 'src/shared/ui';

export type ProductStatus = 'active' | 'closed' | 'blocked';
export type AccountType = 'credit' | 'debit' | 'deposit';

export interface AccountDetails {
    id: string;
    number: string;
    type: AccountType;
    balance: string;
    status: ProductStatus;
    currency: Currency;
    master: boolean;
    created: Date;
    closed?: Date;
    blockReason?: string;
    contractNumber: string;
    icon: SvgIconName;
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
export const MASTER_ACCOUNT = 'Основной счет';

export const ACTIVE_ACCOUNT = 'Активный';
export const CLOSED_ACCOUNT = 'Закрытый';
export const BLOCKED_ACCOUNT = 'Заблокированный';

export const accountTypes: Record<AccountType, string> = {
    credit: CREDIT_ACCOUNT,
    debit: DEBIT_ACCOUNT,
    deposit: DEPOSIT_ACCOUNT
};

export const accountStatuses: Record<ProductStatus, string> = {
    active: ACTIVE_ACCOUNT,
    closed: CLOSED_ACCOUNT,
    blocked: BLOCKED_ACCOUNT
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
