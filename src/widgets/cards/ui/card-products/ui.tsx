import { useGetCardProductsQuery } from 'src/shared/lib';
import { CardList } from 'src/features/card-list';

export const CardProducts = () => {
    const { cards, isLoading } = useGetCardProductsQuery();
    return <CardList cards={cards} isLoading={isLoading} />;
};
