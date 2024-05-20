import { Link } from 'react-router-dom';
import { Icon, Text, Button } from 'src/shared/ui';

import {
    INTEREST_RATE,
    DEPOSIT_BALANCE,
    SHOW_MORE,
    DEPOSIT_END_OF_TERM,
    RouteName,
    depositBalanceConcat
} from 'src/shared/model';

import type { MockDeposit } from 'src/shared/model';

import './styles.scss';

interface Props {
    deposit: MockDeposit;
}

export const DepositCard = ({ deposit }: Props) => {
    const DEPOSIT_CURRENT_BALANCE = depositBalanceConcat(deposit);
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
                        {INTEREST_RATE}
                    </Text>
                </div>
                <div className='deposit__card-info'>
                    <Text weight='bold' size='l'>
                        {DEPOSIT_CURRENT_BALANCE}
                    </Text>
                    <Text weight='light' color='quadruple' size='xs'>
                        {DEPOSIT_BALANCE}
                    </Text>
                </div>
                <div className='deposit__card-info'>
                    <Text weight='bold' size='l'>
                        {deposit.closed}
                    </Text>
                    <Text weight='light' color='quadruple' size='xs'>
                        {DEPOSIT_END_OF_TERM}
                    </Text>
                </div>
                <Link to={RouteName.DEPOSIT_PAGE + '/' + deposit.id}>
                    <Button variant='primary' size='medium' type='button'>
                        {SHOW_MORE}
                    </Button>
                </Link>
            </div>
        </div>
    );
};
