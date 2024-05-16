import { CARD_NUMBER_REPLACEMENT, typeCard } from 'src/shared/model';

import type { CardType, CardDetails, Detail } from 'src/shared/model';
type AdvantageKey = keyof CardDetails;

export type AdvantageCardConfig = {
    key: AdvantageKey,
    title: string,
    description: (value: CardDetails[AdvantageKey]) => string
};
export const infoItems: Detail[] = [
    {
        id: 1,
        name: 'Реквизиты карты',
        icon: 'bill-details'
    },
    {
        id: 2,
        name: 'Тарифы и комиссии',
        icon: 'briefcase-icon'
    },
    {
        id: 3,
        name: 'Лимиты',
        icon: 'settings-icon'
    },
    {
        id: 4,
        name: 'История операций',
        icon: 'bill-details'
    },
    {
        id: 5,
        name: 'Выписка',
        icon: 'bill-details'
    }
];
export const actionsItems: Detail[] = [
    {
        id: 1,
        name: 'Пополнить',
        icon: 'add-to-card'
    },
    {
        id: 2,
        name: 'Изменить пин-код',
        icon: 'password-icon'
    },
    {
        id: 3,
        name: 'Запретить операции',
        icon: 'forbid-operations'
    },
    {
        id: 4,
        name: 'Заблокировать карту',
        icon: 'lock-icon'
    }
];
export const advantagesItems: AdvantageCardConfig[] = [
    {
        key: 'number',
        title: 'Номер карты',
        description: (number: CardDetails[AdvantageKey]) => {
            return String(number).replace(
                /^(.{4})(.*)(.{4})$/,
                `$1 ${CARD_NUMBER_REPLACEMENT}$3`
            );
        }
    },
    {
        key: 'type',
        title: 'Тип карты',
        description: (type: CardDetails[AdvantageKey]) =>
            typeCard[type as CardType]
    },
    {
        key: 'isVirtual',
        title: 'Виртуальная',
        description: (isVirtual: CardDetails[AdvantageKey]) =>
            isVirtual ? 'Да' : 'Нет'
    },
    {
        key: 'level',
        title: 'Уровень премиальности',
        description: (level: CardDetails[AdvantageKey]) => level as string
    },
    {
        key: 'paymentSystem',
        title: 'Платежная система',
        description: (paymentSystem: CardDetails[AdvantageKey]) =>
            paymentSystem as string
    },
    {
        key: 'expirationAt',
        title: 'Срок действия карты',
        description: (expirationAt: CardDetails[AdvantageKey]) =>
            new Date(expirationAt as string).toISOString().split('T')[0]
    }
];
export const data: CardDetails[] = [
    {
        name: 'Базовая',
        number: 'ACC12345',
        balance: 1000,
        status: 'active',
        expirationAt: '2025-03-18 12:00:00+00',
        paymentSystem: 'МИР',
        isVirtual: true,
        level: 'CLASSIC',
        type: 'DEBIT',
        image: ''
    },
    {
        name: 'Дополнительная',
        number: 'ACC54321',
        balance: 500,
        status: 'active',
        expirationAt: '2025-03-18 12:00:00+00',
        paymentSystem: 'VISA',
        isVirtual: false,
        level: 'GOLD',
        type: 'CREDIT',
        image: ''
    }
];
