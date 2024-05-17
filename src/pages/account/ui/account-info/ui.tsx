import { formatDate } from 'src/shared/lib';
import { Button, Card, Icon, Text } from 'src/shared/ui';
import { accountTypes, currencySymbol } from 'src/shared/model';
import { ProductStatuses } from 'src/entities/product';

import {
    ACCOUNT_BALANCE,
    ACCOUNT_BLOCK_REASON,
    ACCOUNT_CLOSED_DATE,
    ACCOUNT_NUMBER,
    ACCOUNT_OPENED_DATE,
    MAKE_TRANSFER
} from '../../model';

import { AccountsMoreInfo } from './more-info';

import type { AccountDetails } from 'src/shared/model';

import './styles.scss';

interface Props {
    account: AccountDetails;
}

export const AccountInfo = ({ account }: Props) => {
    const handleCopyAccount = () => {
        navigator.clipboard.writeText(account.number);
    };

    return (
        <Card
            color='quadruple'
            justify='space-between'
            gap='large'
            padding='large'
            borderRadius='extra-large'
        >
            <div className='account-info__first-column'>
                <div className='account-info__first-row'>
                    <div className='account-info__main'>
                        <Icon widthAndHeight={40} icon={account.currency} />
                        <div className='account-info__main__info'>
                            <div className='account-info__main__info__first-row'>
                                <Text size='m' weight='medium'>
                                    {accountTypes[account.type]}
                                </Text>
                                <ProductStatuses
                                    isMaster={account.isMaster}
                                    status={account.status}
                                />
                            </div>
                            <div className='account-info__main__info__second-row'>
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
                    <div>
                        <AccountsMoreInfo status={account.status} />
                    </div>
                </div>
                <div className='account-info__second-row'>
                    <div>
                        <Text size='xs' color='quadruple'>
                            {ACCOUNT_OPENED_DATE}
                        </Text>
                        <Text weight='medium'>
                            {formatDate(account.createdAt)}
                        </Text>
                    </div>
                    {account.status === 'closed' && account.closedAt && (
                        <div>
                            <Text size='xs' color='quadruple'>
                                {ACCOUNT_CLOSED_DATE}
                            </Text>
                            <Text weight='medium'>
                                {formatDate(account.closedAt)}
                            </Text>
                        </div>
                    )}
                    {account.status === 'blocked' && (
                        <div>
                            <Text size='xs' color='quadruple'>
                                {ACCOUNT_BLOCK_REASON}
                            </Text>
                            <Text weight='medium'>{account.blockReason}</Text>
                        </div>
                    )}
                </div>
            </div>
            <div className='account-info__second-column'>
                <div className='account-info__balance'>
                    <Text size='m' weight='medium'>
                        {ACCOUNT_BALANCE}
                        {account.balance + ' '}
                        {currencySymbol[account.currency]}
                    </Text>
                    <AccountsMoreInfo status={account.status} />
                </div>
                <Button variant='secondary'>{MAKE_TRANSFER}</Button>
            </div>
        </Card>
    );
};
