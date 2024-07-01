import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Icon, Text, Button, Card } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';

import type { CustomerDeposit, DepositProfitability } from 'src/shared/model';

import './styles.scss';

interface Props {
    deposit: CustomerDeposit | DepositProfitability;
}

export const UniversalDepositCard = ({ deposit }: Props) => {
    const { t } = useTranslation();
    return (
        <Card padding='medium'>
            <div className='universal-deposit-card__container'>
                <div className='universal-deposit-card__title'>
                    <div className='universal-deposit-card__title__icon'>
                        <Icon icon={deposit.currency} />
                    </div>
                    <Link to={RouteName.DEPOSIT_PAGE + '/' + deposit.id}>
                        <Text weight='bold' size='m'>
                            {deposit.name}
                        </Text>
                    </Link>
                </div>
                <div className='universal-deposit-card__info'>
                    {'number' in deposit && (
                        <div>
                            <Text weight='bold' size='l'>
                                {deposit.number.replace(/.{12}/gm, '******')}
                            </Text>
                            <Text color='tertiary' size='xs'>
                                {t('Номер депозитного счета')}
                            </Text>
                        </div>
                    )}
                    {'percentRate' in deposit && (
                        <div>
                            <Text weight='bold' size='m'>
                                {deposit.percentRate + '%'}
                            </Text>
                            <Text color='tertiary' size='xs'>
                                {t('Процентная ставка')}
                            </Text>
                        </div>
                    )}
                    {'balance' in deposit && (
                        <div>
                            <Text weight='bold' size='l'>
                                {deposit.balance.toLocaleString() +
                                    ' ' +
                                    deposit.currency.toUpperCase()}
                            </Text>
                            <Text color='tertiary' size='xs'>
                                {t('Сумма на депозитном счете')}
                            </Text>
                        </div>
                    )}
                    {'closedAt' in deposit && (
                        <div>
                            <Text weight='bold' size='l'>
                                {deposit.closedAt}
                            </Text>
                            <Text color='tertiary' size='xs'>
                                {t('Окончание срока депозита')}
                            </Text>
                        </div>
                    )}
                    {'income' in deposit && (
                        <div>
                            <Text weight='bold' size='m'>
                                {deposit.income.toLocaleString() +
                                    ' ' +
                                    deposit.currency.toUpperCase()}
                            </Text>
                            <Text color='tertiary' size='xs'>
                                {t('Сумма в конце срока')}
                            </Text>
                        </div>
                    )}
                    {'sum' in deposit && (
                        <div>
                            <Text weight='bold' size='m'>
                                {deposit.sum.toLocaleString() +
                                    ' ' +
                                    deposit.currency.toUpperCase()}
                            </Text>
                            <Text color='tertiary' size='xs'>
                                {t('Доход по депозиту')}
                            </Text>
                        </div>
                    )}
                </div>
                <div>
                    {'balance' in deposit ? (
                        <Link to={RouteName.DEPOSIT_PAGE + '/' + deposit.id}>
                            <Button
                                variant='primary'
                                size='medium'
                                type='button'
                            >
                                {t('Показать больше')}
                            </Button>
                        </Link>
                    ) : (
                        <Button variant='primary' size='medium' type='button'>
                            {t('Оформить')}
                        </Button>
                    )}
                </div>
            </div>
        </Card>
    );
};
