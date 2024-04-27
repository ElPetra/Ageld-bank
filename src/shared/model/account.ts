import type { Currency } from 'src/shared/model';

export interface AccountCreationData {
    type: string;
    currencyName: string;
}

export type Status = 'active' | 'closed' | 'requested' | 'blocked';
export type AccountType = 'master' | 'credit' | 'deposit';

export interface Account {
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
}

export const ACCOUNT_TYPE = 'accountType';
export const ACCOUNT_CURRENCY = 'accountCurrency';
export const ACCOUNT_CARD_RECIEVING = 'accountcard';
export const ACCOUNT_CARD_AGREEMENT = 'agreement';

export const ACCOUNT_NUMBER_REPLACEMENT = '**********';

export const CREDIT_ACCOUNT = 'Кредитный счет';
export const DEPOSIT_ACCOUNT = 'Депозитный счет';
export const CURRENT_ACCOUNT = 'Текущий счет';

export const ACTIVE_ACCOUNT = 'Активный';
export const CLOSED_ACCOUNT = 'Закрытый';
export const BLOCKED_ACCOUNT = 'Заблокированный';
export const REQUESTED_ACCOUNT = 'Заявка на открытие счета';

export const CREATE_ACCOUNT = 'Открыть счет';

export const CREATE_CURRENT_ACCOUNT_TITLE = 'Откройте счет не выходя из дома';
export const CREATE_CREDIT_ACCOUNT_TITLE = 'Больше денег без лишних вложений';
export const CREATE_DEPOSIT_ACCOUNT_TITLE = 'Сделайте шаг навстречу мечте';

export const accountTypes = {
    credit: CREDIT_ACCOUNT,
    deposit: DEPOSIT_ACCOUNT,
    current: CURRENT_ACCOUNT
};

export const accountStatuses = {
    active: ACTIVE_ACCOUNT,
    closed: CLOSED_ACCOUNT,
    blocked: BLOCKED_ACCOUNT,
    requested: REQUESTED_ACCOUNT
};
