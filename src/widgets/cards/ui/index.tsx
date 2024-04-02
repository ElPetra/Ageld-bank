import { Menu } from 'src/features/menu';
import { Text } from 'src/shared/ui';

import { CardContent } from 'src/widgets/cards/ui/content/index.js';
import { FiltersCardBar } from 'src/widgets/cards/ui/filter/index.js';
import { useCardsFilter } from 'src/widgets/cards/lib/index.js';
import { useEffect } from 'react';

import { cards, CARDS } from '../model';

export const Cards = () => {
    const [[currency, setCurrency], getSelectedCards] = useCardsFilter(cards);

    useEffect(() => {
        console.log(cards);
    }, []);
    return (
        <>
            <Text tag='h2' size='m' weight='medium'>
                {CARDS}
            </Text>

            <Menu
                variant={'secondary'}
                elements={[
                    {
                        id: 1,
                        name: 'Мои карты',
                        component: (
                            <CardContent content={getSelectedCards('debet')} />
                        )
                    },
                    {
                        id: 2,
                        name: 'Карточные продукты',
                        component: <div>Карточные продукты</div>
                    }
                ]}
            />
        </>
    );
};
