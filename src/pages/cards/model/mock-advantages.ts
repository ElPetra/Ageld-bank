import { typeCardName } from 'src/shared/model';

import type { CardProductInfo, TypeCard } from 'src/shared/model';

type AdvantageKey = keyof CardProductInfo;

export type AdvantageConfig = {
    key: AdvantageKey,
    title: string,
    description: (value: CardProductInfo[AdvantageKey]) => string
};

export const advantages: AdvantageConfig[] = [
    {
        key: 'typeCard',
        title: 'Тип карты',
        description: (typeCard: CardProductInfo[AdvantageKey]) =>
            typeCardName[typeCard as TypeCard]
    },
    {
        key: 'isVirtual',
        title: 'Виртуальная',
        description: (isVirtual: CardProductInfo[AdvantageKey]) =>
            isVirtual ? 'Да' : 'Нет'
    },
    {
        key: 'level',
        title: 'Уровень премиальности',
        description: (level: CardProductInfo[AdvantageKey]) => level as string
    },
    {
        key: 'feeUse',
        title: 'Плата за использование',
        description: (feeUse: CardProductInfo[AdvantageKey]) => feeUse + ' ₽'
    }
];
export const limits: AdvantageConfig[] = [
    {
        key: 'withdrawLimitDay',
        title: 'Лимит на снятие денег в день',
        description: (withdrawLimitDay: CardProductInfo[AdvantageKey]) =>
            withdrawLimitDay + ' ₽'
    },
    {
        key: 'withdrawLimitMonth',
        title: 'Лимит на снятие денег в месяц',
        description: (withdrawLimitMonth: CardProductInfo[AdvantageKey]) =>
            withdrawLimitMonth + ' ₽'
    },
    {
        key: 'transactionLimitDay',
        title: 'Лимит на сумму переводов в день',
        description: (transactionLimitDay: CardProductInfo[AdvantageKey]) =>
            transactionLimitDay + ' ₽'
    },
    {
        key: 'transactionLimitMonth',
        title: 'Лимит на сумму переводов в месяц',
        description: (transactionLimitMonth: CardProductInfo[AdvantageKey]) =>
            transactionLimitMonth + ' ₽'
    },
    {
        key: 'payLimitDay',
        title: 'Лимит на безналичные платежи в день',
        description: (payLimitDay: CardProductInfo[AdvantageKey]) =>
            payLimitDay + ' ₽'
    },
    {
        key: 'payLimitMonth',
        title: 'Лимит на безналичные платежи в месяц',
        description: (payLimitMonth: CardProductInfo[AdvantageKey]) =>
            payLimitMonth + ' ₽'
    },
    {
        key: 'overWithdrawDay',
        title: 'Лимит на снятие денег в день без комиссии',
        description: (overWithdrawDay: CardProductInfo[AdvantageKey]) =>
            overWithdrawDay + ' ₽'
    },
    {
        key: 'overWithdrawMonth',
        title: 'Лимит на снятие денег в месяц без комиссии',
        description: (overWithdrawMonth: CardProductInfo[AdvantageKey]) =>
            overWithdrawMonth + ' ₽'
    },
    {
        key: 'overTransactionDay',
        title: 'Лимит на сумму переводов в день без комиссии',
        description: (overTransactionDay: CardProductInfo[AdvantageKey]) =>
            overTransactionDay + ' ₽'
    },
    {
        key: 'overTransactionMonth',
        title: 'Лимит на сумму переводов в месяц без комиссии',
        description: (overTransactionMonth: CardProductInfo[AdvantageKey]) =>
            overTransactionMonth + ' ₽'
    },
    {
        key: 'overPayDay',
        title: 'Лимит на безналичные платежи в день без комиссии',
        description: (overPayDay: CardProductInfo[AdvantageKey]) =>
            overPayDay + ' ₽'
    },
    {
        key: 'overPayMonth',
        title: 'Лимит на безналичные платежи в месяц без комиссии',
        description: (overPayMonth: CardProductInfo[AdvantageKey]) =>
            overPayMonth + ' ₽'
    }
];
export const conditions: AdvantageConfig[] = [
    {
        key: 'conditionWithdraw',
        title: 'Комиссия за снятие наличных в банкомате другого банка',
        description: (conditionWithdraw: CardProductInfo[AdvantageKey]) =>
            conditionWithdraw + ' ₽'
    },
    {
        key: 'conditionPartnerWithdraw',
        title: 'Комиссия за снятие наличных в банкомате банка-партнёра',
        description: (
            conditionPartnerWithdraw: CardProductInfo[AdvantageKey]
        ) => conditionPartnerWithdraw + ' ₽'
    },
    {
        key: 'conditionWorldWithdraw',
        title: 'Комиссия за снятие наличных в другой валюте в банкоматах банков за рубежом',
        description: (conditionWorldWithdraw: CardProductInfo[AdvantageKey]) =>
            conditionWorldWithdraw + ' ₽'
    },
    {
        key: 'conditionTransaction',
        title: 'Комиссия за переводы при исчерпании лимита',
        description: (conditionTransaction: CardProductInfo[AdvantageKey]) =>
            conditionTransaction + ' ₽'
    },
    {
        key: 'conditionPay',
        title: 'Комиссия за оплату при исчерпании лимита',
        description: (conditionPay: CardProductInfo[AdvantageKey]) =>
            conditionPay + ' ₽'
    }
];
