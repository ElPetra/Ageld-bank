import { ALL_CURRENCY } from 'src/shared/model';

import type { Account, AccountType } from 'src/shared/model';

interface FilterArgs {
    accounts: Account[] | undefined;
    type?: AccountType;
    currency: string;
    notClosed: boolean;
}

export const filterAccounts = ({
    accounts,
    type,
    currency,
    notClosed
}: FilterArgs): Account[] => {
    return (
        accounts?.filter(
            el =>
                (notClosed || el.status !== 'closed') &&
                (currency === ALL_CURRENCY ||
                    el.currency === currency.toLowerCase()) &&
                (!type || el.type === type)
        ) || []
    );
};
