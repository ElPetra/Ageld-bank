import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Icon, Text, Button, Card } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';

import type { MockDeposit } from 'src/shared/model';

import './styles.scss';

interface Props {
    deposit: MockDeposit;
}

export const CustomerDepositCard = ({ deposit }: Props) => {
    const { t } = useTranslation();
    return (
        <Card padding='medium'>
            <div className='deposit-card__container'>
                <div className='deposit-card__title'>
                    <div className='deposit-card__title__icon'>
                        <Icon icon={deposit.icon} />
                    </div>
                    <Link to={RouteName.DEPOSIT_PAGE + '/' + deposit.id}>
                        <Text weight='bold' size='m'>
                            {deposit.name}
                        </Text>
                    </Link>
                </div>
                <div className='deposit-card__info'>
                    <div>
                        <Text weight='bold' size='l'>
                            {deposit.interestRate}
                        </Text>
                        <Text color='tertiary' size='xs'>
                            {t('Процентная ставка')}
                        </Text>
                    </div>
                    <div>
                        <Text weight='bold' size='l'>
                            {`${deposit.balance} ${deposit.currency.toUpperCase()}`}
                        </Text>
                        <Text color='tertiary' size='xs'>
                            {t('Сумма на депозитном счете')}
                        </Text>
                    </div>
                    <div>
                        <Text weight='bold' size='l'>
                            {deposit.closed}
                        </Text>
                        <Text color='tertiary' size='xs'>
                            {t('Окончание срока вклада')}
                        </Text>
                    </div>
                </div>
                <div>
                    <Link to={RouteName.DEPOSIT_PAGE + '/' + deposit.id}>
                        <Button variant='primary' size='medium' type='button'>
                            {t('Показать больше')}
                        </Button>
                    </Link>
                </div>
            </div>
        </Card>
    );
};
