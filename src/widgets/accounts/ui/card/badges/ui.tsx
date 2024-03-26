import { Text } from 'src/shared/ui';

import {
    ACTIVE_ACCOUNT,
    BLOCKED_ACCOUNT,
    CLOSED_ACCOUNT,
    CURRENT_ACCOUNT
} from 'src/widgets/accounts/model/constants';

import { type Account } from 'src/widgets/accounts/model/mockAccounts';

const accountStatuses = {
    active: ACTIVE_ACCOUNT,
    closed: CLOSED_ACCOUNT,
    blocked: BLOCKED_ACCOUNT
};

interface Props {
    account: Account;
}

export const AccountBadges = ({ account }: Props) => {
    return (
        <div className='account-item_badges-container'>
            {account.main && (
                <div className='account-item_account-badge current-account'>
                    <Text weight='medium' size='xxs'>
                        {CURRENT_ACCOUNT}
                    </Text>
                </div>
            )}
            <div
                className={`account-item_account-badge account-type_${account.status}`}
            >
                <Text weight='medium' size='xxs'>
                    {accountStatuses[account.status]}
                </Text>
            </div>
        </div>
    );
};
