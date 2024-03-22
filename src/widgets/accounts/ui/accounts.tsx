import { Text } from 'src/shared/ui';

import { MY_ACCOUNTS } from 'src/widgets/accounts/model/constants';
import { useAccountsFilter } from 'src/widgets/accounts/lib/useAccountsFilter';

import { CurrencyFilter } from 'src/widgets/accounts/ui/filters/currencyFilter/ui';
import { StatusFilter } from 'src/widgets/accounts/ui/filters/statusFilter/ui';
import { AccountCard } from 'src/widgets/accounts/ui/card/ui';

import { AccountsNotFound } from 'src/widgets/accounts/ui/filters/notFound/ui';

import { accounts } from '../model/mockAccounts';

import './index.scss';

export const Accounts = () => {
    const [[status, setStatus], [currency, setCurrency], currentAccoutsList] =
        useAccountsFilter(accounts);
    return (
        <div className='accounts'>
            <div className='accounts-header'>
                <Text tag='h2' size='m' weight='medium'>
                    {MY_ACCOUNTS}
                </Text>
                <div className='accounts-header_filters-container'>
                    <StatusFilter currentFilter={status} onClick={setStatus} />
                    <CurrencyFilter
                        currentFilter={currency}
                        onClick={setCurrency}
                    />
                </div>
            </div>
            <div className='accounts-body'>
                {currentAccoutsList.length ? (
                    currentAccoutsList.map(el => (
                        <AccountCard key={el.id} account={el} />
                    ))
                ) : (
                    <AccountsNotFound />
                )}
            </div>
        </div>
    );
};
