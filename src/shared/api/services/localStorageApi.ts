import { type AuthResponse } from '../../../../entities/auth/types/auth';
import {
    AUTH_ERROR,
    EXPIRES_KEY,
    REFRESH_KEY,
    TOKEN_KEY,
    USERID_KEY
} from '../../../constants/constants';

export const setTokens = (res: AuthResponse) => {
    if (res.data) {
        const { localId, idToken, refreshToken, expiresIn } = res.data;
        const expiresDate = new Date().getTime() + +expiresIn * 1000 + '';
        localStorage.setItem(USERID_KEY, localId);
        localStorage.setItem(TOKEN_KEY, idToken);
        localStorage.setItem(REFRESH_KEY, refreshToken);
        localStorage.setItem(EXPIRES_KEY, expiresDate);
    } else {
        throw new Error(AUTH_ERROR);
    }
};

export const getAccessToken = () => {
    return localStorage.getItem('accessToken');
};

export const getUserId = () => {
    return localStorage.getItem('uuid');
};

export const getRefreshToken = () => {
    return localStorage.getItem('refreshToken');
};

export const removeAuthData = () => {
    localStorage.removeItem('uuid');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
};
