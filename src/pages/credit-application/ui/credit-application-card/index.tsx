import { useTranslation } from 'react-i18next';

import { Icon, Text, Button, Card } from 'src/shared/ui';
import {
    creditApplicationStatuses,
    creditApplicationStatusesToText,
    creditMethodObtainingToText,
    creditRateTypeToText
} from 'src/shared/model';
import { ProductStatuses } from 'src/entities/product';

import { formatDate, getMonthEn, getMonthRu } from 'src/shared/lib';

import type { CreditApplicationDetails } from 'src/shared/model';

import './styles.scss';

interface Props {
    credit: CreditApplicationDetails;
}

export const CreditApplicationCard = ({ credit }: Props) => {
    const { i18n, t } = useTranslation();

    const handleCopyCreditNumber = () => {
        navigator.clipboard.writeText(String(credit.number));
    };

    return (
        <Card
            direction='column'
            gap='large'
            padding='large'
            borderRadius='extra-large'
        >
            <div className='credit-application-card__first-row'>
                <div className='credit-application-card__first-row__main'>
                    <Text size='m' weight='medium'>
                        {t('Кредит A-Geld ', {
                            name: credit.name
                        })}
                    </Text>
                    <ProductStatuses
                        isMaster={false}
                        status={creditApplicationStatuses[credit.status]}
                        text={creditApplicationStatusesToText[credit.status]}
                    />
                </div>
                <div className='credit-application-card__first-row__numbers'>
                    <div className='credit-application-card__first-row__number'>
                        <div>
                            <Text color='tertiary'>{t('№ заявки: ')}</Text>
                            <Text color='tertiary'>{credit.number}</Text>
                        </div>
                        <button onClick={handleCopyCreditNumber}>
                            <Icon icon='copy' />
                        </button>
                    </div>
                </div>
            </div>
            <div className='credit-application-card__second-row'>
                <div className='credit-application-card__second-row__info'>
                    <div>
                        <Text color='tertiary' size='xs'>
                            {t('Дата следующего платежа')}
                        </Text>
                        <Text weight='medium' size='m'>
                            {formatDate(credit.applicationDate)}
                        </Text>
                    </div>
                    <div>
                        <Text color='tertiary' size='xs'>
                            {t('Запрашиваемый срок кредита')}
                        </Text>
                        <Text weight='medium' size='m'>
                            {credit.term +
                                ' ' +
                                (i18n.language === 'ru'
                                    ? getMonthRu(credit.term)
                                    : getMonthEn(credit.term))}
                        </Text>
                    </div>
                    <div>
                        <Text color='tertiary' size='xs'>
                            {t('Тип ставки')}
                        </Text>
                        <Text weight='medium' size='m'>
                            {creditRateTypeToText[credit.rateType]}
                        </Text>
                    </div>
                    <div>
                        <Text color='tertiary' size='xs'>
                            {t('Срок рассмотрения ')}
                        </Text>
                        <Text weight='medium' size='m'>
                            {t('До дней', { number: credit.reviewPeriod })}
                        </Text>
                    </div>
                    <div>
                        <Text color='tertiary' size='xs'>
                            {t('Способ получения')}
                        </Text>
                        <Text weight='medium' size='m'>
                            {
                                creditMethodObtainingToText[
                                    credit.methodObtaining
                                ]
                            }
                        </Text>
                    </div>
                    <div>
                        <Text color='tertiary' size='xs'>
                            {t('Возможность досрочного погашения')}
                        </Text>
                        <Text weight='medium' size='m'>
                            {credit.isEarlyRepayment ? t('Да') : t('Нет')}
                        </Text>
                    </div>
                </div>
                <div className='credit-application-card__second-row__second-column'>
                    <div className='credit-application-card__second-row__second-column__balances'>
                        <div>
                            <Text size='xs' color='tertiary'>
                                {t('Процентная ставка')}
                            </Text>
                            <Text size='l' weight='bold'>
                                {credit.percentRate + ' %'}
                            </Text>
                        </div>
                        <div>
                            <Text size='xs' color='tertiary'>
                                {t('Запрашиваемая сумма кредита')}
                            </Text>
                            <Text size='l' weight='bold'>
                                {`${credit.amount.toLocaleString()} ${credit.currency.toUpperCase()}`}
                            </Text>
                        </div>
                    </div>
                    <div className='credit-application-card__second-row__second-column__buttons'>
                        {credit.status === 'approved' && (
                            <div>
                                <Button width='max'>{t('Подтвердить')}</Button>
                            </div>
                        )}
                        {credit.status !== 'cancelled' &&
                            credit.status !== 'denied' && (
                                <div>
                                    <Button variant='secondary' width='max'>
                                        {t('Отменить')}
                                    </Button>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </Card>
    );
};
