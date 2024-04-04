import { useState } from 'react';

import { type Card } from '../model';

export type CardType = 'Кредитная' | 'Дебетовая' | 'Все';
type PaymentType = 'Все' | 'VISA' | 'МИР';

interface Filters {
    type: CardType;
    payment: PaymentType;
}
export const useCardsFilter = (cards: Card[]) => {
    const [filters, setFilters] = useState<Filters>({
        type: 'Все',
        payment: 'Все'
    });

    const setType = (type: CardType) =>
        setFilters(prevFilters => ({ ...prevFilters, type }));

    const setPayment = (payment: PaymentType) =>
        setFilters(prevFilters => ({ ...prevFilters, payment }));

    const getSelectedCards = (): Card[] => {
        return cards.filter(card => {
            const typeMatch =
                filters.type === 'Все' || card.type === filters.type;
            const paymentMatch =
                filters.payment === 'Все' || card.payment === filters.payment;
            return typeMatch && paymentMatch;
        });
    };

    return { filters, setType, setPayment, getSelectedCards };
};
