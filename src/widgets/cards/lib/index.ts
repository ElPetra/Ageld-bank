import { useCallback, useState } from 'react';

import {
    CardProduct,
    paymentSystemName,
    PaymentSystemValues,
    TypeCardValues,
    typeCardName
} from 'src/shared/model';

export const useCardsFilter = (cards?: CardProduct[]) => {
    const [currencyPayment, setCurrencyPayment] = useState<PaymentSystemValues>(
        paymentSystemName.ALL
    );
    const [currencyType, setCurrencyType] = useState<TypeCardValues>(
        typeCardName.ALL
    );

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
