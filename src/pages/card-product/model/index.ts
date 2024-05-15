import { typeCard } from 'src/shared/model';

import type { CardProductDetails, CardType } from 'src/shared/model';

type AdvantageKey = keyof CardProductDetails;

export type AdvantageConfig = {
    key: AdvantageKey,
    title: string,
    description: (value: CardProductDetails[AdvantageKey]) => string
};

export const advantages: AdvantageConfig[] = [
    {
        key: 'type',
        title: 'Тип карты',
        description: (type: CardProductDetails[AdvantageKey]) =>
            typeCard[type as CardType]
    },
    {
        key: 'isVirtual',
        title: 'Виртуальная',
        description: (isVirtual: CardProductDetails[AdvantageKey]) =>
            isVirtual ? 'Да' : 'Нет'
    },
    {
        key: 'level',
        title: 'Уровень премиальности',
        description: (level: CardProductDetails[AdvantageKey]) =>
            level as string
    },
    {
        key: 'feeUse',
        title: 'Плата за использование',
        description: (feeUse: CardProductDetails[AdvantageKey]) => feeUse + ' ₽'
    }
];
export const limits: AdvantageConfig[] = [
    {
        key: 'withdrawLimitDay',
        title: 'Лимит на снятие денег в день',
        description: (withdrawLimitDay: CardProductDetails[AdvantageKey]) =>
            withdrawLimitDay + ' ₽'
    },
    {
        key: 'withdrawLimitMonth',
        title: 'Лимит на снятие денег в месяц',
        description: (withdrawLimitMonth: CardProductDetails[AdvantageKey]) =>
            withdrawLimitMonth + ' ₽'
    },
    {
        key: 'transactionLimitDay',
        title: 'Лимит на сумму переводов в день',
        description: (transactionLimitDay: CardProductDetails[AdvantageKey]) =>
            transactionLimitDay + ' ₽'
    },
    {
        key: 'transactionLimitMonth',
        title: 'Лимит на сумму переводов в месяц',
        description: (
            transactionLimitMonth: CardProductDetails[AdvantageKey]
        ) => transactionLimitMonth + ' ₽'
    },
    {
        key: 'payLimitDay',
        title: 'Лимит на безналичные платежи в день',
        description: (payLimitDay: CardProductDetails[AdvantageKey]) =>
            payLimitDay + ' ₽'
    },
    {
        key: 'payLimitMonth',
        title: 'Лимит на безналичные платежи в месяц',
        description: (payLimitMonth: CardProductDetails[AdvantageKey]) =>
            payLimitMonth + ' ₽'
    },
    {
        key: 'overWithdrawDay',
        title: 'Лимит на снятие денег в день без комиссии',
        description: (overWithdrawDay: CardProductDetails[AdvantageKey]) =>
            overWithdrawDay + ' ₽'
    },
    {
        key: 'overWithdrawMonth',
        title: 'Лимит на снятие денег в месяц без комиссии',
        description: (overWithdrawMonth: CardProductDetails[AdvantageKey]) =>
            overWithdrawMonth + ' ₽'
    },
    {
        key: 'overTransactionDay',
        title: 'Лимит на сумму переводов в день без комиссии',
        description: (overTransactionDay: CardProductDetails[AdvantageKey]) =>
            overTransactionDay + ' ₽'
    },
    {
        key: 'overTransactionMonth',
        title: 'Лимит на сумму переводов в месяц без комиссии',
        description: (overTransactionMonth: CardProductDetails[AdvantageKey]) =>
            overTransactionMonth + ' ₽'
    },
    {
        key: 'overPayDay',
        title: 'Лимит на безналичные платежи в день без комиссии',
        description: (overPayDay: CardProductDetails[AdvantageKey]) =>
            overPayDay + ' ₽'
    },
    {
        key: 'overPayMonth',
        title: 'Лимит на безналичные платежи в месяц без комиссии',
        description: (overPayMonth: CardProductDetails[AdvantageKey]) =>
            overPayMonth + ' ₽'
    }
];
export const conditions: AdvantageConfig[] = [
    {
        key: 'conditionWithdraw',
        title: 'Комиссия за снятие наличных в банкомате другого банка',
        description: (conditionWithdraw: CardProductDetails[AdvantageKey]) =>
            conditionWithdraw + ' ₽'
    },
    {
        key: 'conditionPartnerWithdraw',
        title: 'Комиссия за снятие наличных в банкомате банка-партнёра',
        description: (
            conditionPartnerWithdraw: CardProductDetails[AdvantageKey]
        ) => conditionPartnerWithdraw + ' ₽'
    },
    {
        key: 'conditionWorldWithdraw',
        title: 'Комиссия за снятие наличных в другой валюте в банкоматах банков за рубежом',
        description: (
            conditionWorldWithdraw: CardProductDetails[AdvantageKey]
        ) => conditionWorldWithdraw + ' ₽'
    },
    {
        key: 'conditionTransaction',
        title: 'Комиссия за переводы при исчерпании лимита',
        description: (conditionTransaction: CardProductDetails[AdvantageKey]) =>
            conditionTransaction + ' ₽'
    },
    {
        key: 'conditionPay',
        title: 'Комиссия за оплату при исчерпании лимита',
        description: (conditionPay: CardProductDetails[AdvantageKey]) =>
            conditionPay + ' ₽'
    }
];
