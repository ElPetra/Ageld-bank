import { useAppSelector } from 'src/app/store/dispatch';

export const useAuth = () => {
    const { phone, accessToken, refreshToken } = useAppSelector(
        state => state.user
    );
    return {
        isAuth: !!accessToken,
        phone,
        accessToken,
        refreshToken
    };
};
