import { useGetCardProductsByTypeQuery } from 'src/shared/api';

export const useGetCardProductsQuery = () => {
    const { data: debitCards = [], isLoading: debitLoading } =
        useGetCardProductsByTypeQuery({ type: 'DEBIT' });

    const { data: creditCards = [], isLoading: creditLoading } =
        useGetCardProductsByTypeQuery({
            type: 'CREDIT'
        });

    const cards = debitCards.concat(creditCards);
    const isLoading = debitLoading || creditLoading;
    return {
        isLoading,
        cards
    };
};
