import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { CREATE, RouteName } from 'src/shared/model';
import { getMonthEn, getGenitiveMonthRu } from 'src/shared/lib';
import { Icon, Text, Button, Card } from 'src/shared/ui';

import type { CreditProduct } from 'src/shared/model';

import './styles.scss';

interface Props {
    credit: CreditProduct;
}

export const CreditProductCard = ({ credit }: Props) => {
    const { t, i18n } = useTranslation();

    return (
        <Card gap='medium' padding='medium' direction='column'>
            <div className='credit-card__info'>
                <div className='credit-card__info__main'>
                    <div className='credit-card__info__main__text'>
                        <Text size='m' weight='medium'>
                            {credit.name}
                        </Text>
                        <Text size='xs' color='tertiary'>
                            {t('До 30 сентября оформите Депозит A-Geld') +
                                ' ' +
                                credit.name}
                        </Text>
                    </div>
                    <div className='credit-card__info__main__icon'>
                        <Icon width={64} icon={credit.currency} />
                    </div>
                </div>
                <div className='credit-card__info__details'>
                    <div>
                        <Text weight='medium' size='m'>
                            {credit.percentRate + '%'}
                        </Text>
                        <Text color='tertiary' size='xs'>
                            {t('Процентная ставка')}
                        </Text>
                    </div>
                    <div>
                        <div>
                            <Text weight='medium' size='s'>
                                {t('до')}
                            </Text>
                            <Text weight='medium' size='m'>
                                {credit.amountMax.toLocaleString() +
                                    ' ' +
                                    credit.currency.toUpperCase()}
                            </Text>
                        </div>
                        <Text color='tertiary' size='xs'>
                            {t('Минимальная сумма депозита')}
                        </Text>
                    </div>
                    <div>
                        <div>
                            <Text weight='medium' size='s'>
                                {t('до')}
                            </Text>
                            <Text weight='medium' size='m'>
                                {Math.ceil(credit.dayMax / 30) +
                                    ' ' +
                                    (i18n.language === 'ru'
                                        ? getGenitiveMonthRu(
                                              Math.ceil(credit.dayMax / 30)
                                          )
                                        : getMonthEn(
                                              Math.ceil(credit.dayMax / 30)
                                          ))}
                            </Text>
                        </div>
                        <Text color='tertiary' size='xs'>
                            {t('Срок депозита')}
                        </Text>
                    </div>
                </div>
            </div>
            <div className='credit-card__buttons'>
                <div>
                    <Link to={RouteName.CREDIT_PRODUCT_PAGE + '/' + credit.id}>
                        <Button width='max'>{t('Показать больше')}</Button>
                    </Link>
                </div>
                <div>
                    <Link
                        to={
                            RouteName.CREDIT_PRODUCT_PAGE +
                            '/' +
                            credit.id +
                            '/' +
                            CREATE
                        }
                    >
                        <Button width='max' variant='secondary'>
                            {t('Оформить')}
                        </Button>
                    </Link>
                </div>
            </div>
        </Card>
    );
};
