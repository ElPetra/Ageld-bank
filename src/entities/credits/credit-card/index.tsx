import { useTranslation } from 'react-i18next';

import { Text, Button, Card } from 'src/shared/ui';
import { formatDate, getMonthEn, getMonthRu } from 'src/shared/lib';

import type { ReactNode } from 'react';
import type { Credit } from 'src/shared/model';

import './styles.scss';

interface Props {
    credit: Credit;
    children?: ReactNode;
}

export const CreditCard = ({ credit, children }: Props) => {
    const { i18n, t } = useTranslation();

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
                            {t('A-Geld ') + credit.name}
                        </Text>
                        {children}
                    </div>
                </div>
            </div>
            <div className='deposit-info__second-row'>
                <div className='deposit-info__second-row__info'>
                    <div>
                        <Text color='tertiary' size='xs'>
                            {t('Срок действия')}
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
                                {t('Дата открытия')}
                            </Text>
                            <Text weight='medium' size='m'>
                                {formatDate(credit.paymentDate)}
                            </Text>
                        </div>
                    )}
                </div>
                <div className='deposit-info__second-row__second-column'>
                    <div className='deposit-info__second-row__second-column__balances'>
                        {/*<div>*/}
                        {/*    <Text size='xs' color='tertiary'>*/}
                        {/*        {t('Сумма на депозитном счете')}*/}
                        {/*    </Text>*/}
                        {/*    <Text size='l' weight='bold'>*/}
                        {/*        {`${credit.balance.toLocaleString()} ${credit.currency.toUpperCase()}`}*/}
                        {/*    </Text>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <Text size='xs' color='tertiary'>*/}
                        {/*        {t('Изначальная сумма депозита')}*/}
                        {/*    </Text>*/}
                        {/*    <Text size='l' weight='bold'>*/}
                        {/*        {`${credit.initialAmount.toLocaleString()} ${credit.currency.toUpperCase()}`}*/}
                        {/*    </Text>*/}
                        {/*</div>*/}
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
