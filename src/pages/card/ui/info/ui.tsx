import { Button, Text } from 'src/shared/ui/index.js';
import { getStatusName } from 'src/shared/lib/index.js';
import { Advantages } from 'src/pages/card-product/ui/advantage/index.js';
import { advantagesItems } from 'src/pages/card/model/index.js';

import type { Card } from 'src/shared/model/index.js';

interface Props {
    card: Card;
}
export const CardInfo = ({ card }: Props) => {
    return (
        <div className='finance-card__info'>
            <div className='finance-card__title'>
                <Text size='l' weight='bold' color='blue'>
                    {card.cardName}
                </Text>
                <div
                    className={`finance-card__status finance-card__status-type__${card.statusName}`}
                >
                    <Text size='s' weight='medium' color='white'>
                        {getStatusName(card.statusName)}
                    </Text>
                </div>
            </div>
            <Text size='l' weight='bold' color='blue'>
                {card.balance + ' ₽'}
            </Text>
            <Advantages card={card} items={advantagesItems} type='card' />
            <div className='finance-card__buttons'>
                <Button>Перевести</Button>
            </div>
        </div>
    );
};
