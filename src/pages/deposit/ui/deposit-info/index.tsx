import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Icon, Text, Button, Card } from 'src/shared/ui';
import { mockDeposits } from 'src/shared/model';
import { ProductStatuses } from 'src/entities/product';

import { DepositsMoreInfo } from './more-info';

import './styles.scss';

export const DepositInfo = () => {
    const deposit = mockDeposits[0];
    const [prolongation, setProlongation] = useState(false);
    const { t } = useTranslation();

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
                            <Text color='quadruple'>{t('№ счета: ')}</Text>
                            <Text color='quadruple'>{deposit.id}</Text>
                        </div>
                        <button onClick={handleCopyDepositId}>
                            <Icon icon='copy-icon' />
                        </button>
                    </div>
                    <div className='deposit-info__first-row__number'>
                        <div>
                            <Text color='quadruple'>
                                {t('№ счета с процентами')}
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
                            {t('Схема депозита')}
                        </Text>
                        <Text weight='medium' size='m'>
                            {t('Срочный')}
                        </Text>
                    </div>
                    <div>
                        <Text color='quadruple' size='xs'>
                            {t('Длительность существования')}
                        </Text>
                        <Text weight='medium' size='m'>
                            {deposit.term}
                        </Text>
                    </div>
                    <div>
                        <Text color='quadruple' size='xs'>
                            {t('Процентная ставка')}
                        </Text>
                        <Text weight='medium' size='m'>
                            {deposit.interestRate}
                        </Text>
                    </div>
                    <div>
                        <Text color='quadruple' size='xs'>
                            {t('Cтавка при досрочном отзыве')}
                        </Text>
                        <Text weight='medium' size='m'>
                            {deposit.untimelyWithdrawalInterestRate}
                        </Text>
                    </div>
                    <div>
                        <Text color='quadruple' size='xs'>
                            {t('Отзывной')}
                        </Text>
                        <Text weight='medium' size='m'>
                            {deposit.irrevocability ? t('Да') : t('Нет')}
                        </Text>
                    </div>
                </div>
                <div className='deposit-info__second-row__second-column'>
                    <div className='deposit-info__second-row__second-column__balances'>
                        <div>
                            <Text size='xs' color='quadruple'>
                                {t('Сумма на депозитном счете')}
                            </Text>
                            <Text size='l' weight='bold'>
                                {`${deposit.balance} ${deposit.currency.toUpperCase()}`}
                            </Text>
                        </div>
                        <div>
                            <Text size='xs' color='quadruple'>
                                {t('Изначальная сумма депозита')}
                            </Text>
                            <Text size='l' weight='bold'>
                                {`${deposit.startBalance} ${deposit.currency.toUpperCase()}`}
                            </Text>
                        </div>
                    </div>
                    <div className='deposit-info__second-row__second-column__buttons'>
                        <Button type='button' variant='primary'>
                            {t('Отозвать')}
                        </Button>
                        <Button type='button' variant='secondary'>
                            {t('Пополнить')}
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    );
};
