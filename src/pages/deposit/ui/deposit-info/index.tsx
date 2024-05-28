import { useState } from 'react';

import { Icon, Text, Button, Card } from 'src/shared/ui';
import {
    DEPOSIT_BALANCE,
    INITIAL_BALANCE,
    DEPOSIT_PLAN,
    FUND,
    YES,
    NO,
    WITHDRAW,
    URGENT,
    DEPOSIT_TERM,
    INTEREST_RATE,
    UNTIMELY_WITHDRAWAL_INTEREST_RATE,
    IRREVOCABILITY,
    CONNECTED_SUBACCOUNT_NUM
} from 'src/shared/model';

import { ProductStatuses } from 'src/entities/product';

import { ACCOUNT_NUMBER } from 'src/pages/account/model';

import { mockDeposits } from 'src/shared/model';

import './styles.scss';
import { DepositsMoreInfo } from 'src/pages/deposit/ui/deposit-info/more-info';

export const DepositInfo = () => {
    const deposit = mockDeposits[0];
    const [prolongation, setProlongation] = useState(false);
    const handleCopyDepositId = () => {
        navigator.clipboard.writeText(String(deposit.id));
    };

    const handleCopyDepositAccount = () => {
        navigator.clipboard.writeText(String(deposit.subAccountNum));
    };

    return (
        <Card
            color='quadruple'
            direction='column'
            gap='large'
            padding='large'
            borderRadius='extra-large'
        >
            <div className='deposit-info__first-row'>
                <div className='deposit-info__first-row__main'>
                    <div className='deposit-info__first-row__main__info'>
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
                        <DepositsMoreInfo status='active' />
                    </div>
                </div>
                <div className='deposit-info__first-row__numbers'>
                    <div className='deposit-info__first-row__number'>
                        <div>
                            <Text color='quadruple'>{ACCOUNT_NUMBER}</Text>
                            <Text color='quadruple'>{deposit.id}</Text>
                        </div>
                        <button onClick={handleCopyDepositId}>
                            <Icon icon='copy-icon' />
                        </button>
                    </div>
                    <div className='deposit-info__first-row__number'>
                        <div>
                            <Text color='quadruple'>
                                {CONNECTED_SUBACCOUNT_NUM}
                            </Text>
                            <Text color='quadruple'>
                                {deposit.subAccountNum}
                            </Text>
                        </div>
                        <button onClick={handleCopyDepositAccount}>
                            <Icon icon='copy-icon' />
                        </button>
                    </div>
                </div>
            </div>
            <div className='deposit-info__second-row'>
                <div className='deposit-info__second-row__info'>
                    <div>
                        <Text color='quadruple' size='xs'>
                            {DEPOSIT_PLAN}
                        </Text>
                        <Text weight='medium' size='m'>
                            {URGENT}
                        </Text>
                    </div>
                    <div>
                        <Text color='quadruple' size='xs'>
                            {DEPOSIT_TERM}
                        </Text>
                        <Text weight='medium' size='m'>
                            {deposit.term}
                        </Text>
                    </div>
                    <div>
                        <Text color='quadruple' size='xs'>
                            {INTEREST_RATE}
                        </Text>
                        <Text weight='medium' size='m'>
                            {deposit.interestRate}
                        </Text>
                    </div>
                    <div>
                        <Text color='quadruple' size='xs'>
                            {UNTIMELY_WITHDRAWAL_INTEREST_RATE}
                        </Text>
                        <Text weight='medium' size='m'>
                            {deposit.untimelyWithdrawalInterestRate}
                        </Text>
                    </div>
                    <div>
                        <Text color='quadruple' size='xs'>
                            {IRREVOCABILITY}
                        </Text>
                        <Text weight='medium' size='m'>
                            {deposit.irrevocability ? YES : NO}
                        </Text>
                    </div>
                </div>
                <div className='deposit-info__second-row__second-column'>
                    <div className='deposit-info__second-row__second-column__balances'>
                        <div>
                            <Text size='xs' color='quadruple'>
                                {DEPOSIT_BALANCE}
                            </Text>
                            <Text size='l' weight='bold'>
                                {`${deposit.balance} ${deposit.currency.toUpperCase()}`}
                            </Text>
                        </div>
                        <div>
                            <Text size='xs' color='quadruple'>
                                {INITIAL_BALANCE}
                            </Text>
                            <Text size='l' weight='bold'>
                                {`${deposit.startBalance} ${deposit.currency.toUpperCase()}`}
                            </Text>
                        </div>
                    </div>
                    <div className='deposit-info__second-row__second-column__buttons'>
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
