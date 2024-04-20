import { useCallback, useState } from 'react';

import { ALL_CARD } from '../model';

import type { Card } from '../model';

export const useCardsFilter = (currencyPayment: string, cards?: Card[]) => {
    const [currencyType, setCurrencyType] = useState<string>(ALL_CARD);
    const getFilteredCards = useCallback((): Card[] => {
        if (!cards) {
            return [];
        }
        return cards.filter(card => {
            return (
                currencyPayment === ALL_CARD ||
                card.payment_system === currencyPayment
            );
        });
    }, [cards, currencyPayment]);
    return {
        currencyType,
        currencyPayment,
        setCurrencyType,
        getFilteredCards
    };
};
