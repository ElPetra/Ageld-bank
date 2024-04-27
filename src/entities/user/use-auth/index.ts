import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/store';

import { localStorageApi, useRefreshTokenMutation } from 'src/shared/api';

import { userSignedIn, userSignedOut } from '../user-slice';

export const useAuth = () => {
    const { authStatus } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const [getNewToken] = useRefreshTokenMutation();

    const refresh = useCallback(async (): Promise<void> => {
        const refreshToken = localStorageApi.getRefreshToken();
        if (refreshToken) {
            const tokenData = await getNewToken({ refreshToken: refreshToken });
            if ('data' in tokenData) {
                const { accessToken, refreshToken } = tokenData.data;
                localStorageApi.setTokens(accessToken, refreshToken);
                dispatch(userSignedIn());
                return;
            }
        }
        localStorageApi.removeUserData();
        dispatch(userSignedOut());
    }, [dispatch, getNewToken]);

    const signedOut = useCallback((): void => {
        localStorageApi.removeUserData();
        dispatch(userSignedOut());
    }, [dispatch]);

    const authChecked = useCallback(async (): Promise<void> => {
        const accessToken = localStorageApi.getAccessToken();
        if (accessToken) {
            dispatch(userSignedIn());
        } else {
            await refresh();
        }
    }, [dispatch, refresh]);

    return {
        authStatus,
        authChecked,
        signedOut
    };
};
