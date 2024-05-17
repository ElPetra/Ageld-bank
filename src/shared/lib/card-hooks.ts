import { useGetCardProductsByTypeQuery } from 'src/shared/api';

export const useGetCardProductsQuery = () => {
    const { data: debitCards = [], isLoading: debitLoading } =
        useGetCardProductsByTypeQuery({ type: 'DEBIT' });

    const { data: depositCards = [], isLoading: depositLoading } =
        useGetCardProductsByTypeQuery({ type: 'DEPOSIT' });

    const { data: creditCards = [], isLoading: creditLoading } =
        useGetCardProductsByTypeQuery({
            type: 'CREDIT'
        });

    const cards = debitCards.concat(creditCards, depositCards);
    const isLoading = debitLoading || creditLoading || depositLoading;
    return {
        isLoading,
        cards
    };
};
