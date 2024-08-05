export const ATM = 'Банкомат';
export const INFOKIOSK = 'Инфокиоск';
export const MAIN_OFFICE = 'Главный офис';
export const BRANCH = 'Отделение банка';
export const EXCHANGE_OFFICE = 'Обменный пункт';

export const OPTIONS_WORKS = 'Работает';

export const INDIVIDUALS = 'Для физических лиц';
export const LEGAL_ENTITIES = 'Для юридических лиц';

export const objectTypeName = {
    ATM: ATM,
    kiosk: INFOKIOSK,
    head: MAIN_OFFICE,
    branch: BRANCH,
    exchange: EXCHANGE_OFFICE
};

export const segmentName = {
    private: INDIVIDUALS,
    VIP: INDIVIDUALS,
    corporate: LEGAL_ENTITIES,
    small_business: LEGAL_ENTITIES
};

export const options = [
    {
        title: 'Тип объекта',
        checkboxes: [ATM, INFOKIOSK, MAIN_OFFICE, BRANCH, EXCHANGE_OFFICE]
    },
    {
        title: 'Статус работы',
        checkboxes: [OPTIONS_WORKS]
    },
    {
        title: 'По типу клиентов',
        checkboxes: [INDIVIDUALS, LEGAL_ENTITIES]
    }
];

type Segment = keyof typeof segmentName;

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
    region?: string;
    location: string;
    street?: string;
    microdistrict?: string;
    buildingNumberHouse?: string;
    houseNumber: string;
    objectTypeName: ObjectType;
    schedule: ScheduleData;
    phoneNumber: string;
    email?: string;
    segment: Segment;
    coordinates: Coordinates;
}

export interface Coordinates {
    lat: number;
    lon: number;
}

export type ScheduleData = [
    ScheduleDay | string,
    ScheduleDay | string,
    ScheduleDay | string,
    ScheduleDay | string,
    ScheduleDay | string,
    ScheduleDay | string,
    ScheduleDay | string
];

export interface BankObjectResponse {
    object_type: ObjectType;
    object_number: string;
    region?: string;
    area?: string;
    location: string;
    street_type?: string;
    street?: string;
    microdistrict?: string;
    building_number_house?: string;
    house_number: string;
    phone_number: string;
    schedule_data: ScheduleDataResponse;
    email?: string;
    segment: Segment;
    currency_exchange: boolean;
    replenishment: boolean;
    replenishment_without_card: boolean;
    withdrawal: boolean;
    bank_transfer: boolean;
    transfer_between_accounts: boolean;
    credit_take: boolean;
    credit_repayment: boolean;
    insurance: boolean;
    coordinates: CoordinatesResponse;
}

export interface CoordinatesResponse {
    lat: string;
    lon: string;
}

export interface ScheduleDataResponse {
    monday: ScheduleDay | string;
    tuesday: ScheduleDay | string;
    wednesday: ScheduleDay | string;
    thursday: ScheduleDay | string;
    friday: ScheduleDay | string;
    saturday: ScheduleDay | string;
    sunday: ScheduleDay | string;
}

export interface ScheduleDay {
    open: string;
    close: string;
}
