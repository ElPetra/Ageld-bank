import { usePaginationFilter } from 'src/shared/hooks/usePaginationFilter.js';

import { Pagination } from 'src/shared/ui';
import { CREATE, RouteName } from 'src/shared/model';
import { useFetchCards } from 'src/shared/lib';
import { MessageCard } from 'src/entities/message';
import { FilterBar } from 'src/entities/filter';
import { useState } from 'react';

import {
    ALL_CARD,
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
    const [currencyPayment, setCurrencyPayment] = useState<string>(ALL_CARD);
    const { currencyType, setCurrencyType } = useCardsFilter(currencyPayment);
    const { cards } = useFetchCards(currencyType);

    const { getFilteredCards } = useCardsFilter(currencyPayment, cards);
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
            {/*{debetLoading && <Preloader />}*/}
            {currentItems ? (
                <>
                    {currentItems.map((el, index) => (
                        <FinanceCard
                            key={`${el.card_product_id}-${index}`}
                            card={el}
                        />
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
