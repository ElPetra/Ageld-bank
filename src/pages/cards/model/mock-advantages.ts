import type { Card } from 'src/widgets/cards/model';

import type React from 'react';
type AdvantageKey = keyof Card;

type AdvantageConfig = {
    key: AdvantageKey,
    title: string,
    description: (value: Card[AdvantageKey]) => React.ReactNode
};

export const advantages: AdvantageConfig[] = [
    {
        key: 'type',
        title: 'Тип карты',
        description: (type: Card[AdvantageKey]) => type.toString()
    },
    {
        key: 'isVirtual',
        title: 'Виртуальная',
        description: (isVirtual: Card[AdvantageKey]) =>
            isVirtual ? 'Да' : 'Нет'
    },
    {
        key: 'level',
        title: 'Уровень премиальности',
        description: (level: Card[AdvantageKey]) => level.toString()
    },
    {
        key: 'fee',
        title: 'Плата за использование',
        description: (fee: Card[AdvantageKey]) => fee + ' ₽'
    },
    {
        key: 'limit',
        title: 'Лимит по карте',
        description: (limit: Card[AdvantageKey]) => limit.toString()
    },
    {
        key: 'condition',
        title: 'Условия по снятиям денежных средств',
        description: (condition: Card[AdvantageKey]) => condition.toString()
    }
];
