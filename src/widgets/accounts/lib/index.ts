import { ALL_CURRENCY } from 'src/shared/model';

import type { Account, ProductStatus } from 'src/shared/model';

export const filterAccounts = (
    accounts: Account[] | undefined,
    status: ProductStatus,
    currency: string
): Account[] => {
    return (
        accounts?.filter(
            el =>
                (currency === ALL_CURRENCY ||
                    el.currency === currency.toLowerCase()) &&
                el.status === status
        ) || []
    );
};
