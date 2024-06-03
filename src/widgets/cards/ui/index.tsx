import { useTranslation } from 'react-i18next';

import {
    AuthStatus,
    CARDS,
    CardsRouteName,
    RouteName,
    CardsGuestRouteName
} from 'src/shared/model';
import { Text } from 'src/shared/ui';
import { Menu } from 'src/features/menu';
import { useAuth } from 'src/entities/user';

import { CustomerCards } from './customer-cards';
import { CardProducts } from './card-products';

export const Cards = () => {
    const { t } = useTranslation();
    const { authStatus } = useAuth();
    return (
        <>
            <Text tag='h2' size='m' weight='medium'>
                {t('Карты')}
            </Text>
            <Menu
                href={RouteName.MAIN_PAGE + '/' + CARDS}
                routes={
                    authStatus === AuthStatus.SignedIn
                        ? CardsRouteName
                        : CardsGuestRouteName
                }
                variant='secondary'
                elements={
                    authStatus === AuthStatus.SignedIn
                        ? [
                              {
                                  id: 1,
                                  name: t('Мои карты'),
                                  component: <CustomerCards />
                              },
                              {
                                  id: 2,
                                  name: t('Карточные продукты'),
                                  component: <CardProducts />
                              }
                          ]
                        : [
                              {
                                  id: 1,
                                  name: t('Карточные продукты'),
                                  component: <CardProducts />
                              }
                          ]
                }
            />
        </>
    );
};
