import './styles.scss';
import { useState } from 'react';
import { Icon, Text, Button } from 'src/shared/ui';
import {
    DEPOSIT_BALANCE,
    INITIAL_BALANCE,
    DEPOSIT_PLAN,
    URGENT,
    DEPOSIT_TERM,
    INTEREST_RATE,
    UNTIMELY_WITHDRAWAL_INTEREST_RATE,
    IRREVOCABILITY,
    CONNECTED_SUBACCOUNT_NUM,
    ENABLE_AUTOPROLONGATION,
    DISABLE_AUTOPROLONGATION
} from 'src/shared/model';
import { depositBalanceConcat } from 'src/shared/model';

import { ProductStatuses } from 'src/entities/product';
import { AccountsMoreInfo } from 'src/pages/account/ui/account-info/more-info';

import { ACCOUNT_NUMBER } from 'src/pages/account/model';

import { mockDeposits } from 'src/shared/model';

export const DepositInfo = () => {
    const deposit = mockDeposits[0];
    const [prolongation, setProlongation] = useState(false);
    const depositBalance = depositBalanceConcat(deposit);
    const depositInitialBalance = depositBalanceConcat(
        deposit,
        deposit.startBalance
    );
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
                                    status={
                                        prolongation
                                            ? 'autoprolongation'
                                            : 'autoprolongationoff'
                                    }
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
                            <div className='deposit-info__name__second-row'>
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
            <div className='deposit-info__column'>
                <div className='deposit-info__dropdown'>
                    <AccountsMoreInfo status={'active'} />
                </div>
                <div className='deposit-info__balance-options'>
                    <div className='deposit-info__balance'>
                        <div className='deposit-info__cur-balance'>
                            <Text size='xs' weight='light' color='quadruple'>
                                {DEPOSIT_BALANCE}
                            </Text>
                            <Text size='l' weight='medium'>
                                {depositBalance}
                            </Text>
                        </div>
                        <div className='deposit-info__start-balance'>
                            <Text size='xs' weight='light' color='quadruple'>
                                {INITIAL_BALANCE}
                            </Text>
                            <Text size='l' weight='medium'>
                                {depositInitialBalance}
                            </Text>
                        </div>
                    </div>
                    <div className='deposit-info__buttons'>
                        <Button width='max' type='button' variant='primary'>
                            Отозвать
                        </Button>
                        <Button width='max' type='button' variant='secondary'>
                            Пополнить
                        </Button>
                        <Button
                            width='max'
                            type='button'
                            variant='secondary'
                            onClick={() => {
                                setProlongation(!prolongation);
                            }}
                        >
                            {prolongation
                                ? DISABLE_AUTOPROLONGATION
                                : ENABLE_AUTOPROLONGATION}
                        </Button>
                        <Button width='max' type='button' variant='secondary'>
                            Пролонгировать
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
