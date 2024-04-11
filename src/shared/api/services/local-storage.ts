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
