import { typeFilters } from 'src/widgets/cards/model';

import type { CardInfo } from 'src/widgets/cards/model';

import type React from 'react';
type AdvantageKey = keyof CardInfo;

type AdvantageConfig = {
    key: AdvantageKey,
    title: string,
    description: (value: CardInfo[AdvantageKey]) => React.ReactNode
};

const typesCard = typeFilters;
export const advantages: AdvantageConfig[] = [
    {
        key: 'typeCard',
        title: 'Тип карты',
        description: (typeCard: CardInfo[AdvantageKey]) =>
            Object.keys(typesCard).find(key => typesCard[key] === typeCard)
    },
    {
        key: 'isVirtual',
        title: 'Виртуальная',
        description: (isVirtual: CardInfo[AdvantageKey]) =>
            isVirtual ? 'Да' : 'Нет'
    },
    {
        key: 'level',
        title: 'Уровень премиальности',
        description: (level: CardInfo[AdvantageKey]) => level
    },
    {
        key: 'feeUse',
        title: 'Плата за использование',
        description: (feeUse: CardInfo[AdvantageKey]) => feeUse + ' ₽'
    }
];
export const limits: AdvantageConfig[] = [
    {
        key: 'withdrawLimitDay',
        title: 'Лимит на снятие денег в день',
        description: (withdrawLimitDay: CardInfo[AdvantageKey]) =>
            withdrawLimitDay
    },
    {
        key: 'withdrawLimitMonth',
        title: 'Лимит на снятие денег в месяц',
        description: (withdrawLimitMonth: CardInfo[AdvantageKey]) =>
            withdrawLimitMonth
    },
    {
        key: 'transactionLimitDay',
        title: 'Лимит на сумму переводов в день',
        description: (transactionLimitDay: CardInfo[AdvantageKey]) =>
            transactionLimitDay
    },
    {
        key: 'transactionLimitMonth',
        title: 'Лимит на сумму переводов в месяц',
        description: (transactionLimitMonth: CardInfo[AdvantageKey]) =>
            transactionLimitMonth
    },
    {
        key: 'payLimitDay',
        title: 'Лимит на безналичные платежи в день',
        description: (payLimitDay: CardInfo[AdvantageKey]) => payLimitDay
    },
    {
        key: 'payLimitMonth',
        title: 'Лимит на безналичные платежи в месяц',
        description: (payLimitMonth: CardInfo[AdvantageKey]) => payLimitMonth
    },
    {
        key: 'overWithdrawDay',
        title: 'Лимит на снятие денег в день без комиссии',
        description: (overWithdrawDay: CardInfo[AdvantageKey]) =>
            overWithdrawDay
    },
    {
        key: 'overWithdrawMonth',
        title: 'Лимит на снятие денег в месяц без комиссии',
        description: (overWithdrawMonth: CardInfo[AdvantageKey]) =>
            overWithdrawMonth
    },
    {
        key: 'overTransactionDay',
        title: 'Лимит на сумму переводов в день без комиссии',
        description: (overTransactionDay: CardInfo[AdvantageKey]) =>
            overTransactionDay
    },
    {
        key: 'overTransactionMonth',
        title: 'Лимит на сумму переводов в месяц без комиссии',
        description: (overTransactionMonth: CardInfo[AdvantageKey]) =>
            overTransactionMonth
    },
    {
        key: 'overPayDay',
        title: 'Лимит на безналичные платежи в день без комиссии',
        description: (overPayDay: CardInfo[AdvantageKey]) => overPayDay
    },
    {
        key: 'overPayMonth',
        title: 'Лимит на безналичные платежи в месяц без комиссии',
        description: (overPayMonth: CardInfo[AdvantageKey]) => overPayMonth
    }
];
export const conditions: AdvantageConfig[] = [
    {
        key: 'conditionWithdraw',
        title: 'Комиссия за снятие наличных в банкомате другого банка',
        description: (conditionWithdraw: CardInfo[AdvantageKey]) =>
            conditionWithdraw
    },
    {
        key: 'conditionPartnerWithdraw',
        title: 'Комиссия за снятие наличных в банкомате банка-партнёра',
        description: (conditionPartnerWithdraw: CardInfo[AdvantageKey]) =>
            conditionPartnerWithdraw
    },
    {
        key: 'conditionWorldWithdraw',
        title: 'Комиссия за снятие наличных в другой валюте в банкоматах банков за рубежом',
        description: (conditionWorldWithdraw: CardInfo[AdvantageKey]) =>
            conditionWorldWithdraw
    },
    {
        key: 'conditionTransaction',
        title: 'Комиссия за переводы при исчерпании лимита',
        description: (conditionTransaction: CardInfo[AdvantageKey]) =>
            conditionTransaction
    },
    {
        key: 'conditionPay',
        title: 'Комиссия за оплату при исчерпании лимита',
        description: (conditionPay: CardInfo[AdvantageKey]) => conditionPay
    }
];
