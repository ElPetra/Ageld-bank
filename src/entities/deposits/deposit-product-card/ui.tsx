import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { CREATE, mockDepositPercentRate, RouteName } from 'src/shared/model';
import { getMonthEn, getGenitiveMonthRu } from 'src/shared/lib';
import { Icon, Text, Button, Card } from 'src/shared/ui';

import type { DepositProduct } from 'src/shared/model';

import './styles.scss';

interface Props {
    deposit: DepositProduct;
}

export const DepositProductCard = ({ deposit }: Props) => {
    const { t, i18n } = useTranslation();

    return (
        <Card gap='medium' padding='medium' direction='column'>
            <div className='deposit-card__info'>
                <div className='deposit-card__info__main'>
                    <div className='deposit-card__info__main__text'>
                        <Text size='m' weight='medium'>
                            {'A-Geld ' + deposit.name}
                        </Text>
                        <Text size='xs' color='tertiary'>
                            {t('До 30 сентября оформите A-Geld', {
                                name: deposit.name
                            })}
                        </Text>
                    </div>
                    <div className='deposit-card__info__main__icon'>
                        <Icon width={64} icon={deposit.currency} />
                    </div>
                </div>
                <div className='deposit-card__info__details'>
                    <div>
                        <div>
                            <Text weight='medium' size='s'>
                                {t('до')}
                            </Text>
                            <Text weight='medium' size='m'>
                                {mockDepositPercentRate + '%'}
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
                                {t('от')}
                            </Text>
                            <Text weight='medium' size='m'>
                                {Math.ceil(deposit.dayMin / 30) +
                                    ' ' +
                                    (i18n.language === 'ru'
                                        ? getGenitiveMonthRu(
                                              Math.ceil(deposit.dayMin / 30)
                                          )
                                        : getMonthEn(
                                              Math.ceil(deposit.dayMin / 30)
                                          ))}
                            </Text>
                        </div>
                        <Text color='tertiary' size='xs'>
                            {t('Срок депозита')}
                        </Text>
                    </div>
                </div>
            </div>
            <div className='deposit-card__buttons'>
                <div>
                    <Link
                        to={RouteName.DEPOSIT_PRODUCT_PAGE + '/' + deposit.id}
                    >
                        <Button width='max'>{t('Показать больше')}</Button>
                    </Link>
                </div>
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
                        <Button width='max' variant='secondary'>
                            {t('Оформить')}
                        </Button>
                    </Link>
                </div>
            </div>
        </Card>
    );
};
