import { useGetCardProductsByTypeQuery } from 'src/shared/api';

import type { PaymentSystem, ProductStatus } from 'src/shared/model';
import type { SvgIconName } from 'src/shared/ui';

export const getIconName = (payment: PaymentSystem): SvgIconName => {
    switch (payment) {
        case 'VISA':
            return 'visa-icon';
        case 'МИР':
            return 'mir-icon';
    }
};

export const getStatusName = (status: ProductStatus): string => {
    switch (status) {
        case 'active':
            return 'Активная';
        case 'blocked':
            return 'Заблокированная';
        case 'closed':
            return 'Закрытая';
    }
};

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
