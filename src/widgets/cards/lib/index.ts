import { useCallback, useState } from 'react';

import type { Card } from 'src/widgets/cards/model';

export type CardType = string;
export type PaymentType = string;

interface Filters {
    type: CardType;
    payment: PaymentType;
}
export const useCardsFilter = cards => {
    const [filters, setFilters] = useState<Filters>({
        type: 'Все',
        payment: 'Все'
    });
    const getFilteredCards = useCallback((): Card[] => {
        return cards.filter(card => {
            const typeMatch =
                filters.type === 'Все' || card.type === filters.type;
            const paymentMatch =
                filters.payment === 'Все' || card.payment === filters.payment;
            return typeMatch && paymentMatch;
        });
    }, [filters]);
    const setType = (type: CardType) =>
        setFilters(prevFilters => ({ ...prevFilters, type }));

    const setPayment = (payment: PaymentType) =>
        setFilters(prevFilters => ({ ...prevFilters, payment }));

    return { filters, setType, setPayment, getFilteredCards };
};
