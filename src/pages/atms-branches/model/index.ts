import { BankObject } from 'src/shared/model';

export const data: BankObject[] = [
    {
        objectNumber: 1,
        latitude: 59.95354024191497,
        longitude: 30.309087827396112,
        region: 'Пыталовский',
        location: 'Пыталово',
        street: 'Пыталово',
        microdistrict: 'Новый город',
        buildingNumberHouse: '2',
        houseNumber: '3B',
        objectTypeName: 'branch',
        schedule:
            'Понедельник - Пятница: 9:00-19:00 ' +
            'Cуббота: 10:00-15:00. Воскресенье - выходной'
    },
    {
        objectNumber: 2,
        latitude: 58.953343,
        longitude: 31.308006,
        region: 'Пыталовский',
        location: 'Пыталово',
        street: 'Пыталово',
        buildingNumberHouse: '2',
        houseNumber: '4B',
        objectTypeName: 'branch',
        schedule:
            'Понедельник - Пятница: 10:00-14:00 Cуббота: 11:00-13:00. Воскресенье - выходной'
    },
    {
        objectNumber: 3,
        latitude: 60.953343,
        longitude: 29.309006,
        location: 'Пыталово',
        street: 'Пыталово',
        houseNumber: '4B',
        objectTypeName: 'ATM',
        schedule: 'Без выходных, круглосуточно'
    }
];
