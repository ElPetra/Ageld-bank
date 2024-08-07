import type {
    Currency,
    CurrencyResponse,
    ProductStatus,
    ProductStatusResponse
} from 'src/shared/model';
import type { SvgIconName } from '../ui';

export const CREDIT_ACCOUNT = 'Кредитный счет';
export const DEBIT_ACCOUNT = 'Дебетовый счет';
export const DEPOSIT_ACCOUNT = 'Депозитный счет';

export const ACCOUNT_NUMBER_REPLACEMENT = '****************';

export type AccountTypeResponse = 'CREDIT' | 'DEBIT' | 'DEPOSIT';
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
    type: AccountTypeResponse;
    currencyName: CurrencyResponse;
    status: ProductStatusResponse;
    accountBalance: number;
    createdAt: string;
    closedAt: string;
    blockReason: null | string;
    blockComment: null | string;
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

export interface AccountResponse {
    accountNumber: string;
    type: AccountTypeResponse;
    accountBalance: number;
    status: ProductStatusResponse;
    currencyName: CurrencyResponse;
    masterAccount: boolean;
    nameAccount: null | string;
}

export const accountTypes: Record<AccountType, string> = {
    credit: CREDIT_ACCOUNT,
    debit: DEBIT_ACCOUNT,
    deposit: DEPOSIT_ACCOUNT
};

export const accountTypesInfo: TypeVariant[] = [
    {
        value: 'credit',
        type: CREDIT_ACCOUNT,
        title: 'Больше денег без лишних вложений',
        icon: 'beach-lady'
    },
    {
        value: 'debit',
        type: DEBIT_ACCOUNT,
        title: 'Откройте счет не выходя из дома',
        icon: 'paper-airplane-lady'
    },
    {
        value: 'deposit',
        type: DEPOSIT_ACCOUNT,
        title: 'Сделайте шаг навстречу мечте',
        icon: 'businessman'
    }
];

interface TypeVariant {
    value: AccountType;
    type: string;
    title: string;
    icon: SvgIconName;
}
