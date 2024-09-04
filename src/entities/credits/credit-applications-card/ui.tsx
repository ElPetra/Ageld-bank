import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Icon, Text, Button, Card } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';
import { formatDate } from 'src/shared/lib';

import type { ReactNode } from 'react';
import type { CreditApplication } from 'src/shared/model';

import './styles.scss';

interface Props {
    credit: CreditApplication;
    children: ReactNode;
}

export const CreditApplicationsCard = ({ credit, children }: Props) => {
    const { t } = useTranslation();

    return (
        <Card padding='medium'>
            <div className='credit-applications-card__container'>
                <div className='credit-applications-card__main'>
                    <div className='credit-applications-card__main__icon'>
                        <Icon icon={credit.currency} />
                    </div>
                    <Link
                        to={RouteName.CREDIT_APPLICATION_PAGE + '/' + credit.id}
                    >
                        <Text weight='bold' size='m'>
                            {'A-Geld ' + credit.name}
                        </Text>
                    </Link>
                    {children}
                </div>
                <div className='credit-applications-card__second'>
                    <div className='credit-applications-card__second__info'>
                        <div>
                            <Text weight='bold' size='l'>
                                {credit.amount.toLocaleString() +
                                    ' ' +
                                    credit.currency.toUpperCase()}
                            </Text>
                            <Text color='tertiary' size='xs'>
                                {t('Сумма кредита')}
                            </Text>
                        </div>
                        <div>
                            <Text weight='bold' size='l'>
                                {formatDate(credit.applicationDate)}
                            </Text>
                            <Text color='tertiary' size='xs'>
                                {t('Дата создания заявки')}
                            </Text>
                        </div>
                    </div>
                    <div>
                        <Link
                            to={
                                RouteName.CREDIT_APPLICATION_PAGE +
                                '/' +
                                credit.id
                            }
                        >
                            <Button>{t('Показать больше')}</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Card>
    );
};
