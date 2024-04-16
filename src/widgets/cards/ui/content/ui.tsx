import { Pagination } from 'src/shared/ui';
import { CREATE, RouteName } from 'src/shared/model';
import { sortByCreated } from 'src/shared/lib';
import { MessageCard } from 'src/entities/message';
import { FilterBar } from 'src/entities/filter';

import { usePaginationFilter } from 'src/shared/hooks/usePaginationFilter.js';

import {
    ALL_CARD,
    cards,
    CARDS_NOT_FOUND,
    CREATE_CARD,
    CREDIT_CARD,
    DEBET_CARD,
    MIR_CARD,
    VISA_CARD
} from '../../model';
import { useCardsFilter } from '../../lib';

import { FinanceCard } from './card';

import './styles.scss';

const typeFilters = [ALL_CARD, DEBET_CARD, CREDIT_CARD];

const paymentFilters = [ALL_CARD, MIR_CARD, VISA_CARD];

export const CardContent = () => {
    const {
        currencyType,
        currencyPayment,
        setCurrencyType,
        setCurrencyPayment,
        getFilteredCards
    } = useCardsFilter();
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
            <div className='filters'>
                <FilterBar
                    filters={typeFilters}
                    current={currencyType}
                    setCurrent={setCurrencyType}
                />
                <FilterBar
                    filters={paymentFilters}
                    current={currencyPayment}
                    setCurrent={setCurrencyPayment}
                />
            </div>
            {currentItems.length ? (
                <>
                    <div>
                        {sortedCards.map(el => (
                            <FinanceCard key={el.id} card={el} />
                        ))}
                    </div>
                    {cards.length > 10 && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={(page: number) =>
                                setCurrentPage(page)
                            }
                            pageNumbers={pageNumbers}
                        />
                    )}
                </>
            ) : (
                <MessageCard
                    text={CARDS_NOT_FOUND}
                    buttonText={CREATE_CARD}
                    buttonLink={RouteName.CARD_PAGE + '/' + CREATE}
                />
            )}
        </>
    );
};
