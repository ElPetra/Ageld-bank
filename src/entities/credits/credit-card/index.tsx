import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Text, Button, Card, Icon } from 'src/shared/ui';
import { formatDate, getMonthEn, getMonthRu } from 'src/shared/lib';

import { type Credit, RouteName } from 'src/shared/model';

import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    credit: Credit;
    children?: ReactNode;
}

export const CreditCard = ({ credit, children }: Props) => {
    const { i18n, t } = useTranslation();

    return (
        <Card
            gap='large'
            padding='large'
            borderRadius='extra-large'
            justify='space-between'
        >
            <div className='credit-card__first-column'>
                <div className='credit-card__first-column__main'>
                    <Icon widthAndHeight={64} icon={credit.currency} />
                    <Text size='l' weight='bold'>
                        {t('A-Geld ') + credit.name}
                    </Text>
                    {children}
                </div>
                <div className='credit-card__first-column__info'>
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
                    <div>
                        <Text color='tertiary' size='xs'>
                            {t('Процентная ставка')}
                        </Text>
                        <Text weight='medium' size='m'>
                            {credit.percentRate + '%'}
                        </Text>
                    </div>
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
                    {'repaymentDate' in credit && credit.repaymentDate && (
                        <div>
                            <Text color='tertiary' size='xs'>
                                {t('Дата погашения кредита')}
                            </Text>
                            <Text weight='medium' size='m'>
                                {formatDate(credit.repaymentDate)}
                            </Text>
                        </div>
                    )}
                </div>
            </div>
            <div className='credit-card__second-column'>
                <div className='credit-card__second-column__first-row'>
                    {'payment' in credit && credit.payment && (
                        <div>
                            <Text size='xs' color='tertiary'>
                                {t('Размер платежа')}
                            </Text>
                            <Text size='l' weight='bold'>
                                {`${credit.payment.toLocaleString()} ${credit.currency.toUpperCase()}`}
                            </Text>
                        </div>
                    )}
                    {'debt' in credit && credit.debt && (
                        <div>
                            <Text size='xs' color='tertiary'>
                                {t('Сумма задолжности')}
                            </Text>
                            <Text size='l' weight='bold' color='action'>
                                {`${credit.debt.toLocaleString()} ${credit.currency.toUpperCase()}`}
                            </Text>
                        </div>
                    )}
                </div>
                <div className='credit-card__second-column__buttons'>
                    <Link to={RouteName.CREDIT_PAGE + '/' + credit.id}>
                        <Button type='button' variant='primary'>
                            {t('Подробнее')}
                        </Button>
                    </Link>
                    {credit.status !== 'closed' && (
                        <Button type='button' variant='secondary'>
                            {t('Оплатить')}
                        </Button>
                    )}
                </div>
            </div>
        </Card>
    );
};
