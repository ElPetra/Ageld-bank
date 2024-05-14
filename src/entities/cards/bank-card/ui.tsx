import { Icon, Text } from 'src/shared/ui';
import { formatCardExpirationDate } from 'src/shared/lib';

import type { CustomersCard } from 'src/shared/model';

import './styles.scss';

interface Props {
    card: CustomersCard;
}

export const BankCard = ({ card }: Props) => {
    return (
        <div className='card-card'>
            <div className='card-card__first-row'>
                <Icon widthAndHeight={40} icon='rub' />
                <div className='card-card__info'>
                    <Text size='m' weight='medium'>
                        {100000}
                    </Text>
                    <Text size='xs' color='quadruple'>
                        {card.nameProduct}
                    </Text>
                </div>
            </div>
            <div className='card-card__second-row'>
                <div
                    className={`card-card__preview ${card.level.toLowerCase()}`}
                >
                    <div className='card-card__number'>
                        {card.accountNumber.substring(12, 16)}
                    </div>
                    <div className='card-card__payment-system'>
                        {card.paymentSystem}
                    </div>
                </div>
                <Text size='xs'>
                    {formatCardExpirationDate(card.expirationAt)}
                </Text>
            </div>
        </div>
    );
};
