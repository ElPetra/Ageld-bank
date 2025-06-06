import { useEffect } from 'react';

import { useGetCustomerCardsQuery } from 'src/shared/api';
import { isErrorStatusUnauthorized } from 'src/shared/lib';
import { useAuth } from 'src/entities/user';
import { CardList } from 'src/features/card-list';

export const CustomerCards = () => {
    const { signedOut } = useAuth();
    const { data: cards = [], isLoading, error } = useGetCustomerCardsQuery();

    useEffect(() => {
        if (isErrorStatusUnauthorized(error)) {
            return signedOut();
        }
    }, [error, signedOut]);

    return (
        <CardList cards={cards} isLoading={isLoading} isCustomerCards={true} />
    );
};
