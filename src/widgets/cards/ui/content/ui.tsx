import { CARDS_NOT_FOUND, CREATE_CARD } from 'src/widgets/cards/model';
import { useCardsFilter } from 'src/widgets/cards/lib';
import { FinanceCard } from 'src/widgets/cards/ui/content/card';
import { Pagination } from 'src/shared/ui/pagination';
import { usePaginationFilter } from 'src/shared/hooks/usePaginationFilter.js';

import { sortByCreated } from 'src/shared/lib';
import { Filters } from 'src/widgets/cards/ui/content/filters';
import { MessageCard } from 'src/entities/message/index.js';
import { CREATE, RouteName } from 'src/shared/model/index.js';
import { useGetCardProductsQuery } from 'src/shared/api/index.js';
import { useEffect, useState } from 'react';
import { Preloader } from 'src/shared/ui/index.js';

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
