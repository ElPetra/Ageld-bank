import { useCallback, useState } from 'react';

import { paymentSystemName, typeCardName } from 'src/shared/model';

import type { CardProduct } from 'src/shared/model';

export const useCardsFilter = (cards?: CardProduct[]) => {
    const [currencyPayment, setCurrencyPayment] = useState<string>(
        paymentSystemName.ALL
    );
    const [currencyType, setCurrencyType] = useState<string>(typeCardName.ALL);

    const getFilteredCards = useCallback((): CardProduct[] => {
        if (!cards) {
            return [];
        }

        return cards.filter(card => {
            const typeMatch =
                currencyType === typeCardName.ALL ||
                typeCardName[card.typeCard] === currencyType;
            const paymentMatch =
                currencyPayment === paymentSystemName.ALL ||
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
