import i18n from 'src/shared/model/i18n';

import type { Currency, ProductStatus } from 'src/shared/model';
import type { SvgIconName } from '../ui';

export const ACCOUNTS_TITLE = i18n.t('Счета');

export const ACCOUNT_NUMBER_REPLACEMENT = '**************';

export const CREATE_ACCOUNT = i18n.t('Открыть счет');
export const GO_TO_ACCOUNT_LIST = i18n.t('Перейти к списку счетов');

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

export const accountTypes: Record<AccountType, string> = {
    credit: 'Кредитный счет',
    debit: 'Дебетовый счет',
    deposit: 'Депозитный счет'
};

export const accountTypesInfo: TypeVariant[] = [
    {
        value: 'credit',
        type: 'Кредитный счет',
        title: 'Больше денег без лишних вложений',
        icon: 'beach-lady'
    },
    {
        value: 'debit',
        type: 'Дебетовый счет',
        title: 'Откройте счет не выходя из дома',
        icon: 'paper-airplane-lady'
    },
    {
        value: 'deposit',
        type: 'Депозитный счет',
        title: 'Сделайте шаг навстречу мечте',
        icon: 'businessman-icon'
    }
];

interface TypeVariant {
    value: AccountType;
    type: string;
    title: string;
    icon: SvgIconName;
}
