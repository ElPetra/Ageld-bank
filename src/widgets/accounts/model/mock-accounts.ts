import type { Account } from 'src/shared/model';

export const accounts: Account[] = [
    {
        status: 'active',
        number: '3212131213211111',
        id: 'qwerty_1',
        balance: '550',
        currency: 'rub',
        type: 'credit',
        master: true,
        created: new Date(),
        contractNumber: '12312312132211212312'
    },
    {
        status: 'closed',
        number: '3212131213211111',
        id: 'qwerty_2',
        balance: '900',
        currency: 'eur',
        type: 'credit',
        master: false,
        created: new Date(),
        contractNumber: '12312312132211212312',
        closed: new Date()
    },
    {
        status: 'blocked',
        number: '3212131213211111',
        id: 'qwerty_3',
        balance: '10000',
        currency: 'usd',
        type: 'deposit',
        master: false,
        created: new Date(),
        contractNumber: '12312312132211212312',
        blockReason: 'Плохо себя вёл'
    },
    {
        status: 'active',
        number: '321213121322211111',
        id: 'qwerty_4',
        balance: '10000',
        currency: 'usd',
        type: 'deposit',
        master: false,
        created: new Date(),
        contractNumber: '12312312132211212312'
    }
];
