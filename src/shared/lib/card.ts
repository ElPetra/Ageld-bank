import { useGetCardProductsByTypeQuery } from 'src/shared/api';

export const getIconName = (payment: string) => {
    switch (payment) {
        case 'VISA':
            return 'visa-icon';
        case 'МИР':
            return 'mir-icon';
        default:
            return 'visa-icon';
    }
};

export const getStatusName = (status: string | null) => {
    switch (status) {
        case 'ACTIVE':
            return 'Активная';
        case 'BLOCKED':
            return 'Заблокированная';
        default:
            return 'Неизвестный статус';
    }
};

export const useGetCardProductsQuery = () => {
    const { data: debitCards = [], isLoading: debitLoading } =
        useGetCardProductsByTypeQuery({ type: 'DEBIT' });

    const { data: creditCards = [], isLoading: creditLoading } =
        useGetCardProductsByTypeQuery({
            type: 'CREDIT'
        });

    const cards = debitCards.concat(creditCards);
    const isLoading = debitLoading || creditLoading;
    console.log(cards);
    return {
        isLoading,
        cards
    };
};
