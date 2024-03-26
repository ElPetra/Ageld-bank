import { useMemo, useState } from 'react';

import { type Account } from 'src/widgets/accounts/model/mockAccounts';

import { ALL_CURRENCY } from 'src/widgets/accounts/model/constants';

export const useAccountsFilter = (
    accounts: Account[]
): [
    [string, React.Dispatch<React.SetStateAction<string>>],
    [string, React.Dispatch<React.SetStateAction<string>>],
    Account[]
] => {
    const [status, setStatus] = useState<string>('active');
    const [currency, setCurrency] = useState<string>(ALL_CURRENCY);
    const filteredAccounts = useMemo(
        () =>
            accounts.filter(
                el =>
                    currency === ALL_CURRENCY ||
                    el.currency === currency.toLowerCase()
            ),
        [accounts, currency] //ругается на депсы из-за того, что мокаем даные. Когда счета будет отдавать бек, ругаться перестанет
    );
    const selectedAccounts = useMemo(
        () => filteredAccounts.filter(el => el.status === status),
        [filteredAccounts, status]
    );

    return [[status, setStatus], [currency, setCurrency], selectedAccounts];
};
