import { useState, useEffect } from 'react';

import type { Card } from 'src/widgets/cards/model/types';

export const usePaginationFilter = (
    cards: Card[],
    getFilteredCards: () => Card[],
    itemsPerPage: number = 10
) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages = Math.ceil(getFilteredCards().length / itemsPerPage);
    const pageNumbers = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );
    const currentItems = getFilteredCards().slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [getFilteredCards, cards.length]);

    return {
        currentPage,
        setCurrentPage,
        totalPages,
        currentItems,
        pageNumbers
    };
};
