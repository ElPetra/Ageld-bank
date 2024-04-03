export type Status = 'active' | 'closed' | 'requested' | 'blocked';

export interface Account {
    id: string;
    number: string;
    type: 'credit' | 'deposit' | 'current';
    balance: string;
    status: Status;
    currency: 'rub' | 'usd' | 'eur';
    master: boolean;
    created: Date;
    closed?: Date;
    blockReason?: string;
    contractNumber: string;
}

export const ACCOUNT_NUMBER_REPLACEMENT = '**********';

export const CREDIT_ACCOUNT = 'Кредитный счет';
export const DEPOSIT_ACCOUNT = 'Депозитный счет';
export const CURRENT_ACCOUNT = 'Текущий счет';

export const ACTIVE_ACCOUNT = 'Активный';
export const CLOSED_ACCOUNT = 'Закрытый';
export const BLOCKED_ACCOUNT = 'Заблокированный';
export const REQUESTED_ACCOUNT = 'Заявка на открытие счета';

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
