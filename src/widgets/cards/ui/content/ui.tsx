import { cards, CARDS_NOT_FOUND, CREATE_CARD } from 'src/widgets/cards/model';
import { useCardsFilter } from 'src/widgets/cards/lib';
import { FinanceCard } from 'src/widgets/cards/ui/content/card';
import { Pagination } from 'src/shared/ui/pagination';
import { usePaginationFilter } from 'src/shared/hooks/usePaginationFilter.js';

import { sortByCreated } from 'src/shared/lib';
import { Filters } from 'src/widgets/cards/ui/content/filters';
import { ProductNotFound } from 'src/entities/products';

export const CardContent = () => {
    const { setType, setPayment, getFilteredCards } = useCardsFilter();
    const {
        currentPage,
        setCurrentPage,
        totalPages,
        currentItems,
        pageNumbers
    } = usePaginationFilter(cards, getFilteredCards);
    const sortedCards = sortByCreated(currentItems);

    return (
        <>
            <Filters setType={setType} setPayment={setPayment} />
            {currentItems.length ? (
                <>
                    <div>
                        {sortedCards.map(el => (
                            <FinanceCard key={el.id} card={el} />
                        ))}
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={(page: number) => setCurrentPage(page)}
                        pageNumbers={pageNumbers}
                    />
                </>
            ) : (
                <ProductNotFound
                    text={CARDS_NOT_FOUND}
                    buttonText={CREATE_CARD}
                />
            )}
        </>
    );
};
