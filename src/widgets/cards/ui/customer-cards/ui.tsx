import { useGetCustomerCardsQuery } from 'src/shared/api';

import { CardContent } from '../content';

export const CustomerCards = () => {
    const { data: cards = [], isLoading } = useGetCustomerCardsQuery();

    return <CardContent cards={cards} isLoading={isLoading} />;
};
