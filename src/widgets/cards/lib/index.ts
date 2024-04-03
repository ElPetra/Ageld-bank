import { useState } from 'react';

import { type Card, ALL_CURRENCY } from '../model';

import type { Dispatch, SetStateAction } from 'react';
type CurrencyType = 'Кредитная' | 'Дебетовая' | 'Все';
export const useCardsFilter = (
    cards: Card[]
): [
    [CurrencyType, Dispatch<SetStateAction<CurrencyType>>],
    (type: CurrencyType) => Card[]
] => {
    const [currency, setCurrency] = useState<CurrencyType>(ALL_CURRENCY);

    const getSelectedCards = (type: string): Card[] => {
        if (type === 'Все') {
            return cards;
        }
        return cards.filter(el => el.type === type);
    };

    return [[currency, setCurrency], getSelectedCards];
};
