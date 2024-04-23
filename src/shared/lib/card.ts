import { useGetCardProductsQuery } from 'src/shared/api';

export const getIconName = (payment: string) => {
    switch (payment) {
        case 'VISA':
            return 'visa';
        case 'МИР':
            return 'mir';
        default:
            return 'visa';
    }
};

export const useFetchCards = () => {
    const { data: debetCards, isLoading: debetLoading } =
        useGetCardProductsQuery({
            type: 'DEBIT'
        });

    const { data: creditCards, isLoading: creditLoading } =
        useGetCardProductsQuery({
            type: 'CREDIT'
        });

    let cards = [];
    cards = [...(debetCards || []), ...(creditCards || [])];
    const isLoading = debetLoading && creditLoading;

    return {
        isLoading,
        cards
    };
};
