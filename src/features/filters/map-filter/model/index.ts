const CURRENCY_EXCHANGE = 'Обмен валюты';
const ATM = 'Банкомат';
const INSURANCE = 'Страхование';
const BANK_TRANSFERS = 'Банковские переводы';
const DEPOSITS = 'Депозиты';
const LOANS = 'Кредиты';
const WITHDRAWAL_FROM_CARD = 'Снятие с карты';
const TOP_CARD_ACCOUNT = 'Пополнение карты/счета';

export const options = [
    {
        title: 'Тип объекта',
        checkboxes: [
            { label: 'Банкоматы' },
            { label: 'Инфокиоск' },
            { label: 'Главный офис' },
            { label: 'Отделения банка' },
            { label: 'Обменый пункт' }
        ]
    },
    {
        title: 'Статус работы',
        checkboxes: [{ label: 'Работает' }, { label: 'Закрыт' }]
    }
    // {
    //     title: 'Услуги отделения',
    //     checkboxes: [
    //         { label: CURRENCY_EXCHANGE },
    //         { label: ATM },
    //         { label: INSURANCE },
    //         { label: BANK_TRANSFERS },
    //         { label: DEPOSITS },
    //         { label: LOANS },
    //         { label: WITHDRAWAL_FROM_CARD },
    //         { label: TOP_CARD_ACCOUNT }
    //     ]
    // }
];
