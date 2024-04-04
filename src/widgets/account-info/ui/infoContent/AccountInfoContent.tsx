import { useParams } from 'react-router-dom';
import { formatDateRuLocale } from 'src/shared/lib/formatDateRuLocale';
import { Button, Icon, Text } from 'src/shared/ui';
import { accountStatuses, accountTypes, CURRENT_ACCOUNT, currencySymbol } from 'src/shared/model';
import { accounts } from 'src/widgets/accounts/model';

import { ACCOUNT_BALANCE, ACCOUNT_BLOCK_REASON, ACCOUNT_CLOZED_DATE, ACCOUNT_NUMBER, ACCOUNT_OPENED_DATE, CONTRACT_NUMBER, MAKE_TRANSFER } from 'src/widgets/account-info/model/constants';

import {AccountsMoreInfo} from './moreInfo/AccountsMoreInfo';

export const AccountInfoContent = () => {
    const { id } = useParams();
    const currentAccount = accounts.find(el => el.id === id)!;
    const handleCopyAccount = () => {
        navigator.clipboard.writeText(currentAccount!.number);
    };
    return ( 
        <div className='account__info__container'>
            <div className='account__info__column'>
                <div className='account__info__names'>
                    <Icon widthAndHeight={40} icon={currentAccount.currency} />
                    <div className='account__info__about'>
                        <div className='account__info__statuses'>
                            <Text size='m' weight='medium'> 
                                {accountTypes[currentAccount.type]} 
                            </Text>
                            {currentAccount.master && (
                                <div className='account__card__status account__card__status-type__main'>
                                    <Text weight='medium' size='xxs'>
                                        {CURRENT_ACCOUNT}
                                    </Text>
                                </div>
                            )}
                            <div
                                className={`account__card__status account__card__status-type__${currentAccount.status}`}
                            >
                                <Text weight='medium' size='xxs'>
                                    {accountStatuses[currentAccount.status]}
                                </Text>
                            </div>
                        </div>
                        <div className='account__info__number'>
                            <Text>{ACCOUNT_NUMBER}{currentAccount.number}</Text>
                            <button onClick={handleCopyAccount}>
                                <Icon icon='copy' />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='account__info__data'>
                    <div className='account__info__point'>
                        <Text size='xs'>{CONTRACT_NUMBER}</Text>
                        <Text>{currentAccount.contractNumber}</Text>
                    </div>
                    <div className='account__info__point'>
                        <Text size='xs'>{ACCOUNT_OPENED_DATE}</Text>
                        <Text>
                            {formatDateRuLocale(currentAccount.created)}
                        </Text>
                    </div>
                    {currentAccount.status==='closed'&& currentAccount.closed && (
                        <div className='account__info__point'>
                            <Text size='xs'>{ACCOUNT_CLOZED_DATE}</Text>
                            <Text>
                                {formatDateRuLocale(currentAccount.closed)}
                            </Text>
                        </div>
                    )}
                    {currentAccount.status==='blocked' && (
                        <div className='account__info__point'>
                            <Text size='xs'>{ACCOUNT_BLOCK_REASON}</Text>
                            <Text>
                                {currentAccount.blockReason}
                            </Text>
                        </div>
                    )}
                </div>
            </div>
            <div className='account__info__column'>
                <div className='account__info__balance'>
                    <Text size='m' weight='medium'>
                        {ACCOUNT_BALANCE}{currentAccount.balance}
                        {currencySymbol[currentAccount.currency]}
                    </Text>
                    <AccountsMoreInfo accountStatus={currentAccount.status}/>
                </div>
                <Button variant='secondary'>{MAKE_TRANSFER}</Button>
            </div>
        </div>
    );
};
