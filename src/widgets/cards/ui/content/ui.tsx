import { usePaginationFilter } from 'src/shared/hooks/usePaginationFilter';
import { Pagination, Preloader } from 'src/shared/ui';
import { CREATE, RouteName } from 'src/shared/model';
import { useFetchCards } from 'src/shared/lib';
import { MessageCard } from 'src/entities/message';
import { FilterBar } from 'src/entities/filter';

import {
    ALL_CARD,
    CARDS_NOT_FOUND,
    CREATE_CARD,
    MIR_CARD,
    typeFilters,
    VISA_CARD
} from '../../model';
import { useCardsFilter } from '../../lib';

import { FinanceCard } from './card';
import './styles.scss';
const paymentFilters = [ALL_CARD, MIR_CARD, VISA_CARD];

export const CardContent = () => {
    const { cards, isLoading } = useFetchCards();

    const {
        getFilteredCards,
        currencyPayment,
        setCurrencyType,
        setCurrencyPayment,
        currencyType
    } = useCardsFilter(cards);
    const {
        currentPage,
        setCurrentPage,
        totalPages,
        currentItems,
        pageNumbers
    } = usePaginationFilter(cards, getFilteredCards);

    return (
        <>
            <div className='filters'>
                <FilterBar
                    filters={Object.keys(typeFilters)}
                    current={currencyType}
                    setCurrent={setCurrencyType}
                />
                <FilterBar
                    filters={paymentFilters}
                    current={currencyPayment}
                    setCurrent={setCurrencyPayment}
                />
            </div>
            {isLoading && <Preloader />}
            {currentItems ? (
                <>
                    {currentItems.map(el => (
                        <FinanceCard key={`${el.cardProductId}`} card={el} />
                    ))}
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
