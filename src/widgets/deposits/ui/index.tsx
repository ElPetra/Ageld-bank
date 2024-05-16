import {
    RouteName,
    AuthStatus,
    DEPOSITS,
    CUSTOMER_DEPOSITS,
    DEPOSITS_TITLE,
    DEPOSITS_OFFERED,
    mockDeposits,
    DepositsRouteName,
    DepositsGuestRouteName
} from 'src/shared/model';
import { Text } from 'src/shared/ui';
import { useAuth } from 'src/entities/user';
import { Menu } from 'src/features/menu';

import { CustomerDeposits } from './customer-deposits';
import { DepositProducts } from './deposit-products';

export const Deposits = () => {
    const { authStatus } = useAuth();
    return (
        <div>
            <Text tag='h2' size='m' weight='medium'>
                {DEPOSITS_TITLE}
            </Text>
            <Menu
                href={RouteName.MAIN_PAGE + '/' + DEPOSITS}
                routes={
                    authStatus === AuthStatus.SignedIn
                        ? DepositsRouteName
                        : DepositsGuestRouteName
                }
                variant='secondary'
                elements={
                    authStatus === AuthStatus.SignedIn
                        ? [
                              {
                                  id: 1,
                                  name: CUSTOMER_DEPOSITS,
                                  component: (
                                      <CustomerDeposits
                                          content={mockDeposits}
                                      />
                                  )
                              },
                              {
                                  id: 2,
                                  name: DEPOSITS_OFFERED,
                                  component: <DepositProducts />
                              }
                          ]
                        : [
                              {
                                  id: 1,
                                  name: DEPOSITS_OFFERED,
                                  component: <DepositProducts />
                              }
                          ]
                }
            />
        </div>
    );
};
