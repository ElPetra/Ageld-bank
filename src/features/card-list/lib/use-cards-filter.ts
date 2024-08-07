import { useCallback, useState } from 'react';

import { ALL, typeCard } from 'src/shared/model';

import type { CardProduct, CustomerCard } from 'src/shared/model';

export const useCardsFilter = (cards?: CardProduct[] | CustomerCard[]) => {
    const [currentCurrency, setCurrentCurrency] = useState<string>(ALL);
    const [currentType, setCurrencyType] = useState<string>(ALL);

    const getFilteredCards = useCallback((): (CardProduct | CustomerCard)[] => {
        if (!cards) {
            return [];
        }
        return cards.filter(card => {
            const typeMatch =
                currentType === ALL || typeCard[card.type] === currentType;
            const paymentMatch =
                currentCurrency === ALL || card.currency === currentCurrency;
            return typeMatch && paymentMatch;
        });
    }, [cards, currentCurrency, currentType]);

    return {
        currentType,
        currentCurrency,
        setCurrentCurrency,
        setCurrencyType,
        getFilteredCards
    };
};
