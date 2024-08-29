import { useTranslation } from 'react-i18next';

import { CREATE, CALCULATE, RouteName } from 'src/shared/model';
import { getMonthEn, getGenitiveMonthRu } from 'src/shared/lib';
import { Icon, Text, Button, Card, Link } from 'src/shared/ui';

import type { CreditProductDetails } from 'src/shared/model';

import './styles.scss';

interface Props {
    credit: CreditProductDetails;
}

export const CreditProductDetailsCard = ({ credit }: Props) => {
    const { t, i18n } = useTranslation();
    return (
        <Card gap='large' padding='large'>
            <div className='credit-product-details-card__image'>
                <Icon width={320} icon='deposit-details' />
            </div>
            <div className='credit-product-details-card'>
                <div className='credit-product-details-card__info'>
                    <div className='credit-product-details-card__info__main'>
                        <Text size='l' weight='bold'>
                            {t('Не откладывай жизнь на завтра!')}
                        </Text>
                        <Text size='s' weight='medium'>
                            {credit.name +
                                t(' откроет новые горизонты для вас')}
                        </Text>
                    </div>
                    <div className='credit-product-details-card__info__details'>
                        <div>
                            <Text weight='medium' size='m'>
                                {credit.percentRate + ' %'}
                            </Text>
                            <Text color='tertiary' size='xs'>
                                {t('Процентная ставка')}
                            </Text>
                        </div>
                        <div>
                            <div>
                                <Text weight='medium' size='s'>
                                    {t('от')}
                                </Text>
                                <Text weight='medium' size='m'>
                                    {credit.amountMin.toLocaleString() +
                                        ' ' +
                                        credit.currency.toUpperCase()}
                                </Text>
                            </div>
                            <Text color='tertiary' size='xs'>
                                {t('Минимальная сумма кредита')}
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
                                {t('Максимальная сумма кредита')}
                            </Text>
                        </div>
                        <div>
                            <div>
                                <Text weight='medium' size='s'>
                                    {t('до')}
                                </Text>
                                <Text weight='medium' size='m'>
                                    {Math.floor(credit.dayMax / 30) +
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
                                {t('Срок кредита')}
                            </Text>
                        </div>
                    </div>
                </div>
                <div className='credit-product-details-card__buttons'>
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
                            <Button variant='secondary' width='max'>
                                {t('Оформить')}
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <Link
                            to={
                                RouteName.CREDIT_PRODUCT_PAGE +
                                '/' +
                                credit.id +
                                '/' +
                                CALCULATE
                            }
                        >
                            <Button width='max'>{t('Рассчитать')}</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Card>
    );
};
