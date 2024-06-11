import { useTranslation } from 'react-i18next';

import { Icon, Text, Button, Card } from 'src/shared/ui';
import { ProductStatuses } from 'src/entities/product';

import { DepositsMoreInfo } from './more-info';

import type { MockDeposit } from 'src/shared/model';

import './styles.scss';

interface Props {
    deposit: MockDeposit;
}

export const DepositInfo = ({ deposit }: Props) => {
    const { t } = useTranslation();

    const handleCopyDepositId = () => {
        navigator.clipboard.writeText(String(deposit.id));
    };

    const handleCopyDepositAccount = () => {
        navigator.clipboard.writeText(String(deposit.subAccountNum));
    };

    return (
        <Card
            direction='column'
            gap='large'
            padding='large'
            borderRadius='extra-large'
        >
            <div className='deposit-info__first-row'>
                <div className='deposit-info__first-row__main'>
                    <div className='deposit-info__first-row__main__info'>
                        <Text size='l' weight='bold'>
                            {deposit.name}
                        </Text>
                        <ProductStatuses isMaster={false} status={'active'} />
                        <ProductStatuses
                            isMaster={false}
                            status='autoprolongation'
                        />
                    </div>
                    <div>
                        <DepositsMoreInfo />
                    </div>
                </div>
                <div className='deposit-info__first-row__numbers'>
                    <div className='deposit-info__first-row__number'>
                        <div>
                            <Text color='tertiary'>{t('№ счета : ')}</Text>
                            <Text color='tertiary'>{deposit.id}</Text>
                        </div>
                        <button onClick={handleCopyDepositId}>
                            <Icon icon='copy' />
                        </button>
                    </div>
                    <div className='deposit-info__first-row__number'>
                        <div>
                            <Text color='tertiary'>
                                {t('№ счета с процентами : ')}
                            </Text>
                            <Text color='tertiary'>
                                {deposit.subAccountNum}
                            </Text>
                        </div>
                        <button onClick={handleCopyDepositAccount}>
                            <Icon icon='copy' />
                        </button>
                    </div>
                </div>
            </div>
            <div className='deposit-info__second-row'>
                <div className='deposit-info__second-row__info'>
                    <div>
                        <Text color='tertiary' size='xs'>
                            {t('Схема депозита')}
                        </Text>
                        <Text weight='medium' size='m'>
                            {t('Срочный')}
                        </Text>
                    </div>
                    <div>
                        <Text color='tertiary' size='xs'>
                            {t('Длительность существования')}
                        </Text>
                        <Text weight='medium' size='m'>
                            {deposit.term}
                        </Text>
                    </div>
                    <div>
                        <Text color='tertiary' size='xs'>
                            {t('Процентная ставка')}
                        </Text>
                        <Text weight='medium' size='m'>
                            {deposit.interestRate}
                        </Text>
                    </div>
                    <div>
                        <Text color='tertiary' size='xs'>
                            {t('Cтавка при досрочном отзыве')}
                        </Text>
                        <Text weight='medium' size='m'>
                            {deposit.untimelyWithdrawalInterestRate}
                        </Text>
                    </div>
                    <div>
                        <Text color='tertiary' size='xs'>
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
                            <Text size='xs' color='tertiary'>
                                {t('Сумма на депозитном счете')}
                            </Text>
                            <Text size='l' weight='bold'>
                                {`${deposit.balance} ${deposit.currency.toUpperCase()}`}
                            </Text>
                        </div>
                        <div>
                            <Text size='xs' color='tertiary'>
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
