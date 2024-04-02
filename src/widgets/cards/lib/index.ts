import { useMemo, useState } from 'react';

import { type Card, ALL_CURRENCY } from '../model';

import type { Dispatch, SetStateAction } from 'react';

export const useCardsFilter = (
    cards: Card[]
): [
    [string, Dispatch<SetStateAction<string>>],
    (type: 'all' | 'credit' | 'debet') => Card[]
] => {
    const [currency, setCurrency] = useState<string>(ALL_CURRENCY);

    const filteredCards = useMemo<Card[]>(
        () =>
            cards.filter(
                el =>
                    currency === ALL_CURRENCY ||
                    el.currency === currency.toLowerCase()
            ),
        [cards, currency]
    );

    const getSelectedCards = (type: string): Card[] => {
        if (type === 'Все') {
            return filteredCards;
        }
        return filteredCards.filter(el => el.type === type);
    };

    return [[currency, setCurrency], getSelectedCards];
};
