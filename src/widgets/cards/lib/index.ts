import { useCallback, useState } from 'react';

import { ALL_CARD, cards } from '../model';

import type { Card } from '../model';

export const useCardsFilter = () => {
    const [currencyType, setCurrencyType] = useState<string>(ALL_CARD);
    const [currencyPayment, setCurrencyPayment] = useState<string>(ALL_CARD);

    const getFilteredCards = useCallback((): Card[] => {
        return cards.filter(card => {
            const typeMatch =
                currencyType === ALL_CARD || card.type === currencyType;
            const paymentMatch =
                currencyPayment === ALL_CARD ||
                card.payment === currencyPayment;
            return typeMatch && paymentMatch;
        });
    }, [currencyType, currencyPayment]);

    return {
        currencyType,
        currencyPayment,
        setCurrencyType,
        setCurrencyPayment,
        getFilteredCards
    };
};
