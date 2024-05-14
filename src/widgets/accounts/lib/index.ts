import { ALL_CURRENCY } from 'src/shared/model';

import type { Account, Status } from 'src/shared/model';

export const filterAccounts = (
    accounts: Account[] | undefined,
    status: Status,
    currency: string
): Account[] => {
    return (
        accounts?.filter(
            el =>
                (currency === ALL_CURRENCY ||
                    el.currencyName === currency.toLowerCase()) &&
                el.statusName === status
        ) || []
    );
};
