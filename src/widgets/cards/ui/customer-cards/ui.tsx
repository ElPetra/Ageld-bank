import { useEffect } from 'react';

import { useGetCustomerCardsQuery } from 'src/shared/api';
import { useAuth } from 'src/entities/user';

import { CardContent } from '../content';

export const CustomerCards = () => {
    const { signedOut } = useAuth();
    const { data: cards = [], isLoading, error } = useGetCustomerCardsQuery();
    useEffect(() => {
        if (error) {
            return signedOut();
        }
    }, [error, signedOut]);

    return <CardContent cards={cards} isLoading={isLoading} />;
};
