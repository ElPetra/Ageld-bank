import { Link, useLocation } from 'react-router-dom';

import { Icon, Text } from 'src/shared/ui';
import { checkAccountAvailable } from 'src/widgets/accounts/lib';
import { RouteName } from 'src/shared/model';

import {
    type Account,
    ACCOUNT_NUMBER_REPLACEMENT,
    ACTIVE_ACCOUNT,
    BLOCKED_ACCOUNT,
    CLOSED_ACCOUNT,
    CREDIT_ACCOUNT,
    CURRENT_ACCOUNT,
    DEPOSIT_ACCOUNT,
    REQUESTED_ACCOUNT
} from '../../../model';

import './styles.scss';

export const accountTypes = {
    credit: CREDIT_ACCOUNT,
    deposit: DEPOSIT_ACCOUNT,
    current: CURRENT_ACCOUNT
};

export const accountStatuses = {
    active: ACTIVE_ACCOUNT,
    closed: CLOSED_ACCOUNT,
    blocked: BLOCKED_ACCOUNT,
    requested: REQUESTED_ACCOUNT
};

interface Props {
    account: Account;
}

export const currencyMatcher = {
    rub: '₽',
    usd: '$',
    eur: '€'
};

export const AccountCard = ({ account }: Props) => {
    const { pathname } = useLocation();
    const isAvailable = checkAccountAvailable(account);
    if (!isAvailable) {
        return null;
    }
    return (
        <div key={account.id} className='account__card'>
            <Link
                to={RouteName.ACCOUNTS + '/' + account.id}
                state={{ from: pathname }}
            >
                <div className='account__card__container'>
                    <div>
                        <Icon widthAndHeight={40} icon={account.currency} />
                        <div className='account__card__info'>
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
                    <div>
                        <div className='account__card__statuses'>
                            {account.main && (
                                <div className='account__card__status account__card__status-type__main'>
                                    <Text weight='medium' size='xxs'>
                                        {CURRENT_ACCOUNT}
                                    </Text>
                                </div>
                            )}
                            <div
                                className={`account__card__status account__card__status-type__${account.status}`}
                            >
                                <Text weight='medium' size='xxs'>
                                    {accountStatuses[account.status]}
                                </Text>
                            </div>
                        </div>
                        <div className='account__card__balance'>
                            <Text weight='medium'>{account.balance}</Text>
                            <div className='account__card__balance-currency'>
                                <Text weight='extra-bold' size='xs'>
                                    {currencyMatcher[account.currency]}
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
