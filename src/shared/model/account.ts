import type { Currency } from 'src/shared/model';
import type { SvgIconName } from 'src/shared/ui';

export type Status = 'active' | 'closed' | 'requested' | 'blocked';
export type AccountType = 'credit' | 'debit' | 'deposit';

export interface Account1 {
    id: string;
    number: string;
    type: 'credit' | 'deposit' | 'current';
    balance: string;
    status: Status;
    currency: Currency;
    master: boolean;
    created: Date;
    closed?: Date;
    blockReason?: string;
    contractNumber: string;
    icon: SvgIconName;
}

export interface Account {
    accountBalance: number
    accountNumber: string
    currencyName: Currency
    masterAccount: boolean
    nameAccount: null | string
    statusName: Status
    type: AccountType;
}

export const ACCOUNT_NUMBER_REPLACEMENT = '**************';

export const CREDIT_ACCOUNT = 'Кредитный счет';
export const DEPOSIT_ACCOUNT = 'Депозитный счет';
export const DEBIT_ACCOUNT = 'Дебетовый счет';
export const MASTER_ACCOUNT = 'Основной счет';

export const ACTIVE_ACCOUNT = 'Активный';
export const CLOSED_ACCOUNT = 'Закрытый';
export const BLOCKED_ACCOUNT = 'Заблокированный';
export const REQUESTED_ACCOUNT = 'Заявка на открытие счета';

export const CREATE_ACCOUNT = 'Открыть счет';

export const CREATE_CREDIT_ACCOUNT_TITLE = 'Больше денег без лишних вложений';
export const CREATE_DEBIT_ACCOUNT_TITLE = 'Откройте счет не выходя из дома';
export const CREATE_DEPOSIT_ACCOUNT_TITLE = 'Сделайте шаг навстречу мечте';

export const accountTypes = {
    credit: CREDIT_ACCOUNT,
    debit: DEBIT_ACCOUNT,
    deposit: DEPOSIT_ACCOUNT
};

export const accountStatuses = {
    active: ACTIVE_ACCOUNT,
    closed: CLOSED_ACCOUNT,
    blocked: BLOCKED_ACCOUNT,
    requested: REQUESTED_ACCOUNT
};
