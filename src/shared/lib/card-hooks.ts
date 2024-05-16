import {
    useGetCardProductsQuery,
    useGetFilteredCustomerCardsQuery
} from 'src/shared/api/index.js';

export const useFetchCards = () => {
    const { data: debetCards = [], isLoading: debetLoading } =
        useGetCardProductsQuery({ type: 'DEBIT' });

    const { data: creditCards = [], isLoading: creditLoading } =
        useGetCardProductsQuery({
            type: 'CREDIT'
        });

    const cards = debetCards.concat(creditCards);
    const isLoading = debetLoading || creditLoading;

    return {
        isLoading,
        cards
    };
};

export const useFetchCustomerCards = () => {
    const {
        data: debetCards = [],
        isLoading: debetLoading,
        error: debetError
    } = useGetFilteredCustomerCardsQuery({ type: 'DEBIT' });

    const {
        data: creditCards = [],
        isLoading: creditLoading,
        error: creditError
    } = useGetFilteredCustomerCardsQuery({
        type: 'CREDIT'
    });
    const {
        data: depositCards = [],
        isLoading: depositLoading,
        error: depositError
    } = useGetFilteredCustomerCardsQuery({
        type: 'DEPOSIT'
    });
    const error = creditError || depositError || debetError;
    const cards = debetCards.concat(creditCards, depositCards);
    const isLoading = debetLoading || creditLoading || depositLoading;

    return {
        isLoading,
        cards,
        error
    };
};
