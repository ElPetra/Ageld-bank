import { type SvgIconNames } from 'src/shared/ui';

export interface Account {
    status: 'active' | 'closed' | 'blocked';
    id: string;
    balance: string;
    account_number: string;
    currency: Extract<'rub' | 'usd' | 'eur', SvgIconNames>;
    type: 'credit' | 'deposit' | 'current';
    main: boolean;
}

export const accounts: Account[] = [
    {
        status: 'active',
        account_number: '3212131213211111',
        id: 'qwerty_1',
        balance: '550',
        currency: 'rub',
        type: 'credit',
        main: true
    },
    {
        status: 'closed',
        account_number: '3212131213211111',
        id: 'qwerty_2',
        balance: '900',
        currency: 'eur',
        type: 'credit',
        main: false
    },
    {
        status: 'blocked',
        account_number: '3212131213211111',
        id: 'qwerty_3',
        balance: '10000',
        currency: 'usd',
        type: 'deposit',
        main: false
    },
    {
        status: 'active',
        account_number: '321213121322211111',
        id: 'qwerty_4',
        balance: '10000',
        currency: 'usd',
        type: 'deposit',
        main: false
    }
];
