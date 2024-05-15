import { Menu } from 'src/features/menu';
import {
    RouteName,
    AuthStatus,
    DepositRouteName,
    DEPOSITS
} from 'src/shared/model';
import { DEPOSITS_OFFERED, CUSTOMER_DEPOSITS } from 'src/shared/model/deposits';
import { CustomerDeposits } from 'src/widgets/deposits/ui/customer-deposits/ui';
import { DepositProducts } from 'src/widgets/deposits/ui/deposit_products/ui';
import { Text } from 'src/shared/ui';
import { useAuth } from 'src/entities/user';
import { mockDeposits } from 'src/shared/model/deposits';
import { DEPOSITS_TITLE } from 'src/shared/model/deposits';
export const Deposits = () => {
    const { authStatus } = useAuth();
    return (
        <div>
            <Text tag='h2' size='m' weight='medium'>
                {DEPOSITS_TITLE}
            </Text>
            <Menu
                href={RouteName.MAIN_PAGE + '/' + DEPOSITS}
                routes={DepositRouteName}
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
                                  id: 2,
                                  name: DEPOSITS_OFFERED,
                                  component: <DepositProducts />
                              }
                          ]
                }
            />
        </div>
    );
};
