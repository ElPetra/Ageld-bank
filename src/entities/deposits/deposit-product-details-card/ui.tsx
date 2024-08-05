import { useTranslation } from 'react-i18next';

import { CREATE, RouteName } from 'src/shared/model';
import { Icon, Text, Button, Card, Link } from 'src/shared/ui';

import type { DepositProductDetails } from 'src/shared/model';

import './styles.scss';

interface Props {
    deposit: DepositProductDetails;
}

export const DepositProductDetailsCard = ({ deposit }: Props) => {
    const { t } = useTranslation();
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
                            {deposit.name +
                                t(' откроет новые горизонты для вас')}
                        </Text>
                    </div>
                    <div className='deposit-product-details-card__info__details'>
                        <div>
                            <div>
                                <Text weight='medium' size='s'>
                                    {t('до')}
                                </Text>
                                <Text weight='medium' size='m'>
                                    {deposit.percentRate + '%'}
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
                                    {deposit.monthsMax + ' ' + t('месяцев')}
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
                            <Button
                                variant='secondary'
                                size='medium'
                                type='button'
                            >
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
