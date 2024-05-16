import { useCallback, useState } from 'react';

import { ALL_CARD, typeCard } from 'src/shared/model';

import type { CardProduct, CustomerCard } from 'src/shared/model';

export const useCardsFilter = (cards?: CardProduct[] | CustomerCard[]) => {
    const [currencyPayment, setCurrencyPayment] = useState<string>(ALL_CARD);
    const [currencyType, setCurrencyType] = useState<string>(ALL_CARD);

    const getFilteredCards = useCallback((): (CardProduct | CustomerCard)[] => {
        if (!cards) {
            return [];
        }

        return cards.filter(card => {
            const typeMatch =
                currencyType === ALL_CARD ||
                typeCard[card.type] === currencyType;
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
