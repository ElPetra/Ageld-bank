import { useCallback, useState } from 'react';

import {
    CardProduct,
    paymentSystemName,
    PaymentSystemName,
    TypeCardName,
    typeCardName
} from 'src/shared/model';

export const useCardsFilter = (cards?: CardProduct[]) => {
    const [currencyPayment, setCurrencyPayment] = useState<PaymentSystemName>(
        paymentSystemName.ALL
    );
    const [currencyType, setCurrencyType] = useState<TypeCardName>(
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
