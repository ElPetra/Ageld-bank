import { useMemo, useState } from 'react';

import { type Account, ALL_CURRENCY } from '../model';

import type { Dispatch, SetStateAction } from 'react';

export const useAccountsFilter = (
    accounts: Account[]
): [
    [string, Dispatch<SetStateAction<string>>],
    (status: 'active' | 'closed' | 'requested' | 'blocked') => Account[]
] => {
    const [currency, setCurrency] = useState<string>(ALL_CURRENCY);

    const filteredAccounts = useMemo<Account[]>(
        () =>
            accounts.filter(
                el =>
                    currency === ALL_CURRENCY ||
                    el.currency === currency.toLowerCase()
            ),
        [accounts, currency] //ругается на депсы из-за того, что мокаем даные. Когда счета будет отдавать бек, ругаться перестанет
    );

    const getSelectedAccounts = (status: string): Account[] =>
        filteredAccounts.filter(el => el.status === status);

    return [[currency, setCurrency], getSelectedAccounts];
};

export const checkAccountAvailable = (account: Account) =>
    account.status !== 'closed' ||
    (account.closed &&
        +account.closed < +account.closed + 3 * 30 * 24 * 60 * 60 * 1000);
