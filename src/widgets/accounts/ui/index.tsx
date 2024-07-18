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
import { AccountCreationCards } from './createtion-cards';

export const Accounts = () => {
    const { signedOut } = useAuth();
    const { data: accounts, isLoading, error } = useGetAccountsQuery();
    const { t } = useTranslation();
    const [currency, setCurrency] = useState<string>('Все');
    const [showClosed, setShowClosed] = useState<boolean>(false);
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
                        name: t('Все'),
                        component: (
                            <AccountList
                                accounts={filterAccounts({
                                    accounts,
                                    currency,
                                    notClosed: showClosed
                                })}
                                setShowClosed={setShowClosed}
                            />
                        )
                    },
                    {
                        id: 2,
                        name: t('Дебетовые'),
                        component: (
                            <AccountList
                                accounts={filterAccounts({
                                    accounts,
                                    currency,
                                    type: 'debit',
                                    notClosed: showClosed
                                })}
                                setShowClosed={setShowClosed}
                            />
                        )
                    },
                    {
                        id: 3,
                        name: t('Депозитные'),
                        component: (
                            <AccountList
                                accounts={filterAccounts({
                                    accounts,
                                    currency,
                                    type: 'deposit',
                                    notClosed: showClosed
                                })}
                                setShowClosed={setShowClosed}
                            />
                        )
                    },
                    {
                        id: 4,
                        name: t('Кредитные'),
                        component: (
                            <AccountList
                                accounts={filterAccounts({
                                    accounts,
                                    currency,
                                    type: 'credit',
                                    notClosed: showClosed
                                })}
                                setShowClosed={setShowClosed}
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
            <AccountCreationCards />
        </>
    );
};

/*

*/
