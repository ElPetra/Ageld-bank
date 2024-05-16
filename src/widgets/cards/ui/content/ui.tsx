import { Preloader } from 'src/shared/ui';
import {
    CARDS_NOT_FOUND,
    CREATE,
    CREATE_CARD,
    paymentSystemFilters,
    RouteName,
    typeCardFilters
} from 'src/shared/model';
import { MessageCard } from 'src/entities/message';
import { FilterBar } from 'src/entities/filter';
import { CardProductCard, CustomerCardCard } from 'src/entities/cards';
import { Pagination } from 'src/features/filters';

import { ProductStatuses } from 'src/entities/product';

import { useCardsFilter, usePaginationFilter } from '../../lib';
import { isCardProduct, isCustomerCard } from '../../model';

import type { CardProduct, CustomerCard } from 'src/shared/model';

import './styles.scss';

interface Props {
    cards: CardProduct[] | CustomerCard[];
    isLoading: boolean;
}

export const CardContent = ({ cards, isLoading }: Props) => {
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
                    filters={typeCardFilters}
                    current={currencyType}
                    setCurrent={setCurrencyType}
                />
                <FilterBar
                    filters={paymentSystemFilters}
                    current={currencyPayment}
                    setCurrent={setCurrencyPayment}
                />
            </div>
            {isLoading ? (
                <Preloader />
            ) : (
                <>
                    {currentItems.length ? (
                        <>
                            {currentItems.map(el => {
                                if (isCardProduct(el)) {
                                    return (
                                        <CardProductCard
                                            key={el.id}
                                            card={el}
                                        />
                                    );
                                } else if (isCustomerCard(el)) {
                                    return (
                                        <CustomerCardCard
                                            key={el.number}
                                            card={el}
                                        >
                                            <ProductStatuses
                                                isMaster={false}
                                                status={el.status}
                                            />
                                        </CustomerCardCard>
                                    );
                                }
                            })}
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
                            buttonLink={RouteName.CARD_PAGE + '/' + CREATE}
                        />
                    )}
                </>
            )}
        </>
    );
};
