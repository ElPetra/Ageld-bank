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

export enum AuthStatus {
    Loading = 'Loading',
    SignedIn = 'SignedIn',
    SignedOut = 'SignedOut'
}
export const MAPS = 'Карты';
export const LOANS_TITLE = 'Кредиты';
export const ACCOUNTS_TITLE = 'Счета';
export const TRANSFERS_TITLE = 'Переводы';
export const PAYMENTS_TITLE = 'Платежи';
