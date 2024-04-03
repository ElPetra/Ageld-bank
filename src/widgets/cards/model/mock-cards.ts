import { type SvgIconNames } from 'src/shared/ui';

export type Status = 'active' | 'closed' | 'requested' | 'blocked';

export interface Card {
    status: Status;
    name: string;
    description: string;
    id: string;
    balance: string;
    currency: Extract<'rub' | 'usd' | 'eur', SvgIconNames>;
    type: 'Кредитная' | 'Дебетовая';
    main: boolean;
    created: Date;
}

export const cards: Card[] = [
    {
        status: 'active',
        name: 'A-GELD Classic',
        description: 'Кредитная карта. Надежная карта на каждый день. ',
        id: '1',
        balance: '550',
        currency: 'rub',
        type: 'Кредитная',
        main: true,
        created: new Date()
    },
    {
        status: 'active',
        name: 'A-GELD Gold',
        description:
            'Кредитная карта. Совершайте транзакции в любой стране мира',
        id: '2',
        balance: '900',
        currency: 'eur',
        type: 'Кредитная',
        main: false,
        created: new Date()
    },
    {
        status: 'active',
        name: 'A-GELD Platinum',
        description:
            'Дебетовая карта. Больше возможностей для транзакций по всему миру',
        id: '3',
        balance: '10000',
        currency: 'usd',
        type: 'Дебетовая',
        main: false,
        created: new Date()
    },
    {
        status: 'active',
        name: 'A-GELD Premium',
        description: 'Дебетовая карта. Карта для активных путешественников',
        id: '4',
        balance: '10000',
        currency: 'usd',
        type: 'Дебетовая',
        main: false,
        created: new Date()
    },
    {
        status: 'active',
        name: 'A-GELD Classic',
        description: 'Кредитная карта. Надежная карта на каждый день. ',
        id: '5',
        balance: '550',
        currency: 'rub',
        type: 'Кредитная',
        main: true,
        created: new Date()
    },
    {
        status: 'active',
        name: 'A-GELD Gold',
        description:
            'Кредитная карта. Совершайте транзакции в любой стране мира',
        id: '6',
        balance: '900',
        currency: 'eur',
        type: 'Кредитная',
        main: false,
        created: new Date()
    },
    {
        status: 'active',
        name: 'A-GELD Platinum',
        description:
            'Дебетовая карта. Больше возможностей для транзакций по всему миру',
        id: '7',
        balance: '10000',
        currency: 'usd',
        type: 'Дебетовая',
        main: false,
        created: new Date()
    },
    {
        status: 'active',
        name: 'A-GELD Premium',
        description: 'Дебетовая карта. Карта для активных путешественников',
        id: '8',
        balance: '10000',
        currency: 'usd',
        type: 'Дебетовая',
        main: false,
        created: new Date()
    },
    {
        status: 'active',
        name: 'A-GELD Premium',
        description: 'Дебетовая карта. Карта для активных путешественников',
        id: '9',
        balance: '10000',
        currency: 'usd',
        type: 'Дебетовая',
        main: false,
        created: new Date()
    },
    {
        status: 'active',
        name: 'A-GELD Classic',
        description: 'Кредитная карта. Надежная карта на каждый день. ',
        id: '10',
        balance: '550',
        currency: 'rub',
        type: 'Кредитная',
        main: true,
        created: new Date()
    },
    {
        status: 'active',
        name: 'A-GELD Gold',
        description:
            'Кредитная карта. Совершайте транзакции в любой стране мира',
        id: '11',
        balance: '900',
        currency: 'eur',
        type: 'Кредитная',
        main: false,
        created: new Date()
    },
    {
        status: 'active',
        name: 'A-GELD Platinum',
        description:
            'Дебетовая карта. Больше возможностей для транзакций по всему миру',
        id: '12',
        balance: '10000',
        currency: 'usd',
        type: 'Дебетовая',
        main: false,
        created: new Date()
    }
];
