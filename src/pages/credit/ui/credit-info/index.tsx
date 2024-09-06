import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Icon, Text, Button, Card } from 'src/shared/ui';
import { creditStatuses, creditStatusesToText } from 'src/shared/model';
import { ProductStatuses } from 'src/entities/product';

import { formatDate, getMonthEn, getMonthRu } from 'src/shared/lib';

import { CreditMoreInfo } from './more-info';

import type { CreditDetails } from 'src/shared/model';

import './styles.scss';

interface Props {
    credit: CreditDetails;
}

export const CreditInfo = ({ credit }: Props) => {
    const { i18n, t } = useTranslation();
    const [open, setOpen] = useState<boolean>(false);

    const handleCopyCreditId = () => {
        navigator.clipboard.writeText(String(credit.contractNumber));
    };

    return (
        <Card
            direction='column'
            gap='large'
            padding='large'
            borderRadius='extra-large'
        >
            <div className='credit-info__first-row'>
                <div className='credit-info__first-row__main'>
                    <div className='credit-info__first-row__main__info'>
                        <Text size='l' weight='bold'>
                            {'A-Geld ' + credit.name}
                        </Text>
                        <ProductStatuses
                            isMaster={false}
                            status={creditStatuses[credit.status]}
                            text={creditStatusesToText[credit.status]}
                        />
                    </div>
                    <div>
                        <CreditMoreInfo />
                    </div>
                </div>
                <div className='credit-info__first-row__numbers'>
                    <div className='credit-info__first-row__number'>
                        <div>
                            <Text color='tertiary'>
                                {t('Номер договора : ')}
                            </Text>
                            <Text color='tertiary'>
                                {open
                                    ? credit.contractNumber
                                    : credit.contractNumber.replace(
                                          /.{16}/gm,
                                          '**** **** **** ****'
                                      )}
                            </Text>
                        </div>
                        <button type='button' onClick={() => setOpen(o => !o)}>
                            <Icon icon={open ? 'eye-open' : 'eye-close'} />
                        </button>
                        <button onClick={handleCopyCreditId}>
                            <Icon icon='copy' />
                        </button>
                    </div>
                </div>
            </div>
            <div className='credit-info__second-row'>
                <div className='credit-info__second-row__info'>
                    <div className='credit-info__second-row__info__card'>
                        {'paymentDate' in credit && credit.paymentDate && (
                            <div>
                                <Text color='tertiary' size='xs'>
                                    {t('Дата следующего платежа')}
                                </Text>
                                <Text weight='medium' size='m'>
                                    {formatDate(credit.paymentDate)}
                                </Text>
                            </div>
                        )}
                        {'payment' in credit && credit.payment && (
                            <div>
                                <Text color='tertiary' size='xs'>
                                    {t('Размер платежа')}
                                </Text>
                                <Text weight='medium' size='m'>
                                    {`${credit.payment.toLocaleString()} ${credit.currency.toUpperCase()}`}
                                </Text>
                            </div>
                        )}
                    </div>
                    <div className='credit-info__second-row__info__second'>
                        <div>
                            <Text color='tertiary' size='xs'>
                                {t('Сумма кредита')}
                            </Text>
                            <Text weight='medium' size='m'>
                                {credit.amount.toLocaleString()}
                            </Text>
                        </div>
                        <div>
                            <Text color='tertiary' size='xs'>
                                {t('Процентная ставка')}
                            </Text>
                            <Text weight='medium' size='m'>
                                {credit.percentRate + '%'}
                            </Text>
                        </div>
                        <div>
                            <Text color='tertiary' size='xs'>
                                {t('Срок кредита')}
                            </Text>
                            <Text weight='medium' size='m'>
                                {credit.term +
                                    ' ' +
                                    (i18n.language === 'ru'
                                        ? getMonthRu(credit.term)
                                        : getMonthEn(credit.term))}
                            </Text>
                        </div>
                    </div>
                </div>
                <div className='credit-info__second-row__second-column'>
                    <div className='credit-info__second-row__second-column__balances'>
                        {'remainPay' in credit && credit.remainPay && (
                            <div>
                                <Text size='xs' color='tertiary'>
                                    {t('Осталось выплатить')}
                                </Text>
                                <Text size='l' weight='bold'>
                                    {`${credit.remainPay.toLocaleString()} ${credit.currency.toUpperCase()}`}
                                </Text>
                            </div>
                        )}
                        {'debt' in credit && credit.debt && (
                            <div>
                                <Text size='xs' color='tertiary'>
                                    {t('Сумма задолжности')}
                                </Text>
                                <Text size='l' weight='bold'>
                                    {`${credit.debt.toLocaleString()} ${credit.currency.toUpperCase()}`}
                                </Text>
                            </div>
                        )}
                    </div>
                    {credit.status !== 'closed' && (
                        <div className='credit-info__second-row__second-column__buttons'>
                            <Button width='max' disabled={!credit.debt}>
                                {t('Погасить')}
                            </Button>
                            <Button variant='secondary' width='max'>
                                {t('Оплатить')}
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </Card>
    );
};
