import { Icon, Text } from 'src/shared/ui';
import { Link } from 'react-router-dom';

import {
    ACCOUNT_NUMBER_REPLACEMENT,
    CREDIT_ACCOUNT,
    CURRENT_ACCOUNT,
    DEPOSIT_ACCOUNT
} from 'src/widgets/accounts/model/constants';

import { type Account } from 'src/widgets/accounts/model/mockAccounts';

import { AccountBadges } from 'src/widgets/accounts/ui/card/badges/ui';

const accountTypes = {
    credit: CREDIT_ACCOUNT,
    deposit: DEPOSIT_ACCOUNT,
    current: CURRENT_ACCOUNT
};

interface Props {
    account: Account;
}
const currencyMatcher = {
    rub: '₽',
    usd: '$',
    eur: '€'
};
export const AccountCard = ({ account }: Props) => {
    return (
        <Link to={`${account.id}`}>
            <div key={account.id} className='account-item'>
                <div className='account-item_info-container'>
                    <Icon widthAndHeight={40} icon={account.currency} />
                    <div className='.about-account'>
                        <Text weight='medium'>
                            {account.account_number.replace(
                                /.{10}/gm,
                                ACCOUNT_NUMBER_REPLACEMENT
                            )}
                        </Text>
                        <Text weight='medium'>
                            {accountTypes[account.type]}
                        </Text>
                    </div>
                </div>
                <AccountBadges account={account} />
                <div className='account-item_balance'>
                    <Text weight='medium'>{account.balance}</Text>
                    <div className='currency'>
                        <Text weight='extra-bold' size='xs'>
                            {currencyMatcher[account.currency]}
                        </Text>
                    </div>
                </div>
            </div>
        </Link>
    );
};
