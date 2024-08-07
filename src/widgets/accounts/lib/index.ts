import { ALL_CURRENCY } from 'src/shared/model';

import type { Account, AccountType } from 'src/shared/model';

interface FilterArgs {
    accounts: Account[] | undefined;
    type?: AccountType;
    currency: string;
    showClosed: boolean;
}

export const filterAccounts = ({
    accounts,
    type,
    currency,
    showClosed
}: FilterArgs): Account[] => {
    return (
        accounts?.filter(
            el =>
                (showClosed ||
                    (el.status !== 'closed' && el.status !== 'blocked')) &&
                (currency === ALL_CURRENCY ||
                    el.currency === currency.toLowerCase()) &&
                (!type || el.type === type)
        ) || []
    );
};
