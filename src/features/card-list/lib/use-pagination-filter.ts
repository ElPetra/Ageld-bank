import { useState, useEffect } from 'react';

import type { CardProduct, CustomerCard } from 'src/shared/model';

export const usePaginationFilter = (
    cards: CardProduct[] | CustomerCard[],
    getFilteredCards: () => (CardProduct | CustomerCard)[],
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
        if (cards) {
            setCurrentPage(1);
        }
    }, [getFilteredCards, cards]);

    return {
        currentPage,
        setCurrentPage,
        totalPages,
        currentItems,
        pageNumbers
    };
};
