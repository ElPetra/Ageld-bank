import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

import { Icon, Text, Button, Card, Switcher, Overlay } from 'src/shared/ui';
import { depositWithdrawal, productStatusesToText } from 'src/shared/model';
import { ProductStatuses } from 'src/entities/product';
import { useAuth } from 'src/entities/user';
import { MessageCard } from 'src/entities/message';

import { formatDate, getMonthEn, getMonthRu, getTerm } from 'src/shared/lib';

import { DepositsMoreInfo } from './more-info';

import type { FieldValues } from 'react-hook-form';
import type { DepositDetails } from 'src/shared/model';

import './styles.scss';

interface Props {
    deposit: DepositDetails;
}

export const DepositInfo = ({ deposit }: Props) => {
    const { i18n, t } = useTranslation();
    const { id } = useParams();
    const { autoRenewedDeposit, error } = useAuth();
    const [visible, setVisible] = useState<boolean>(false);
    const { register, reset, watch } = useForm<FieldValues>({
        defaultValues: {
            isAutoProlongation: deposit.isAutoProlongation
        },
        mode: 'onTouched',
        reValidateMode: 'onChange'
    });

    const handleCopyDepositId = () => {
        navigator.clipboard.writeText(String(deposit.mainAccount));
    };

    const handleCopyDepositAccount = () => {
        navigator.clipboard.writeText(String(deposit.percentAccount));
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
                            {t('Депозит A-Geld ') + deposit.name}
                        </Text>
                        <ProductStatuses
                            isMaster={false}
                            status={deposit.status ? 'success' : 'closed'}
                            text={
                                productStatusesToText[
                                    deposit.status ? 'active' : 'closed'
                                ]
                            }
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
                            <Text color='tertiary'>{deposit.mainAccount}</Text>
                        </div>
                        <button onClick={handleCopyDepositId}>
                            <Icon icon='copy' />
                        </button>
                    </div>
                    {deposit.percentAccount && (
                        <div className='deposit-info__first-row__number'>
                            <div>
                                <Text color='tertiary'>
                                    {t('№ счета с процентами : ')}
                                </Text>
                                <Text color='tertiary'>
                                    {deposit.percentAccount}
                                </Text>
                            </div>
                            <button onClick={handleCopyDepositAccount}>
                                <Icon icon='copy' />
                            </button>
                        </div>
                    )}
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
                            {t('Срок действия')}
                        </Text>
                        <Text weight='medium' size='m'>
                            {getTerm(deposit.startDate, deposit.endDate) +
                                ' ' +
                                (i18n.language === 'ru'
                                    ? getMonthRu(
                                          getTerm(
                                              deposit.startDate,
                                              deposit.endDate
                                          )
                                      )
                                    : getMonthEn(
                                          getTerm(
                                              deposit.startDate,
                                              deposit.endDate
                                          )
                                      ))}
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
                            {t(depositWithdrawal[deposit.withdrawal])}
                        </Text>
                    </div>
                    <div>
                        <Text color='tertiary' size='xs'>
                            {t('Дата открытия')}
                        </Text>
                        <Text weight='medium' size='m'>
                            {formatDate(deposit.startDate)}
                        </Text>
                    </div>
                    <div>
                        <Text color='tertiary' size='xs'>
                            {t('Автоматическая пролонгации')}
                        </Text>
                        <Switcher
                            register={register}
                            field='isAutoProlongation'
                            onChange={() => setVisible(true)}
                            disabled={!deposit.withAutoProlongation}
                        />
                    </div>
                </div>
                <div className='deposit-info__second-row__second-column'>
                    <div className='deposit-info__second-row__second-column__balances'>
                        <div>
                            <Text size='xs' color='tertiary'>
                                {t('Сумма на депозитном счете')}
                            </Text>
                            <Text size='l' weight='bold'>
                                {`${deposit.balance.toLocaleString()} ${deposit.currency.toUpperCase()}`}
                            </Text>
                        </div>
                        <div>
                            <Text size='xs' color='tertiary'>
                                {t('Изначальная сумма депозита')}
                            </Text>
                            <Text size='l' weight='bold'>
                                {`${deposit.initialAmount.toLocaleString()} ${deposit.currency.toUpperCase()}`}
                            </Text>
                        </div>
                    </div>
                    <div className='deposit-info__second-row__second-column__buttons'>
                        <Button width='max' disabled={!deposit.revocable}>
                            {t('Отозвать')}
                        </Button>
                        <Button variant='secondary' width='max'>
                            {t('Пополнить')}
                        </Button>
                    </div>
                </div>
            </div>
            <Overlay visible={visible}>
                <MessageCard
                    title={
                        watch('isAutoProlongation')
                            ? t(
                                  'Вы действительно хотите включить автоматическую пролонгацию депозита?'
                              )
                            : t(
                                  'Вы действительно хотите отключить автоматическую пролонгацию депозита?'
                              )
                    }
                    icon={'confirmation-lady'}
                    width={256}
                    buttonText={t('Отмена')}
                    onClick={() => {
                        reset();
                        setVisible(false);
                    }}
                    secondButtonText={t('Да')}
                    secondOnClick={async () => {
                        await autoRenewedDeposit(
                            id || '',
                            watch('isAutoProlongation')
                        );
                        if (error) {
                            reset();
                        }
                        setVisible(false);
                    }}
                />
            </Overlay>
        </Card>
    );
};
