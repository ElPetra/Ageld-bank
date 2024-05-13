import { CARD_NUMBER_REPLACEMENT, typeCardName } from 'src/shared/model';

import type { Card, Detail, TypeCard } from 'src/shared/model';
type AdvantageKey = keyof Card;

export type AdvantageCardConfig = {
    key: AdvantageKey,
    title: string,
    description: (value: Card[AdvantageKey]) => string
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
        key: 'cardNumber',
        title: 'Номер карты',
        description: (cardNumber: Card[AdvantageKey]) => {
            return String(cardNumber).replace(
                /^(.{4})(.*)(.{4})$/,
                `$1 ${CARD_NUMBER_REPLACEMENT}$3`
            );
        }
    },
    {
        key: 'typeCard',
        title: 'Тип карты',
        description: (typeCard: Card[AdvantageKey]) =>
            typeCardName[typeCard as TypeCard]
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
        description: (level: Card[AdvantageKey]) => level as string
    },
    {
        key: 'paymentSystem',
        title: 'Платежная система',
        description: (paymentSystem: Card[AdvantageKey]) =>
            paymentSystem as string
    },
    {
        key: 'expirationAt',
        title: 'Срок действия карты',
        description: (expirationAt: Card[AdvantageKey]) =>
            new Date(expirationAt as string).toISOString().split('T')[0]
    }
];
export const data: Card[] = [
    {
        cardId: '0000111122223333',
        cardName: 'Базовая',
        customerId: 1,
        accountNumber: 'ACC12345',
        userLimit: 1,
        cardProductId: 'CP1',
        cardNumber: '1234567890123456',
        balance: 1000,
        cvvEncrypted: '123',
        pinCodeHash: 'hashed_pin1',
        statusName: 'ACTIVE',
        expirationAt: '2025-03-18 12:00:00+00',
        createdAt: '2024-03-18 12:00:00+00',
        paymentSystem: 'МИР',
        isVirtual: true,
        level: 'CLASSIC',
        typeCard: 'DEBIT'
    },
    {
        cardId: '0000111122223333',
        cardName: 'Дополнительная',
        customerId: 2,
        accountNumber: 'ACC54321',
        userLimit: 2,
        cardProductId: 'CP2',
        cardNumber: '0987654321098765',
        balance: 500,
        cvvEncrypted: '123',
        pinCodeHash: 'hashed_pin2',
        statusName: 'BLOCKED',
        expirationAt: '2025-03-18 12:00:00+00',
        createdAt: '2024-03-18 12:00:00+00',
        paymentSystem: 'VISA',
        isVirtual: false,
        level: 'GOLD',
        typeCard: 'CREDIT'
    }
];
