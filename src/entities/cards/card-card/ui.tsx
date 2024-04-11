import { Icon, Text } from 'src/shared/ui';

import type { Card } from 'src/shared/model';

import './styles.scss';

interface Props {
    card: Card;
}

export const CardCard = ({ card }: Props) => {
    const expirationAt = card.expirationAt.split('-');
    return (
        <div className='card-card'>
            <div className='card-card__first-row'>
                <Icon widthAndHeight={40} icon={card.currency} />
                <div className='card-card__info'>
                    <Text size='m' weight='medium'>
                        {card.balance}
                    </Text>
                    <Text size='xs' color='quadruple'>
                        {card.name}
                    </Text>
                </div>
            </div>
            <div className='card-card__second-row'>
                <div className={`card-card__preview ${card.level}`}>
                    <div className='card-card__number'>
                        {card.number.substring(12, 16)}
                    </div>
                    <div className='card-card__payment-system'>
                        {card.paymentSystem}
                    </div>
                </div>
                <Text size='xs'>
                    {expirationAt[1] + '/' + expirationAt[0].substring(2, 4)}
                </Text>
            </div>
        </div>
    );
};
