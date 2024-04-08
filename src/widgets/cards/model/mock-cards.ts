export interface Card {
    name: string;
    description: string;
    id: string;
    payment: string;
    type: 'Кредитная' | 'Дебетовая';
    created: Date;
}

export const cards: Card[] = [
    {
        name: 'A-GELD Classic',
        description: 'Кредитная карта. Надежная карта на каждый день. ',
        id: '1',
        payment: 'МИР',
        type: 'Кредитная',
        created: new Date()
    },
    {
        name: 'A-GELD Gold',
        description:
            'Кредитная карта. Совершайте транзакции в любой стране мира',
        id: '2',
        payment: 'МИР',
        type: 'Кредитная',
        created: new Date()
    },
    {
        name: 'A-GELD Platinum',
        description:
            'Дебетовая карта. Больше возможностей для транзакций по всему миру',
        id: '3',
        payment: 'МИР',
        type: 'Дебетовая',
        created: new Date()
    },
    {
        name: 'A-GELD Premium',
        description: 'Дебетовая карта. Карта для активных путешественников',
        id: '4',
        payment: 'VISA',
        type: 'Дебетовая',
        created: new Date()
    },
    {
        name: 'A-GELD Classic',
        description: 'Кредитная карта. Надежная карта на каждый день. ',
        id: '5',
        payment: 'VISA',
        type: 'Кредитная',
        created: new Date()
    },
    {
        name: 'A-GELD Gold',
        description:
            'Кредитная карта. Совершайте транзакции в любой стране мира',
        id: '6',
        payment: 'VISA',
        type: 'Кредитная',
        created: new Date()
    },
    {
        name: 'A-GELD Platinum',
        description:
            'Дебетовая карта. Больше возможностей для транзакций по всему миру',
        id: '7',
        payment: 'МИР',
        type: 'Дебетовая',
        created: new Date()
    },
    {
        name: 'A-GELD Premium',
        description: 'Дебетовая карта. Карта для активных путешественников',
        id: '8',
        payment: 'МИР',
        type: 'Дебетовая',
        created: new Date()
    },
    {
        name: 'A-GELD Premium',
        description: 'Дебетовая карта. Карта для активных путешественников',
        id: '9',
        payment: 'МИР',
        type: 'Дебетовая',
        created: new Date()
    },
    {
        name: 'A-GELD Classic',
        description: 'Кредитная карта. Надежная карта на каждый день. ',
        id: '10',
        payment: 'VISA',
        type: 'Кредитная',
        created: new Date()
    },
    {
        name: 'A-GELD Gold',
        description:
            'Кредитная карта. Совершайте транзакции в любой стране мира',
        id: '11',
        payment: 'VISA',
        type: 'Кредитная',
        created: new Date()
    },
    {
        name: 'A-GELD Platinum',
        description:
            'Дебетовая карта. Больше возможностей для транзакций по всему миру',
        id: '12',
        payment: 'VISA',
        type: 'Дебетовая',
        created: new Date()
    }
];
