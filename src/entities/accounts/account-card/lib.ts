import type { Account } from 'src/shared/model';

export const checkAccountAvailable = (account: Account) =>
    account.status !== 'closed' ||
    (account.closed &&
        +account.closed < +account.closed + 3 * 30 * 24 * 60 * 60 * 1000);
