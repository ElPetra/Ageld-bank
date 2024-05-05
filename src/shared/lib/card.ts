import { useGetCardProductsQuery } from 'src/shared/api';
export const getIconName = (paymentSystem: string) => {
    switch (paymentSystem) {
        case 'VISA':
            return 'visa';
        case 'МИР':
            return 'mir';
        default:
            return 'visa';
    }
};

export const getStatusName = (status: string) => {
    switch (status) {
        case 'ACTIVE':
            return 'Активная';
        case 'BLOCKED':
            return 'Заблокированная';
        default:
            return 'Неизвестный статус';
    }
};

export const useFetchCards = () => {
    const { data: debetCards = [], isLoading: debetLoading } =
        useGetCardProductsQuery({ type: 'DEBIT' });

    const { data: creditCards = [], isLoading: creditLoading } =
        useGetCardProductsQuery({
            type: 'CREDIT'
        });

    const cards = debetCards.concat(creditCards);
    const isLoading = debetLoading && creditLoading;

    return {
        isLoading,
        cards
    };
};
