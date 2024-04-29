import { useMemo, useState } from 'react';

import { ALL_CURRENCY } from 'src/shared/model';

import type { Account, Status } from 'src/shared/model';
import type { Dispatch, SetStateAction } from 'react';

export const useAccountsFilter = (
    accounts: Account[]
): [
    [string, Dispatch<SetStateAction<string>>],
    (status: Status) => Account[]
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
