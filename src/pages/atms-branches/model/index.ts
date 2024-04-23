export const objectTypeName = {
    ATM: 'Банкомат',
    kiosk: 'Инфокиоск',
    head: 'Главный офис',
    branch: 'Отделение банка',
    exchange: 'Обменный пункт'
};

type objectType = keyof typeof objectTypeName;

export interface BankObject {
    objectNumber: number;
    latitude: number;
    longitude: number;
    region?: string;
    location: string;
    street?: string;
    microdistrict?: string;
    buildingNumberHouse?: string;
    houseNumber: string;
    objectTypeName: objectType;
    schedule: string;
}

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
        latitude: 59.953343,
        longitude: 30.308006,
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
        latitude: 59.953343,
        longitude: 30.309006,
        location: 'Пыталово',
        street: 'Пыталово',
        houseNumber: '4B',
        objectTypeName: 'ATM',
        schedule: 'Без выходных, круглосуточно'
    }
];
