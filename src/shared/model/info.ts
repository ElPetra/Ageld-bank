export const infoBaseUrl = import.meta.env.VITE_BASEURL_INFO + '/api/v1/info';

export const objectTypeName = {
    ATM: 'Банкомат',
    kiosk: 'Инфокиоск',
    head: 'Главный офис',
    branch: 'Отделение банка',
    exchange: 'Обменный пункт'
};

type ObjectType = keyof typeof objectTypeName;

export interface BankInfo {
    objectTypeName: ObjectType;
    location: string;
    street_type: string;
    street: string;
    houseNumber: string;
    schedule: string;
}

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
    objectTypeName: ObjectType;
    schedule: string;
}
