import type { Card } from 'src/shared/model';

export const data: Card[] = [
    {
        cardId: 1,
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
        createdAt: '2024-03-18 12:00:00+00'
    },
    {
        cardId: 2,
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
        createdAt: '2024-03-18 12:00:00+00'
    }
];
