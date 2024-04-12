import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/store';

import { getRefreshToken, getAccessToken, getUserPhone } from 'src/shared/api';

import { setUser } from '../user-slice';

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
