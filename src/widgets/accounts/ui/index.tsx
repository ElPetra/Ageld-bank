import { Preloader, Text } from 'src/shared/ui';
import {
    ACCOUNTS,
    AccountsRouteName,
    ALL_CURRENCY,
    currencyFilters,
    RouteName
} from 'src/shared/model';
import { FilterBar } from 'src/entities/filter';
import { Menu } from 'src/features/menu';

import { filterAccounts } from '../lib';
import {
    MY_ACCOUNTS,
    OPENED_ACCOUNTS,
    OPEN_ACCOUNT_REQUEST,
    CLOSED_ACCOUNTS,
    BLOCKED_ACCOUNTS
} from '../model';

import { AccountContent } from './content';
import { useGetAccountsQuery } from 'src/shared/api';
import { useState } from 'react';

export const Accounts = () => {
    const { data: accounts, isLoading } = useGetAccountsQuery();

    const [currency, setCurrency] = useState<string>(ALL_CURRENCY);

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
                            <AccountContent
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
                        component: (
                            <AccountContent
                                accounts={filterAccounts(
                                    accounts,
                                    'requested',
                                    currency
                                )}
                            />
                        )
                    },
                    {
                        id: 3,
                        name: CLOSED_ACCOUNTS,
                        component: (
                            <AccountContent
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
                            <AccountContent
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
