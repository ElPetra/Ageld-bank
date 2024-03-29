import { type SvgIconNames } from 'src/shared/ui';

export type Status = 'active' | 'closed' | 'requested' | 'blocked';

export interface Account {
    status: Status;
    id: string;
    balance: string;
    account_number: string;
    currency: Extract<'rub' | 'usd' | 'eur', SvgIconNames>;
    type: 'credit' | 'deposit' | 'current';
    main: boolean;
    created: Date;
    contract_number: string;
    closed?: Date;
    block_reason?: string;
}

export const accounts: Account[] = [
    {
        status: 'active',
        account_number: '3212131213211111',
        id: 'qwerty_1',
        balance: '550',
        currency: 'rub',
        type: 'credit',
        main: true,
        created: new Date(),
        contract_number: '12312312132211212312'
    },
    {
        status: 'closed',
        account_number: '3212131213211111',
        id: 'qwerty_2',
        balance: '900',
        currency: 'eur',
        type: 'credit',
        main: false,
        created: new Date(),
        contract_number: '12312312132211212312',
        closed: new Date()
    },
    {
        status: 'blocked',
        account_number: '3212131213211111',
        id: 'qwerty_3',
        balance: '10000',
        currency: 'usd',
        type: 'deposit',
        main: false,
        created: new Date(),
        contract_number: '12312312132211212312',
        block_reason: 'Плохо себя вёл'
    },
    {
        status: 'active',
        account_number: '321213121322211111',
        id: 'qwerty_4',
        balance: '10000',
        currency: 'usd',
        type: 'deposit',
        main: false,
        created: new Date(),
        contract_number: '12312312132211212312'
    }
];
