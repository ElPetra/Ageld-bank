import { useTranslation } from 'react-i18next';

import { CREATE, RouteName } from 'src/shared/model';
import { getMonthEn, getGenitiveMonthRu } from 'src/shared/lib';
import { Icon, Text, Button, Card, Link } from 'src/shared/ui';

import type { DepositProductDetails } from 'src/shared/model';

import './styles.scss';

interface Props {
    deposit: DepositProductDetails;
}

export const DepositProductDetailsCard = ({ deposit }: Props) => {
    const { t, i18n } = useTranslation();
    return (
        <Card gap='large' padding='large'>
            <div className='deposit-product-details-card__image'>
                <Icon width={320} icon='deposit-details' />
            </div>
            <div className='deposit-product-details-card'>
                <div className='deposit-product-details-card__info'>
                    <div className='deposit-product-details-card__info__main'>
                        <Text size='l' weight='bold'>
                            {t('Не откладывай жизнь на завтра!')}
                        </Text>
                        <Text size='s' weight='medium'>
                            {t('откроет новые горизонты для вас ', {
                                name: deposit.name
                            })}
                        </Text>
                    </div>
                    <div className='deposit-product-details-card__info__details'>
                        <div>
                            <div>
                                <Text weight='medium' size='s'>
                                    {t('до')}
                                </Text>
                                <Text weight='medium' size='m'>
                                    {deposit.percentRate + ' %'}
                                </Text>
                            </div>
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
                                    {deposit.amountMin.toLocaleString() +
                                        ' ' +
                                        deposit.currency.toUpperCase()}
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
                                    {deposit.amountMax.toLocaleString() +
                                        ' ' +
                                        deposit.currency.toUpperCase()}
                                </Text>
                            </div>
                            <Text color='tertiary' size='xs'>
                                {t('Максимальная сумма депозита')}
                            </Text>
                        </div>
                        <div>
                            <div>
                                <Text weight='medium' size='s'>
                                    {t('до')}
                                </Text>
                                <Text weight='medium' size='m'>
                                    {Math.floor(deposit.dayMax / 30) +
                                        ' ' +
                                        (i18n.language === 'ru'
                                            ? getGenitiveMonthRu(
                                                  Math.ceil(deposit.dayMax / 30)
                                              )
                                            : getMonthEn(
                                                  Math.ceil(deposit.dayMax / 30)
                                              ))}
                                </Text>
                            </div>
                            <Text color='tertiary' size='xs'>
                                {t('Срок депозита')}
                            </Text>
                        </div>
                    </div>
                </div>
                <div className='deposit-product-details-card__buttons'>
                    <div>
                        <Link
                            to={
                                RouteName.DEPOSIT_PRODUCT_PAGE +
                                '/' +
                                deposit.id +
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
                            variant='quadruple'
                            to={
                                RouteName.DEPOSIT_PRODUCT_PAGE +
                                '/' +
                                deposit.id
                            }
                        >
                            {t('Подробная информация')}
                        </Link>
                    </div>
                </div>
            </div>
        </Card>
    );
};
