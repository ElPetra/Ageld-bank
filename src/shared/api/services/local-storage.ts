import {
    ACCOUNT_CARD_RECIEVING,
    ACCOUNT_CURRENCY,
    ACCOUNT_TYPE
} from 'src/widgets/account-creation/model';
import { type AccountCreationData } from 'src/widgets/account-creation/lib/useAccountCreationForm';
import { type CustomerData } from 'src/shared/model';

import {
    EXPIRES_DATE,
    USER_ACCESS_TOKEN,
    USER_ID,
    USER_PHONE,
    USER_REFRESH_TOKEN
} from './constants';


interface AuthResponse {
    accessToken: string;
    refreshToken: string;
}

//auth

export const setTokens = (res: AuthResponse) => {
    if (res) {
        const { accessToken, refreshToken } = res;
        const expiresTime = 2 * 60 * 1000;
        const expiresDate = new Date().getTime() + expiresTime + '';
        localStorage.setItem(USER_ACCESS_TOKEN, accessToken);
        localStorage.setItem(USER_REFRESH_TOKEN, refreshToken);
        localStorage.setItem(EXPIRES_DATE, expiresDate);
    }
};
export const getTokenExpiresDate = () => {
    return localStorage.getItem(EXPIRES_DATE);
};

export const getAccessToken = () => {
    return localStorage.getItem(USER_ACCESS_TOKEN);
};

export const getRefreshToken = () => {
    return localStorage.getItem(USER_REFRESH_TOKEN);
};

export const removeAuthData = () => {
    localStorage.removeItem(USER_PHONE);
    localStorage.removeItem(USER_ID);
    localStorage.removeItem(USER_ACCESS_TOKEN);
    localStorage.removeItem(USER_REFRESH_TOKEN);
};

export const setUserPhone = (phone: string) => {
    return localStorage.setItem(USER_PHONE, phone);
};

export const getUserPhone = () => {
    return localStorage.getItem(USER_PHONE);
};

export const setUserId = (customerId: string) => {
    return localStorage.setItem(USER_ID, customerId);
};

export const getUserId = () => {
    return localStorage.getItem(USER_ID);
};
export const setCustomerData=(phone: string,customerId: string)=>{
    setUserId(customerId);
    setUserPhone(phone)
}
export const getCustomerData=():CustomerData=>{
    if (
        !(USER_ID in localStorage) ||
        !(USER_PHONE in localStorage)
    ) {
        throw 'Доступно только для зарегистрированных пользователей';
    }
    return {
        [USER_ID]: getUserId()!,
        [USER_PHONE]: getUserPhone()!
    };
}

//account creation

export const getAccountCreationData = (): AccountCreationData => {
    if (
        !(ACCOUNT_CURRENCY in localStorage) ||
        !(ACCOUNT_TYPE in localStorage)
    ) {
        throw 'Неверно указаны данные. Повторите попытку позже';
    }

    return {
        currencyName: localStorage.getItem(ACCOUNT_CURRENCY)!,
        type: localStorage.getItem(ACCOUNT_TYPE)!
    };
};

export const resetAccountData = () => {
    localStorage.removeItem(ACCOUNT_CARD_RECIEVING);
    localStorage.removeItem(ACCOUNT_CURRENCY);
    localStorage.removeItem(ACCOUNT_TYPE);
};
