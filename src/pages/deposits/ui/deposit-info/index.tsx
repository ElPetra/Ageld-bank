import { useState } from 'react';

import { Icon, Text, Button, Card } from 'src/shared/ui';
import {
    DEPOSIT_BALANCE,
    INITIAL_BALANCE,
    DEPOSIT_PLAN,
    FUND,
    WITHDRAW,
    URGENT,
    PROLONGATE,
    DEPOSIT_TERM,
    INTEREST_RATE,
    UNTIMELY_WITHDRAWAL_INTEREST_RATE,
    IRREVOCABILITY,
    CONNECTED_SUBACCOUNT_NUM,
    ENABLE_AUTOPROLONGATION,
    DISABLE_AUTOPROLONGATION
} from 'src/shared/model';

import { ProductStatuses } from 'src/entities/product';
import { AccountsMoreInfo } from 'src/pages/account/ui/account-info/more-info';

import { ACCOUNT_NUMBER } from 'src/pages/account/model';

import { mockDeposits } from 'src/shared/model';

import './styles.scss';

export const DepositInfo = () => {
    const deposit = mockDeposits[0];
    const [prolongation, setProlongation] = useState(false);
    return (
        <Card
            color='quadruple'
            direction='column'
            gap='large'
            padding='large'
            borderRadius='extra-large'
        >
            <div className='deposit-info__first-row'>
                <div className='deposit-info__main'>
                    <Text color='light' size='l' weight='regular'>
                        {deposit.name}
                    </Text>
                    <ProductStatuses isMaster={false} status={'active'} />
                    <ProductStatuses
                        isMaster={false}
                        status={
                            prolongation
                                ? 'autoprolongation'
                                : 'autoprolongationoff'
                        }
                    />
                </div>
                <div>
                    <AccountsMoreInfo status='active' />
                </div>
            </div>
            <div className='deposit-info__first-column'>
                <div className='deposit-info__row'>
                    <div className='deposit-info__main__info'>
                        <div className='deposit-info__main__info__second-row'>
                            <div>
                                <Text color='quadruple'>{ACCOUNT_NUMBER}</Text>
                                <Text color='quadruple'>{deposit.id}</Text>
                            </div>
                            <button>
                                <Icon icon='copy-icon' />
                            </button>
                        </div>
                        <div className='deposit-info__main__info__second-row'>
                            <div>
                                <Text color='quadruple'>
                                    {CONNECTED_SUBACCOUNT_NUM}
                                </Text>
                                <Text color='quadruple'>
                                    {deposit.subAccountNum}
                                </Text>
                            </div>
                            <button>
                                <Icon icon='copy-icon' />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='deposit-info__info'>
                    <div>
                        <Text color='light' size='xs'>
                            {DEPOSIT_PLAN}
                        </Text>
                        <Text color='quadruple' weight='medium' size='m'>
                            {URGENT}
                        </Text>
                    </div>
                    <div>
                        <Text size='xs'>{DEPOSIT_TERM}</Text>
                        <Text color='quadruple' weight='medium' size='m'>
                            {deposit.term}
                        </Text>
                    </div>
                    <div>
                        <Text size='xs'>{INTEREST_RATE}</Text>
                        <Text color='quadruple' weight='medium' size='m'>
                            {deposit.interestRate}
                        </Text>
                    </div>
                    <div>
                        <Text color='light' size='xs'>
                            {UNTIMELY_WITHDRAWAL_INTEREST_RATE}
                        </Text>
                        <Text color='quadruple' weight='medium' size='m'>
                            {deposit.untimelyWithdrawalInterestRate}
                        </Text>
                    </div>
                    <div>
                        <Text color='light' size='xs'>
                            {IRREVOCABILITY}
                        </Text>
                        <Text color='quadruple' weight='medium' size='m'>
                            {deposit.irrevocability ? 'Да' : 'Нет'}
                        </Text>
                    </div>
                </div>
            </div>
            <div className='deposit-info__second-column'>
                <div className='deposit-info__balance-options'>
                    <div className='deposit-info__balance'>
                        <div className='deposit-info__cur-balance'>
                            <Text size='xs' weight='light' color='quadruple'>
                                {DEPOSIT_BALANCE}
                            </Text>
                            <Text size='l' weight='medium'>
                                {`${deposit.balance} ${deposit.currency.toUpperCase()}`}
                            </Text>
                        </div>
                        <div className='deposit-info__start-balance'>
                            <Text size='xs' weight='light' color='quadruple'>
                                {INITIAL_BALANCE}
                            </Text>
                            <Text size='l' weight='medium'>
                                {`${deposit.startBalance} ${deposit.currency.toUpperCase()}`}
                            </Text>
                        </div>
                    </div>
                    <div className='deposit-info__buttons'>
                        <Button type='button' variant='primary'>
                            {WITHDRAW}
                        </Button>
                        <Button type='button' variant='secondary'>
                            {FUND}
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    );
};

// <Button
//     width='max'
//     type='button'
//     variant='secondary'
//     onClick={() => {
//         setProlongation(!prolongation);
//     }}
// >
//     {prolongation
//         ? DISABLE_AUTOPROLONGATION
//         : ENABLE_AUTOPROLONGATION}
// </Button>
// <Button width='max' type='button' variant='secondary'>
//     {PROLONGATE}
// </Button>
