import i18next from 'i18next';
export const objectTypeName = {
    ATM: i18next.t('Банкомат'),
    kiosk: i18next.t('Инфокиоск'),
    head: i18next.t('Главный офис'),
    branch: i18next.t('Отделение банка'),
    exchange: i18next.t('Обменный пункт')
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
