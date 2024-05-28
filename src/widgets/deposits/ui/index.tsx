import { useTranslation } from 'react-i18next';

import {
    RouteName,
    AuthStatus,
    DEPOSITS,
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
    const { t } = useTranslation();
    return (
        <div>
            <Text tag='h2' size='m' weight='medium'>
                {t('Депозиты')}
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
                                  name: t('Мои депозиты'),
                                  component: (
                                      <CustomerDeposits
                                          content={mockDeposits}
                                      />
                                  )
                              },
                              {
                                  id: 2,
                                  name: t('Депозиты A-geld'),
                                  component: <DepositProducts />
                              }
                          ]
                        : [
                              {
                                  id: 1,
                                  name: t('Депозиты A-geld'),
                                  component: <DepositProducts />
                              }
                          ]
                }
            />
        </div>
    );
};
