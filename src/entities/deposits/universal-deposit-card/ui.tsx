import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Icon, Text, Button, Card } from 'src/shared/ui';
import { CREATE, RouteName } from 'src/shared/model';
import { floorDecimals, formatDate } from 'src/shared/lib';

import type { Deposit, DepositProfitability } from 'src/shared/model';

import './styles.scss';

interface Props {
    deposit: Deposit | DepositProfitability;
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
                    <Link
                        to={
                            ('account' in deposit
                                ? RouteName.DEPOSIT_PAGE
                                : RouteName.DEPOSIT_PRODUCT_PAGE) +
                            '/' +
                            deposit.id
                        }
                    >
                        <Text weight='bold' size='m'>
                            {t('Депозит A-Geld ') + deposit.name}
                        </Text>
                    </Link>
                </div>
                <div className='universal-deposit-card__info'>
                    {'account' in deposit && (
                        <div>
                            <Text weight='bold' size='l'>
                                {deposit.account.replace(/.{16}/gm, '******')}
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
                                {formatDate(deposit.closedAt)}
                            </Text>
                            <Text color='tertiary' size='xs'>
                                {t('Окончание срока депозита')}
                            </Text>
                        </div>
                    )}
                    {'income' in deposit && (
                        <div>
                            <Text weight='bold' size='m'>
                                {floorDecimals(deposit.income) +
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
                                {floorDecimals(deposit.sum) +
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
                                variant='primary'
                                size='medium'
                                type='button'
                            >
                                {t('Оформить')}
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </Card>
    );
};
