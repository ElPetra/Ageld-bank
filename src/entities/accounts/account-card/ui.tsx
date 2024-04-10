import { Link } from 'react-router-dom';

import { Icon, Text } from 'src/shared/ui';

import {
    ACCOUNT_NUMBER_REPLACEMENT,
    accountTypes,
    currencySymbol,
    RouteName
} from 'src/shared/model';

import { checkAccountAvailable } from './lib';
import { AccountStatuses } from './account-statuses';

import type { Account } from 'src/shared/model';

import './styles.scss';

interface Props {
    account: Account;
}

export const AccountCard = ({ account }: Props) => {
    const isAvailable = checkAccountAvailable(account);

    return isAvailable ? (
        <div key={account.id} className='account__card'>
            <Link to={RouteName.ACCOUNT_PAGE + '/' + account.id}>
                <div className='account__card__container'>
                    <div>
                        <Icon widthAndHeight={40} icon={account.currency} />
                        <div className='account__card__info'>
                            <Text weight='medium'>
                                {account.number.replace(
                                    /.{10}/gm,
                                    ACCOUNT_NUMBER_REPLACEMENT
                                )}
                            </Text>
                            <Text weight='medium' color='quadruple'>
                                {accountTypes[account.type]}
                            </Text>
                        </div>
                    </div>
                    <div>
                        <AccountStatuses
                            master={account.master}
                            status={account.status}
                            direction='column'
                        />
                        <div className='account__card__balance'>
                            <Text weight='medium'>{account.balance}</Text>
                            <div className='account__card__balance-currency'>
                                <Text weight='extra-bold' size='xs'>
                                    {currencySymbol[account.currency]}
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    ) : null;
};
