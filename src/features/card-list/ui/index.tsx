import { useTranslation } from 'react-i18next';

import {
    CREATE,
    currencyFilters,
    RouteName,
    typeCardFilters
} from 'src/shared/model';
import { Preloader } from 'src/shared/ui';
import { FilterBar, Pagination } from 'src/entities/filter';
import { UniversalCardCard } from 'src/entities/cards';
import { ProductStatuses } from 'src/entities/product';
import { MessageCard } from 'src/entities/message';

import { useCardsFilter, usePaginationFilter } from '../lib';

import type { CardProduct, CustomerCard } from 'src/shared/model';

import './styles.scss';

interface Props {
    cards: CardProduct[] | CustomerCard[];
    isLoading: boolean;
}

export const CardList = ({ cards, isLoading }: Props) => {
    const { t } = useTranslation();
    const {
        getFilteredCards,
        currentCurrency,
        setCurrencyType,
        setCurrentCurrency,
        currentType
    } = useCardsFilter(cards);
    const {
        currentPage,
        setCurrentPage,
        totalPages,
        currentItems,
        pageNumbers
    } = usePaginationFilter(cards, getFilteredCards);
    return (
        <div className='card-list'>
            <div className='card-list__filters'>
                <FilterBar
                    filters={typeCardFilters}
                    current={currentType}
                    setCurrent={setCurrencyType}
                />
                <FilterBar
                    filters={currencyFilters}
                    current={currentCurrency}
                    setCurrent={setCurrentCurrency}
                />
            </div>
            {isLoading ? (
                <Preloader />
            ) : currentItems.length ? (
                <div className='card-list__list'>
                    {currentItems.map(el => (
                        <UniversalCardCard key={el.id} card={el}>
                            {'status' in el && (
                                <ProductStatuses
                                    isMaster={false}
                                    isFemale={true}
                                    status={el.status}
                                />
                            )}
                        </UniversalCardCard>
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
                </div>
            ) : (
                <MessageCard
                    title={t(
                        'На данный момент \n у Вас нет соответствующих карт'
                    )}
                    buttonText={t('Создать карту')}
                    buttonLink={RouteName.CARD_PAGE + '/' + CREATE}
                />
            )}
        </div>
    );
};
