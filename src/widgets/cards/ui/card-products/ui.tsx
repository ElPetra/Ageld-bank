import { useGetCardProductsQuery } from 'src/shared/lib';

import { CardContent } from '../content';

export const CardProducts = () => {
    const { cards, isLoading } = useGetCardProductsQuery();
    return <CardContent cards={cards} isLoading={isLoading} type='products' />;
};
