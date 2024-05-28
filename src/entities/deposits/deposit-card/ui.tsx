import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Icon, Text, Button } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';

import type { MockDeposit } from 'src/shared/model';

import './styles.scss';

interface Props {
    deposit: MockDeposit;
}

export const DepositCard = ({ deposit }: Props) => {
    const { t } = useTranslation();
    return (
        <div className='deposit__card'>
            <div className='deposit__card__container'>
                <div className='deposit__card__title'>
                    <Icon widthAndHeight={70} icon={deposit.icon} />
                    <Text weight='bold' size='l'>
                        {deposit.name}
                    </Text>
                </div>
                <div className='deposit__card-info'>
                    <Text weight='bold' size='l'>
                        {deposit.interestRate}
                    </Text>
                    <Text weight='light' color='quadruple' size='xs'>
                        {t('Процентная ставка')}
                    </Text>
                </div>
                <div className='deposit__card-info'>
                    <Text weight='bold' size='l'>
                        {`${deposit.balance} ${deposit.currency.toUpperCase()}`}
                    </Text>
                    <Text weight='light' color='quadruple' size='xs'>
                        {t('Сумма на депозитном счете')}
                    </Text>
                </div>
                <div className='deposit__card-info'>
                    <Text weight='bold' size='l'>
                        {deposit.closed}
                    </Text>
                    <Text weight='light' color='quadruple' size='xs'>
                        {t('Окончание срока вклада')}
                    </Text>
                </div>
                <Link to={RouteName.DEPOSIT_PAGE + '/' + deposit.id}>
                    <Button variant='primary' size='medium' type='button'>
                        {t('Показать больше')}
                    </Button>
                </Link>
            </div>
        </div>
    );
};
