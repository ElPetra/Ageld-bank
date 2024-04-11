import { useAppDispatch, useAppSelector } from 'src/app/store/dispatch';
import { setUser } from 'src/app/store/slices/userSlice';

import { useCallback } from 'react';

import {
    getRefreshToken,
    getAccessToken,
    getUserPhone
} from '../api/services/localStorageApi';

export const useAuth = () => {
    const { phone, accessToken, refreshToken, isLoading } = useAppSelector(
        state => state.user
    );
    const dispatch = useAppDispatch();
    const authChecked = useCallback(async (): Promise<void> => {
        const phone = getUserPhone();
        const accessToken = getAccessToken();
        const refreshToken = getRefreshToken();
        dispatch(
            setUser({
                phone: phone,
                accessToken: accessToken,
                refreshToken: refreshToken
            })
        );
    }, [dispatch]);
    return {
        isAuth: !!accessToken,
        phone,
        accessToken,
        refreshToken,
        authChecked,
        isLoading
    };
};
