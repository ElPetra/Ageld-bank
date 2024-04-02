import { AccountCard } from 'src/widgets/accounts/ui/content/card/index.js';
import { AccountNotFound } from 'src/widgets/accounts/ui/content/not-found/index.js';

import { cards } from 'src/widgets/cards/model';
import { FiltersCardBar } from 'src/widgets/cards/ui/filter/index.js';
import { useCardsFilter } from 'src/widgets/cards/lib/index.js';
import { FinanceCard } from 'src/widgets/cards/ui/content/card/index.js';
import { useEffect } from 'react';

import type { Card } from 'src/widgets/cards/model';
interface Props {
    content: Card[];
}
export const CardContent = ({ content }: Props) => {
    const [[currency, setCurrency], getSelectedCards] = useCardsFilter(cards);
    useEffect(() => {
        console.log(content);
    }, []);
    return (
        <>
            <FiltersCardBar current={currency} setCurrent={setCurrency} />
            <div className='finance-card__content'>
                {content.length ? (
                    <div className='finance-card__list'>
                        {content.map(el => (
                            <FinanceCard key={el.id} card={el} />
                        ))}
                    </div>
                ) : (
                    <AccountNotFound />
                )}
            </div>
        </>
    );
};
