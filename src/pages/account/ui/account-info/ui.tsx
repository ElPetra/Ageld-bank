import { formatDate } from 'src/shared/lib';
import { Button, Card, Icon, Text } from 'src/shared/ui';
import { accountTypes, currencySymbol } from 'src/shared/model';
import { ProductStatuses } from 'src/entities/product';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();
    //Todo: некоторые кастомные места, вроде причины блокировки, не обернуть в "t"
    return (
        <Card
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
                                    {t(accountTypes[account.type])}
                                </Text>
                                <ProductStatuses
                                    isMaster={account.isMaster}
                                    status={account.status}
                                />
                            </div>
                            <div className='account-info__main__info__second-row'>
                                <div>
                                    <Text color='tertiary'>
                                        {t('№ счета: ')}
                                    </Text>
                                    <Text color='tertiary'>
                                        {account.number}
                                    </Text>
                                </div>
                                <button onClick={handleCopyAccount}>
                                    <Icon icon='copy' />
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
                        <Text size='xs' color='tertiary'>
                            {t('Дата открытия счета')}
                        </Text>
                        <Text weight='medium'>
                            {formatDate(account.createdAt)}
                        </Text>
                    </div>
                    {account.status === 'closed' && account.closedAt && (
                        <div>
                            <Text size='xs' color='tertiary'>
                                {t('Дата закрытия счета')}
                            </Text>
                            <Text weight='medium'>
                                {formatDate(account.closedAt)}
                            </Text>
                        </div>
                    )}
                    {account.status === 'blocked' && (
                        <div>
                            <Text size='xs' color='tertiary'>
                                {t('Причина блокировки')}
                            </Text>
                            <Text weight='medium'>{account.blockReason}</Text>
                        </div>
                    )}
                </div>
            </div>
            <div className='account-info__second-column'>
                <div className='account-info__balance'>
                    <Text size='m' weight='medium'>
                        {t('Баланс') + ': '}
                        {account.balance + ' '}
                        {currencySymbol[account.currency]}
                    </Text>
                    <AccountsMoreInfo status={account.status} />
                </div>
                <Button variant='secondary'>{t('Перевод')}</Button>
            </div>
        </Card>
    );
};
