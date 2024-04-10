import {
    getAccessToken,
    getRefreshToken,
    getTokenExpiresDate,
    setTokens
} from '../api/services/localStorageApi';

export const getActualAccessToken = async (): Promise<string> => {
    //Todo: обработать ошибки нормально
    const expiresIn = getTokenExpiresDate();
    let token = getAccessToken();
    if (!expiresIn || !token) {
        throw 'Ошибка Авторизации';
    }
    if (+expiresIn < Date.now()) {
        const refresherToken = getRefreshToken();
        if (!refresherToken) {
            throw 'Ошибка Авторизации';
        }
        const refreshAnswer = await fetch(
            'http://172.17.1.76:8082/api/v1/customer/auth/refresh_token',

            {
                method: 'POST',
                headers: { Refresh: `Bearer ${refresherToken}` }
            }
        )
            .then(async data => await data.json())
            .catch(() => {
                throw 'Ошибка Авторизации';
            });
        const { accessToken, refreshToken } = refreshAnswer;
        setTokens({ accessToken, refreshToken });
    } else {
        return token;
    }
    token = getAccessToken();
    if (!token) {
        throw 'Ошибка Авторизации';
    }
    return token;
};
