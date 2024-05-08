import { Pagination, Preloader } from 'src/shared/ui';
import {
    type CardProduct,
    CARDS_NOT_FOUND,
    CREATE,
    CREATE_CARD,
    paymentSystemName,
    RouteName,
    typeCardName,
    typeCustomerCardName,
    type CustomersCard
} from 'src/shared/model';

import { MessageCard } from 'src/entities/message';
import { FilterBar } from 'src/entities/filter';
import { CardProductVariant, CustomerCard } from 'src/entities/cards';

import { useCardsFilter, usePaginationFilter } from '../../lib';

import './styles.scss';
import { isCardProduct, isCustomerCard } from '../../model';

interface Props {
    cards: CardProduct[] | CustomersCard[];
    isLoading: boolean;
    type: 'customer' | 'products';
}

const typeMatcher = {
    customer: typeCustomerCardName,
    products: typeCardName
};

export const CardContent = ({ cards, isLoading, type }: Props) => {
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
                    filters={Object.values(typeMatcher[type])}
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
                    {currentItems.length ? (
                        <>
                            {currentItems.map(el => {
                                if (isCardProduct(el)) {
                                    return (
                                        <CardProductVariant
                                            key={el.cardProductId}
                                            card={el}
                                        />
                                    );
                                } else if (isCustomerCard(el)) {
                                    return (
                                        <CustomerCard
                                            key={el.accountNumber}
                                            card={el}
                                        />
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
