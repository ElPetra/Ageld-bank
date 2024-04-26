import type { USER_ID, USER_PHONE } from '../api/services/constants';

export interface CustomerInfo {
    firstName: string;
    lastName: string;
    middleName: string;
    phoneNumber: string;
    email: string;
    birthDate: string;
    childCount: number;
    registrationDateBank: string;
    status: string;
}

export interface CustomerData {
    [USER_ID]: string;
    [USER_PHONE]: string;
}
