import { useEffect, useState } from 'react';

import { useGetAccountsQuery } from 'src/shared/api';
import { Preloader, Text } from 'src/shared/ui';
import { isErrorStatusUnauthorized } from 'src/shared/lib';
import {
    ACCOUNTS,
    AccountsRouteName,
    currencyFilters,
    RouteName
} from 'src/shared/model';
import { useAuth } from 'src/entities/user';
import { FilterBar } from 'src/entities/filter';
import { Menu } from 'src/features/menu';
import { useTranslation } from 'react-i18next';

import { filterAccounts } from '../lib';

import { AccountList } from './list';

export const Accounts = () => {
    const { signedOut } = useAuth();
    const { data: accounts, isLoading, error } = useGetAccountsQuery();
    const { t } = useTranslation();
    const [currency, setCurrency] = useState<string>('Все');

    useEffect(() => {
        if (isErrorStatusUnauthorized(error)) {
            return signedOut();
        }
    }, [error, signedOut]);

    return isLoading ? (
        <Preloader />
    ) : (
        <>
            <Text tag='h2' size='m' weight='medium'>
                {t('Мои счета')}
            </Text>
            <Menu
                href={RouteName.MAIN_PAGE + '/' + ACCOUNTS}
                routes={AccountsRouteName}
                variant='secondary'
                elements={[
                    {
                        id: 1,
                        name: t('Открытые счета'),
                        component: (
                            <AccountList
                                accounts={filterAccounts(
                                    accounts,
                                    'active',
                                    currency
                                )}
                            />
                        )
                    },
                    {
                        id: 2,
                        name: t('Заявки на открытие счета'),
                        component: <AccountList accounts={[]} />
                    },
                    {
                        id: 3,
                        name: t('Закрытые счета'),
                        component: (
                            <AccountList
                                accounts={filterAccounts(
                                    accounts,
                                    'closed',
                                    currency
                                )}
                            />
                        )
                    },
                    {
                        id: 4,
                        name: t('Заблокированные счета'),
                        component: (
                            <AccountList
                                accounts={filterAccounts(
                                    accounts,
                                    'blocked',
                                    currency
                                )}
                            />
                        )
                    }
                ]}
            >
                <FilterBar
                    filters={currencyFilters}
                    current={currency}
                    setCurrent={setCurrency}
                />
            </Menu>
        </>
    );
};

/*

*/
