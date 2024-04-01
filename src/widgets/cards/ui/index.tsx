import { Menu } from 'src/features/menu';
import { Text } from 'src/shared/ui';

import { CARDS } from '../model';

export const Cards = () => {
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
                        component: <div>мои карты</div>
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
