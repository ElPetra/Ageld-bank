import type { SvgIconName } from 'src/shared/ui';
import type { Currency } from 'src/shared/model';

import type { ProductStatus } from 'src/shared/model';

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
        name: 'A-Geld бессрочный',
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
        name: 'A-Geld бессрочный',
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
        name: 'A-Geld бессрочный',
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
