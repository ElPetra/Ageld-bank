import {
    AuthStatus,
    CARDS,
    CARD_PRODUCTS,
    CUSTOMER_CARDS,
    CARDS_TITLE,
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
    const { authStatus } = useAuth();
    return (
        <>
            <Text tag='h2' size='m' weight='medium'>
                {CARDS_TITLE}
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
                                  name: CUSTOMER_CARDS,
                                  component: <CustomerCards />
                              },
                              {
                                  id: 2,
                                  name: CARD_PRODUCTS,
                                  component: <CardProducts />
                              }
                          ]
                        : [
                              {
                                  id: 1,
                                  name: CARD_PRODUCTS,
                                  component: <CardProducts />
                              }
                          ]
                }
            />
        </>
    );
};
