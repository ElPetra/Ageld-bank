import type { BankObject } from 'src/shared/model';

export const data: BankObject[] = [
    {
        objectNumber: 1,
        coordinates: {
            lat: 59.927319,
            lon: 30.347129
        },
        region: '',
        location: 'Санкт-Петербург',
        street: 'Большая Московская',
        microdistrict: '',
        buildingNumberHouse: '2',
        houseNumber: '1-3',
        objectTypeName: 'branch',
        phoneNumber: '+7 (800) 200 06 60',
        email: 'info.msk@a-geld.ru',
        segment: 'private',
        schedule: [
            { open: '07:00', close: '18:00' },
            { open: '07:00', close: '18:00' },
            { open: '07:00', close: '18:00' },
            { open: '07:00', close: '18:00' },
            { open: '07:00', close: '18:00' },
            { open: '09:00', close: '18:00' },
            'weekend'
        ]
    },
    {
        objectNumber: 2,
        coordinates: {
            lat: 59.933929,
            lon: 30.362365
        },
        region: '',
        location: 'Санкт-Петербург',
        street: 'Лиговский проспект',
        buildingNumberHouse: '27/7',
        houseNumber: '',
        objectTypeName: 'branch',
        phoneNumber: '+7 (800) 200 06 60',
        segment: 'corporate',
        schedule: [
            { open: '09:00', close: '19:00' },
            { open: '09:00', close: '19:00' },
            { open: '09:00', close: '19:00' },
            { open: '09:00', close: '19:00' },
            { open: '09:00', close: '19:00' },
            { open: '10:00', close: '18:00' },
            'weekend'
        ]
    },
    {
        objectNumber: 3,
        coordinates: {
            lat: 59.92497,
            lon: 30.38246
        },
        location: 'Санкт-Петербург',
        street: 'Невский проспект',
        houseNumber: '180/2',
        objectTypeName: 'ATM',
        phoneNumber: '+7 (800) 200 06 60',
        segment: 'VIP',
        schedule: [
            { open: '07:30', close: '15:00' },
            { open: '07:30', close: '15:00' },
            { open: '07:30', close: '15:00' },
            { open: '07:30', close: '15:00' },
            { open: '07:30', close: '15:00' },
            { open: '09:00', close: '18:00' },
            'weekend'
        ]
    }
];
