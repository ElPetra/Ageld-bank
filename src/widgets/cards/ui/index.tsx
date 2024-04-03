import { Menu } from 'src/features/menu';
import { Text } from 'src/shared/ui';

import { CardContent } from 'src/widgets/cards/ui/content/index.js';

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
