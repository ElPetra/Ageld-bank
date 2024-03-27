import { Text } from 'src/shared/ui';
import { Menu } from 'src/features/menu';

import { useAccountsFilter } from '../lib';
import {
    accounts,
    BLOCKED_ACCOUNTS,
    CLOSED_ACCOUNTS,
    MY_ACCOUNTS,
    OPEN_ACCOUNT_REQUEST,
    OPENED_ACCOUNTS
} from '../model';

import { FiltersBar } from './filter';
import { AccountContent } from './content';

export const Accounts = () => {
    const [[currency, setCurrency], getSelectedAccounts] =
        useAccountsFilter(accounts);

    return (
        <>
            <Text tag='h2' size='m' weight='medium'>
                {MY_ACCOUNTS}
            </Text>
            <Menu
                variant={'secondary'}
                elements={[
                    {
                        id: 1,
                        name: OPENED_ACCOUNTS,
                        component: (
                            <AccountContent
                                content={getSelectedAccounts('active')}
                            />
                        )
                    },
                    {
                        id: 2,
                        name: OPEN_ACCOUNT_REQUEST,
                        component: (
                            <AccountContent
                                content={getSelectedAccounts('requested')}
                            />
                        )
                    },
                    {
                        id: 3,
                        name: CLOSED_ACCOUNTS,
                        component: (
                            <AccountContent
                                content={getSelectedAccounts('closed')}
                            />
                        )
                    },
                    {
                        id: 4,
                        name: BLOCKED_ACCOUNTS,
                        component: (
                            <AccountContent
                                content={getSelectedAccounts('blocked')}
                            />
                        )
                    }
                ]}
            >
                <FiltersBar current={currency} setCurrent={setCurrency} />
            </Menu>
        </>
    );
};

/*

*/
