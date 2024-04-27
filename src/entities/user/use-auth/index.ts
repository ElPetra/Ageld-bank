import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/store';

import { localStorageApi, useRefreshTokenMutation } from 'src/shared/api';

import { removeUser, setUser } from '../user-slice';

export const useAuth = () => {
    const { phone, accessToken, refreshToken, isLoading } = useAppSelector(
        state => state.user
    );
    const dispatch = useAppDispatch();
    const [getNewToken] = useRefreshTokenMutation();

    const getRefreshToken = useCallback((): string | null => {
        if (refreshToken) {
            return refreshToken;
        } else {
            return localStorageApi.getRefreshToken();
        }
    }, [refreshToken]);

    const refresh = useCallback(async (): Promise<void> => {
        const refreshToken = getRefreshToken();
        if (refreshToken) {
            const tokenData = await getNewToken({ refreshToken: refreshToken });
            if ('data' in tokenData) {
                const { accessToken, refreshToken } = tokenData.data;
                localStorageApi.setTokens(accessToken, refreshToken);
                dispatch(
                    setUser({
                        phone: phone,
                        accessToken: accessToken,
                        refreshToken: refreshToken
                    })
                );
            } else {
                dispatch(removeUser());
                localStorageApi.removeUserData();
            }
        } else {
            dispatch(removeUser());
            localStorageApi.removeUserData();
        }
    }, [dispatch, getRefreshToken, getNewToken, phone]);

    const authChecked = useCallback(async (): Promise<void> => {
        const phone = localStorageApi.getUserPhone();
        const accessToken = localStorageApi.getAccessToken();
        const refreshToken = localStorageApi.getRefreshToken();
        if (phone && accessToken && refreshToken) {
            dispatch(
                setUser({
                    phone: phone,
                    accessToken: accessToken,
                    refreshToken: refreshToken
                })
            );
        } else {
            await refresh();
        }
    }, [dispatch, refresh]);

    return {
        isAuth: !!accessToken,
        phone,
        accessToken,
        refreshToken,
        authChecked,
        isLoading
    };
};
