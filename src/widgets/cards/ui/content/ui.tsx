import { AccountNotFound } from 'src/widgets/accounts/ui/content/not-found';

import { cards } from 'src/widgets/cards/model';
import { CardType, useCardsFilter } from 'src/widgets/cards/lib/index.js';
import { FinanceCard } from 'src/widgets/cards/ui/content/card';
import { Pagination } from 'src/shared/ui/pagination/index.js';
import { usePaginationFilter } from 'src/shared/hooks/usePaginationFilter.js';

import { sortByCreated } from 'src/shared/lib/sortByCreated.js';
import { Filters } from 'src/widgets/cards/ui/content/filters';

export const CardContent = () => {
    const { filters, setType, setPayment, getSelectedCards } =
        useCardsFilter(cards);
    const { currentPage, setCurrentPage, totalPages, currentItems } =
        usePaginationFilter(cards, filters);
    const sortedCards = sortByCreated(currentItems);

    return (
        <>
            <Filters
                type={filters.type}
                payment={filters.payment}
                setType={setType}
                setPayment={setPayment}
            />
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
                    />
                </>
            ) : (
                <AccountNotFound />
            )}
        </>
    );
};
