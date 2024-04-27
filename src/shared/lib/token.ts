import { localStorageApi } from '../api';

const customerBaseUrl =
    import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/customer';

export const getActualAccessToken = async (): Promise<string> => {
    const token = localStorageApi.getAccessToken();
    if (!token) {
        const refreshToken = localStorageApi.getRefreshToken();
        if (!refreshToken) {
            throw 'Ошибка Авторизации: refreshToken не найден';
        }
        try {
            const response = await fetch(
                customerBaseUrl + '/auth/refresh_token',
                {
                    method: 'POST',
                    headers: { Refresh: `Bearer ${refreshToken}` }
                }
            );
            const data: { accessToken: string, refreshToken: string } =
                await response.json();
            localStorageApi.setTokens(data.accessToken, data.refreshToken);
            return data.accessToken;
        } catch {
            throw 'Ошибка Авторизации: не удалось обновить токен';
        }
    } else {
        return token;
    }
};
