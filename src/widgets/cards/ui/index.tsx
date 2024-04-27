import { CARDS, CardsRouteName, RouteName } from 'src/shared/model';
import { Text } from 'src/shared/ui';
import { Menu } from 'src/features/menu';

import { CARDS_TITLE } from '../model';
import { CardProducts } from './card-products';
import { MyCards } from './my-cards';

export const Cards = () => {
    return (
        <>
            <Text tag='h2' size='m' weight='medium'>
                {CARDS_TITLE}
            </Text>
            <Menu
                href={RouteName.MAIN_PAGE + '/' + CARDS}
                routes={CardsRouteName}
                variant='secondary'
                elements={[
                    {
                        id: 1,
                        name: 'Мои карты',
                        component: <MyCards />
                    },
                    {
                        id: 2,
                        name: 'Карточные продукты',
                        component: <CardProducts />
                    }
                ]}
            />
        </>
    );
};
