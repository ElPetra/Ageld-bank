import './styles.scss';
import { Icon } from 'src/shared/ui';
import { Text } from 'src/shared/ui';
import {
    DEPOSIT_BALANCE,
    START_BALANCE,
    DEPOSIT_PLAN,
    URGENT,
    DEPOSIT_TERM,
    INTEREST_RATE
} from 'src/shared/model';
import { ProductStatuses } from 'src/entities/product';
import { AccountsMoreInfo } from 'src/pages/account/ui/account-info/more-info';

import { ACCOUNT_NUMBER } from 'src/pages/account/model';

import { mockDeposits } from 'src/shared/model';

export const DepositInfo = () => {
    const deposit = mockDeposits[0];

    return (
        <div className='deposit-info__card'>
            <div className='deposit-info__column'>
                <div className='deposit-info__row'>
                    <div className='deposit-info__name'>
                        <div className='deposit-info__name__info'>
                            <div className='deposit-info__name__first-row'>
                                <Text color='light' size='l' weight='regular'>
                                    {deposit.name}
                                </Text>
                                <ProductStatuses
                                    isMaster={false}
                                    status={'active'}
                                />
                                <ProductStatuses
                                    isMaster={false}
                                    status={'capitalization'}
                                />
                            </div>
                            <div className='deposit-info__name__second-row'>
                                <div>
                                    <Text color='quadruple'>
                                        {ACCOUNT_NUMBER}
                                    </Text>
                                    <Text color='quadruple'>{deposit.id}</Text>
                                </div>
                                <button>
                                    <Icon icon='copy-icon' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='deposit-info__name__more-info'>
                        <AccountsMoreInfo status={'active'} />
                    </div>
                </div>
                <div className='deposit-info__info'>
                    <div>
                        <Text color='light' size='xs'>
                            {DEPOSIT_PLAN}
                        </Text>
                        <Text color='quadruple'>{URGENT}</Text>
                    </div>
                    <div>
                        <Text size='xs'>{DEPOSIT_TERM}</Text>
                        <Text color='quadruple'>{deposit.term}</Text>
                    </div>

                    <div>
                        <Text size='xs'>{INTEREST_RATE}</Text>
                        <Text color='quadruple'>{deposit.interestRate}</Text>
                    </div>
                </div>
            </div>
            <div className='deposit-info__column'>
                <div className='deposit-info__balance'>
                    <Text size='m' weight='medium'>
                        {DEPOSIT_BALANCE}
                        {' ' + deposit.balance + ' '}
                    </Text>
                    <Text size='m' weight='medium'>
                        {START_BALANCE}
                        {' ' + deposit.startBalance + ' '}
                        {deposit.currency}
                    </Text>
                    <AccountsMoreInfo status={deposit.status} />
                </div>
            </div>
        </div>
    );
};
