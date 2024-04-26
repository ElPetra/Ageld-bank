import { useCallback, useState } from 'react';

import { ALL_CARD } from '../model';

import { CardProduct, typeCardName } from 'src/shared/model';

export const useCardsFilter = (cards?: CardProduct[]) => {
    const [currencyPayment, setCurrencyPayment] = useState<string>(ALL_CARD);
    const [currencyType, setCurrencyType] = useState<string>(ALL_CARD);

    const getFilteredCards = useCallback((): CardProduct[] => {
        if (!cards) {
            return [];
        }

        return cards.filter(card => {
            const typeMatch =
                currencyType === ALL_CARD ||
                typeCardName[card.typeCard] === currencyType;
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
