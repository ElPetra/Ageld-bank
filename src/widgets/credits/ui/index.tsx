import { useTranslation } from 'react-i18next';

import {
    AuthStatus,
    RouteName,
    CreditsRouteName,
    CreditsGuestRouteName,
    CREDITS
} from 'src/shared/model';
import { Text } from 'src/shared/ui';
import { Menu } from 'src/features/menu';
import { useAuth } from 'src/entities/user';

import { CustomerCredits } from './customer-credits';
import { CreditProducts } from './credit-products';

export const Credits = () => {
    const { t } = useTranslation();
    const { authStatus } = useAuth();
    return (
        <>
            <Text tag='h2' size='m' weight='medium'>
                {t('Кредиты')}
            </Text>
            <Menu
                href={RouteName.MAIN_PAGE + '/' + CREDITS}
                routes={
                    authStatus === AuthStatus.SignedIn
                        ? CreditsRouteName
                        : CreditsGuestRouteName
                }
                variant='secondary'
                elements={
                    authStatus === AuthStatus.SignedIn
                        ? [
                              {
                                  id: 1,
                                  name: t('Мои кредиты'),
                                  component: <CustomerCredits />
                              },
                              {
                                  id: 2,
                                  name: t('Кредиты A-Geld'),
                                  component: <CreditProducts />
                              },
                              {
                                  id: 3,
                                  name: t('Кредитный калькулятор'),
                                  component: (
                                      <div>{t('Кредитный калькулятор')}</div>
                                  )
                              },
                              {
                                  id: 4,
                                  name: t('Поданные заявки'),
                                  component: <div>{t('Поданные заявки')}</div>
                              }
                          ]
                        : [
                              {
                                  id: 1,
                                  name: t('Карточные продукты'),
                                  component: <CreditProducts />
                              },
                              {
                                  id: 2,
                                  name: t('Кредитный калькулятор'),
                                  component: (
                                      <div>{t('Кредитный калькулятор')}</div>
                                  )
                              }
                          ]
                }
            />
        </>
    );
};
