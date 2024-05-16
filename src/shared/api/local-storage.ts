const USER_ACCESS_TOKEN = 'accessToken';
const USER_REFRESH_TOKEN = 'refreshToken';
const EXPIRES_DATE = 'expiresTime';

export const localStorageApi = {
    setTokens(accessToken: string, refreshToken: string): void {
        const expiresTime = 2 * 60 * 1000;
        const expiresDate = new Date().getTime() + expiresTime + '';
        localStorage.setItem(USER_ACCESS_TOKEN, accessToken);
        localStorage.setItem(USER_REFRESH_TOKEN, refreshToken);
        localStorage.setItem(EXPIRES_DATE, expiresDate);
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
        localStorage.removeItem(USER_ACCESS_TOKEN);
        localStorage.removeItem(USER_REFRESH_TOKEN);
        localStorage.removeItem(EXPIRES_DATE);
    },

    async refresh(): Promise<string | void> {
        const refreshToken = localStorageApi.getRefreshToken();
        if (refreshToken) {
            try {
                const response = await fetch(
                    import.meta.env.VITE_BASEURL_GATEWAY +
                        '/api/v1/customer/auth/refresh_token',
                    {
                        method: 'POST',
                        headers: { Refresh: `Bearer ${refreshToken}` }
                    }
                );
                const data: { accessToken: string, refreshToken: string } =
                    await response.json();
                localStorageApi.setTokens(data.accessToken, data.refreshToken);
                return data.accessToken;
            } catch (e) {
                localStorageApi.removeUserData();
            }
        }
        localStorageApi.removeUserData();
    },

    async getActualAccessToken(): Promise<string> {
        const accessToken = localStorageApi.getAccessToken();
        return accessToken || (await localStorageApi.refresh()) || '';
    }
};
