import { useCallback, useState } from 'react';

import { ALL_CARD, typeFilters } from '../model';

import type { Card } from '../model';

export const useCardsFilter = (cards?: Card[]) => {
    const [currencyPayment, setCurrencyPayment] = useState<string>(ALL_CARD);
    const [currencyType, setCurrencyType] = useState<string>(ALL_CARD);

    const getFilteredCards = useCallback((): Card[] => {
        if (!cards) {
            return [];
        }

        return cards.filter(card => {
            const typeMatch =
                currencyType === ALL_CARD ||
                card.typeCard === typeFilters[currencyType];
            const paymentMatch =
                currencyPayment === ALL_CARD ||
                card.paymentSystem === currencyPayment;
            return typeMatch && paymentMatch;
        });
    }, [cards, currencyPayment, currencyType]);

    return {
        currencyType,
        currencyPayment,
        setCurrencyPayment,
        setCurrencyType,
        getFilteredCards
    };
};
