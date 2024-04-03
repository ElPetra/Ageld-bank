import { AccountNotFound } from 'src/widgets/accounts/ui/content/not-found';

import { cards } from 'src/widgets/cards/model';
import { FiltersCardBar } from 'src/widgets/cards/ui/filter/index.js';
import { useCardsFilter } from 'src/widgets/cards/lib/index.js';
import { FinanceCard } from 'src/widgets/cards/ui/content/card';
import { useEffect, useState } from 'react';
import { Pagination } from 'src/shared/ui/pagination/index.js';

export const CardContent = () => {
    const [[currency, setCurrency], getSelectedCards] = useCardsFilter(cards);
    const content = getSelectedCards(currency);
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(content.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = content.slice(indexOfFirstItem, indexOfLastItem);
    useEffect(() => {
        setCurrentPage(1);
    }, [currency]);
    return (
        <>
            <FiltersCardBar current={currency} setCurrent={setCurrency} />
            <div className='finance-card__content'>
                {content.length ? (
                    <>
                        <div className='finance-card__list'>
                            {currentItems.map(el => (
                                <FinanceCard key={el.id} card={el} />
                            ))}
                        </div>
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={(page: number) =>
                                setCurrentPage(page)
                            }
                        />
                    </>
                ) : (
                    <AccountNotFound />
                )}
            </div>
        </>
    );
};
