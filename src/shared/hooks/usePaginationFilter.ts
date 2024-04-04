import { useState, useEffect } from 'react';
import { CardType, useCardsFilter } from 'src/widgets/cards/lib';
import { Card } from 'src/widgets/cards/model/mock-cards';
type CardType = 'Все' | 'Дебетовая' | 'Кредитная';
type PaymentType = 'Все' | 'Наличные' | 'Безналичные';

interface Filters {
    type: CardType;
    payment: PaymentType;
}
export const usePaginationFilter = (
    cards: Card[],
    filters: Filters,
    itemsPerPage: number = 10
) => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const getFilteredCards = (): Card[] => {
        // Фильтруем карточки с использованием всех критериев в filters
        // Например, здесь может быть фильтрация по type и payment
        return cards.filter(card => {
            const typeMatch =
                filters.type === 'Все' || card.type === filters.type;
            const paymentMatch =
                filters.payment === 'Все' || card.payment === filters.payment;
            return typeMatch && paymentMatch;
        });
    };

    // Вставьте здесь логику пагинации...

    const totalPages = Math.ceil(getFilteredCards().length / itemsPerPage);
    const currentItems = getFilteredCards().slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    useEffect(() => {
        setCurrentPage(1); // Сброс страницы при изменении фильтров
    }, [filters, cards.length]);

    return { currentPage, setCurrentPage, totalPages, currentItems };
};
