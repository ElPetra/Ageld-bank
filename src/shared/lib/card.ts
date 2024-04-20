//import { useGetCardProductsQuery } from 'src/shared/api';
import {
    cardsCredit,
    cardsDebet,
    CREDIT_CARD,
    DEBET_CARD
} from 'src/widgets/cards/model/index.js';
//import { useState } from 'react';

export const getIconName = (payment: string) => {
    switch (payment) {
        case 'VISA':
            return 'visa';
        case 'МИР':
            return 'mir';
        default:
            return 'visa';
    }
};

export const useFetchCards = (currencyType: string) => {
    //const [cards, setCards] = useState();
    // const { data: debetCards, isLoading: debetLoading } =
    //     useGetCardProductsQuery({
    //         type: currencyType === DEBET_CARD ? 'DEBIT' : ''
    //     });
    //
    // const { data: creditCards, isLoading: creditLoading } =
    //     useGetCardProductsQuery({
    //         type: currencyType === CREDIT_CARD ? 'CREDIT' : ''
    //     });

    //const cards = currencyType === DEBET_CARD ? cardsDebet : cardsCredit;
    //const cards = [...(cardsDebet || []), ...(cardsCredit || [])];
    let cards = [];
    switch (currencyType) {
        case DEBET_CARD:
            cards = cardsDebet || [];
            break;
        case CREDIT_CARD:
            cards = cardsCredit || [];
            break;
        default:
            cards = [...(cardsDebet || []), ...(cardsCredit || [])];
    }

    return {
        cards
        // debetLoading,
        // creditLoading
    };
};
