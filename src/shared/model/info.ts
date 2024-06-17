import i18n from 'src/shared/model/i18n';

export const objectTypeName = {
    ATM: i18n.t('Банкомат'),
    kiosk: i18n.t('Инфокиоск'),
    head: i18n.t('Главный офис'),
    branch: i18n.t('Отделение банка'),
    exchange: i18n.t('Обменный пункт')
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
