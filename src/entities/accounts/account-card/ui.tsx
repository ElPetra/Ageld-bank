import { Link } from 'react-router-dom';

import { Card, Icon, Text } from 'src/shared/ui';
import {
    ACCOUNT_NUMBER_REPLACEMENT,
    accountTypes,
    currencySymbol,
    RouteName
} from 'src/shared/model';

import type { ReactNode } from 'react';
import type { Account } from 'src/shared/model';

import './styles.scss';

interface Props {
    account: Account;
    children: ReactNode;
}

export const AccountCard = ({ account, children }: Props) => {
    return (
        <div>
            <Link to={RouteName.ACCOUNT_PAGE + '/' + account.number}>
                <Card color='quadruple' gap='medium' justify='space-between'>
                    <div className='account__card__column'>
                        <Icon widthAndHeight={40} icon={account.currency} />
                        <div className='account__card__info'>
                            <Text weight='medium'>
                                {account.number.replace(
                                    /.{14}/gm,
                                    ACCOUNT_NUMBER_REPLACEMENT
                                )}
                            </Text>
                            <Text weight='medium' color='light'>
                                {accountTypes[account.type]}
                            </Text>
                        </div>
                    </div>
                    <div className='account__card__column'>
                        {children}
                        <div className='account__card__balance'>
                            <Text weight='medium'>{account.balance}</Text>
                            <div className='account__card__balance-currency'>
                                <Text weight='extra-bold' size='xs'>
                                    {currencySymbol[account.currency]}
                                </Text>
                            </div>
                        </div>
                    </div>
                </Card>
            </Link>
        </div>
    );
};
