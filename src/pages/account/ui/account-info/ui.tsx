import { formatDateRuLocale } from 'src/shared/lib';
import { Button, Icon, Text } from 'src/shared/ui';

import { accountTypes, currencySymbol } from 'src/shared/model';
import { AccountStatuses } from 'src/entities/accounts';

import {
    ACCOUNT_BALANCE,
    ACCOUNT_BLOCK_REASON,
    ACCOUNT_CLOSED_DATE,
    ACCOUNT_NUMBER,
    ACCOUNT_OPENED_DATE,
    CONTRACT_NUMBER,
    MAKE_TRANSFER
} from '../../model';

import { AccountsMoreInfo } from './more-info';

import type { Account } from 'src/shared/model';

import './styles.scss';

interface Props {
    account: Account;
}

export const AccountInfo = ({ account }: Props) => {
    const handleCopyAccount = () => {
        navigator.clipboard.writeText(account.number);
    };

    return (
        <div className='account-info__card'>
            <div className='account-info__column'>
                <div className='account-info__row'>
                    <div className='account-info__name'>
                        <Icon widthAndHeight={40} icon={account.currency} />
                        <div className='account-info__name__info'>
                            <div className='account-info__name__first-row'>
                                <Text size='m' weight='medium'>
                                    {accountTypes[account.type]}
                                </Text>
                                <AccountStatuses
                                    master={account.master}
                                    status={account.status}
                                />
                            </div>
                            <div className='account-info__name__second-row'>
                                <div>
                                    <Text color='quadruple'>
                                        {ACCOUNT_NUMBER}
                                    </Text>
                                    <Text color='quadruple'>
                                        {account.number}
                                    </Text>
                                </div>
                                <button onClick={handleCopyAccount}>
                                    <Icon icon='copy-icon' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='account-info__name__more-info'>
                        <AccountsMoreInfo accountStatus={account.status} />
                    </div>
                </div>
                <div className='account-info__info'>
                    <div>
                        <Text size='xs'>{CONTRACT_NUMBER}</Text>
                        <Text color='quadruple'>{account.contractNumber}</Text>
                    </div>
                    <div>
                        <Text size='xs'>{ACCOUNT_OPENED_DATE}</Text>
                        <Text color='quadruple'>
                            {formatDateRuLocale(account.created)}
                        </Text>
                    </div>
                    {account.status === 'closed' && account.closed && (
                        <div>
                            <Text size='xs'>{ACCOUNT_CLOSED_DATE}</Text>
                            <Text color='quadruple'>
                                {formatDateRuLocale(account.closed)}
                            </Text>
                        </div>
                    )}
                    {account.status === 'blocked' && (
                        <div>
                            <Text size='xs'>{ACCOUNT_BLOCK_REASON}</Text>
                            <Text color='quadruple'>{account.blockReason}</Text>
                        </div>
                    )}
                </div>
            </div>
            <div className='account-info__column'>
                <div className='account-info__balance'>
                    <Text size='m' weight='medium'>
                        {ACCOUNT_BALANCE}
                        {account.balance + ' '}
                        {currencySymbol[account.currency]}
                    </Text>
                    <AccountsMoreInfo accountStatus={account.status} />
                </div>
                <Button variant='secondary'>{MAKE_TRANSFER}</Button>
            </div>
        </div>
    );
};
