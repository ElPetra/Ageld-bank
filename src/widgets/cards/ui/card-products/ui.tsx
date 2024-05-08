import { Pagination, Preloader } from 'src/shared/ui';
import {
    CARDS_NOT_FOUND,
    CREATE,
    CREATE_CARD,
    paymentSystemName,
    RouteName,
    typeCardName
} from 'src/shared/model';
import { useFetchCards } from 'src/shared/lib';
import { MessageCard } from 'src/entities/message';
import { FilterBar } from 'src/entities/filter';

import { useCardsFilter, usePaginationFilter } from '../../lib';

import { FinanceCard } from './card';

import './styles.scss';

export const CardProducts = () => {
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
                    filters={Object.values(typeCardName)}
                    current={currencyType}
                    setCurrent={setCurrencyType}
                />
                <FilterBar
                    filters={Object.values(paymentSystemName)}
                    current={currencyPayment}
                    setCurrent={setCurrencyPayment}
                />
            </div>
            {isLoading ? (
                <Preloader />
            ) : (
                <>
                    {currentItems ? (
                        <>
                            {currentItems.map(el => (
                                <FinanceCard
                                    key={`${el.cardProductId}`}
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
                            title={CARDS_NOT_FOUND}
                            buttonText={CREATE_CARD}
                            buttonLink={
                                RouteName.CARD_PRODUCT_PAGE + '/' + CREATE
                            }
                        />
                    )}
                </>
            )}
        </>
    );
};
