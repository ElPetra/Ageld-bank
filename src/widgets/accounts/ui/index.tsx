import { useEffect, useState } from 'react';

import { useGetAccountsQuery } from 'src/shared/api';
import { Preloader, Text } from 'src/shared/ui';
import {
    ACCOUNTS,
    MY_ACCOUNTS,
    OPENED_ACCOUNTS,
    OPEN_ACCOUNT_REQUEST,
    CLOSED_ACCOUNTS,
    BLOCKED_ACCOUNTS,
    ALL_CURRENCY,
    AccountsRouteName,
    currencyFilters,
    RouteName
} from 'src/shared/model';
import { useAuth } from 'src/entities/user';
import { FilterBar } from 'src/entities/filter';
import { Menu } from 'src/features/menu';

import { filterAccounts } from '../lib';
import { AccountList } from './list';

export const Accounts = () => {
    const { signedOut } = useAuth();
    const { data: accounts, isLoading, error } = useGetAccountsQuery();

    const [currency, setCurrency] = useState<string>(ALL_CURRENCY);

    useEffect(() => {
        if (error) {
            return signedOut();
        }
    }, [error, signedOut]);

    return isLoading ? (
        <Preloader />
    ) : (
        <>
            <Text tag='h2' size='m' weight='medium'>
                {MY_ACCOUNTS}
            </Text>
            <Menu
                href={RouteName.MAIN_PAGE + '/' + ACCOUNTS}
                routes={AccountsRouteName}
                variant='secondary'
                elements={[
                    {
                        id: 1,
                        name: OPENED_ACCOUNTS,
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
                        name: OPEN_ACCOUNT_REQUEST,
                        component: <AccountList accounts={[]} />
                    },
                    {
                        id: 3,
                        name: CLOSED_ACCOUNTS,
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
                        name: BLOCKED_ACCOUNTS,
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
