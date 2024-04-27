import {
    EXPIRES_DATE,
    USER_ACCESS_TOKEN,
    USER_ID,
    USER_PHONE,
    USER_REFRESH_TOKEN
} from './constants';
import { AccountCreationData } from 'src/shared/model';
import { ACCOUNT_CARD_RECIEVING, ACCOUNT_CURRENCY, ACCOUNT_TYPE } from 'src/widgets/account-creation/model';


export const localStorageApi = {
    setTokens(accessToken: string, refreshToken: string): void {
        const expiresTime = 2 * 60 * 1000;
        const expiresDate = new Date().getTime() + expiresTime + '';
        localStorage.setItem(USER_ACCESS_TOKEN, accessToken);
        localStorage.setItem(USER_REFRESH_TOKEN, refreshToken);
        localStorage.setItem(EXPIRES_DATE, expiresDate);
    },

    setCustomerData(phone: string, customerId: string): void {
        localStorageApi.setUserId(customerId);
        localStorageApi.setUserPhone(phone)
    },

    setUserPhone(phone: string): void {
        return localStorage.setItem(USER_PHONE, phone);
    },

    setUserId(customerId: string): void {
        return localStorage.setItem(USER_ID, customerId);
    },

    getUserPhone(): string | null {
        return localStorage.getItem(USER_PHONE);
    },

    getUserId(): string | null {
        return localStorage.getItem(USER_ID);
    },

    getAccessToken(): string | null {
        const expiresIn = localStorage.getItem(EXPIRES_DATE);
        if (expiresIn && +expiresIn > Date.now()) {
            return localStorage.getItem(USER_ACCESS_TOKEN);
        } else {
            localStorage.removeItem(USER_ACCESS_TOKEN);
        }
        return null;
    },

    getRefreshToken(): string | null {
        return localStorage.getItem(USER_REFRESH_TOKEN);
    },

    removeUserData(): void {
        localStorage.removeItem(USER_PHONE);
        localStorage.removeItem(USER_ID);
        localStorage.removeItem(USER_ACCESS_TOKEN);
        localStorage.removeItem(USER_REFRESH_TOKEN);
        localStorage.removeItem(EXPIRES_DATE);
    },

//  account creation
    getAccountCreationData(): AccountCreationData {
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
    },

    resetAccountData(): void {
        localStorage.removeItem(ACCOUNT_CARD_RECIEVING);
        localStorage.removeItem(ACCOUNT_CURRENCY);
        localStorage.removeItem(ACCOUNT_TYPE);
    },
}