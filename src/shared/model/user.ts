import i18n from 'src/shared/model/i18n';

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

export const DO_YOU_HAVE_AN_ACCOUNT = i18n.t('У вас уже есть аккаунт?');
export const DO_YOU_NOT_HAVE_AN_ACCOUNT = i18n.t('У вас уже есть аккаунт?');
export const SIGN_UP = i18n.t('Зарегистрируйтесь');
export const SIGN_IN = i18n.t('Авторизуйтесь');
