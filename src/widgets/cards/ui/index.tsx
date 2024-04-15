import { CARDS, CardsRouteName, RouteName } from 'src/shared/model';
import { Menu } from 'src/features/menu';
import { Text } from 'src/shared/ui';

import { CardContent } from 'src/widgets/cards/ui/content';

import { CARDS_TITLE } from '../model';

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
                        component: <div>Мои карты</div>
                    },
                    {
                        id: 2,
                        name: 'Карточные продукты',
                        component: <CardContent />
                    }
                ]}
            />
        </>
    );
};
