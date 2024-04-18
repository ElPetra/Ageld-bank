import { CARDS_NOT_FOUND, CREATE_CARD } from 'src/widgets/cards/model';
import { useCardsFilter } from 'src/widgets/cards/lib';
import { FinanceCard } from 'src/widgets/cards/ui/content/card';
import { Pagination } from 'src/shared/ui/pagination';
import { usePaginationFilter } from 'src/shared/hooks/usePaginationFilter.js';

import { Pagination } from 'src/shared/ui';
import { CREATE, RouteName } from 'src/shared/model';
import { sortByCreated } from 'src/shared/lib';
import { Filters } from 'src/widgets/cards/ui/content/filters';
import { MessageCard } from 'src/entities/message/index.js';
import { CREATE, RouteName } from 'src/shared/model/index.js';
import { useGetCardProductsQuery } from 'src/shared/api/index.js';
import { useEffect, useState } from 'react';
import { Preloader } from 'src/shared/ui/index.js';
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
    const { data: debet } = useGetCardProductsQuery({
        type: 'DEBIT'
    });
    const { data: credit, isLoading } = useGetCardProductsQuery({
        type: 'CREDIT'
    });
    const [cards, setCards] = useState([]);
    const { setType, setPayment } = useCardsFilter(cards);
    // const {
    //     currentPage,
    //     setCurrentPage,
    //     totalPages,
    //     currentItems,
    //     pageNumbers
    // } = usePaginationFilter(cards, getFilteredCards);
    // const sortedCards = sortByCreated(currentItems);
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

    useEffect(() => {
        if (debet && credit) {
            setCards(prevCards => [...prevCards, ...debet, ...credit]);
        }
    }, [debet, credit]);
    useEffect(() => {
        console.log(cards);
    }, [cards]);
    return (
        <>
            <Filters setType={setType} setPayment={setPayment} />
            {isLoading && <Preloader />}
            {cards.length ? (
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
                    {cards.map((el, index) => (
                        <FinanceCard
                            key={`${el.nameProduct}-${index}`}
                            card={el}
                        />
                    ))}
                    {/*{cards.length > 10 && (*/}
                    {/*    <Pagination*/}
                    {/*        currentPage={currentPage}*/}
                    {/*        totalPages={totalPages}*/}
                    {/*        onPageChange={(page: number) =>*/}
                    {/*            setCurrentPage(page)*/}
                    {/*        }*/}
                    {/*        pageNumbers={pageNumbers}*/}
                    {/*    />*/}
                    {/*)}*/}
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
