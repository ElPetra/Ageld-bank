import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

import { Icon, Text, Button, Card, Switcher } from 'src/shared/ui';
import { depositWithdrawal } from 'src/shared/model';
import { ProductStatuses } from 'src/entities/product';

import { DepositsMoreInfo } from './more-info';

import type { FieldValues } from 'react-hook-form';
import type { CustomerDepositDetails } from 'src/shared/model';

import './styles.scss';

interface Props {
    deposit: CustomerDepositDetails;
}

export const DepositInfo = ({ deposit }: Props) => {
    const { t } = useTranslation();
    const { register } = useForm<FieldValues>({
        defaultValues: {
            autorenStatus: deposit.autorenStatus
        },
        mode: 'onTouched',
        reValidateMode: 'onChange'
    });

    const handleCopyDepositId = () => {
        navigator.clipboard.writeText(String(deposit.mainNum));
    };

    const handleCopyDepositAccount = () => {
        navigator.clipboard.writeText(String(deposit.mAccountId));
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
                        <ProductStatuses
                            isMaster={false}
                            status={deposit.productStatus ? 'active' : 'closed'}
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
                            <Text color='tertiary'>{deposit.mainNum}</Text>
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
                            <Text color='tertiary'>{deposit.mAccountId}</Text>
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
                            {t('Тип продукта по сроку')}
                        </Text>
                        <Text weight='medium' size='m'>
                            {deposit.timeLimited
                                ? t('Срочный')
                                : t('Бессрочный')}
                        </Text>
                    </div>
                    <div>
                        <Text color='tertiary' size='xs'>
                            {t('Отзывной')}
                        </Text>
                        <Text weight='medium' size='m'>
                            {deposit.revocable ? t('Да') : t('Нет')}
                        </Text>
                    </div>
                    <div>
                        <Text color='tertiary' size='xs'>
                            {t('Процентная ставка')}
                        </Text>
                        <Text weight='medium' size='m'>
                            {deposit.percentRate + '%'}
                        </Text>
                    </div>
                    <div>
                        <Text color='tertiary' size='xs'>
                            {t('Вид капитализации процентов')}
                        </Text>
                        <Text weight='medium' size='m'>
                            {depositWithdrawal[deposit.withdrawal]}
                        </Text>
                    </div>
                    <div>
                        <Text color='tertiary' size='xs'>
                            {t('Дата открытия')}
                        </Text>
                        <Text weight='medium' size='m'>
                            {deposit.startDate}
                        </Text>
                    </div>
                    <div>
                        <Text color='tertiary' size='xs'>
                            {t('Автоматическая пролонгации')}
                        </Text>
                        <Switcher register={register} field='autorenStatus' />
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
                                {`${deposit.initialAmount} ${deposit.currency.toUpperCase()}`}
                            </Text>
                        </div>
                    </div>
                    <div className='deposit-info__second-row__second-column__buttons'>
                        <Button
                            type='button'
                            variant='primary'
                            disabled={!deposit.revocable}
                        >
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
