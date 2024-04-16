import { useEffect, useState } from 'react';
import { getActualAccessToken } from 'src/shared/lib';

export const useFetchToken = () => {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const fetchedToken = await getActualAccessToken();
                setToken(fetchedToken);
            } catch (error) {
                console.error('Ошибка получения токена:', error);
            }
        };

        fetchToken();
    }, []);

    return token;
};
