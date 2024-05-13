import { Button, Icon, Text } from 'src/shared/ui';
import { getIconName, getStatusName } from 'src/shared/lib';
import { Advantages } from 'src/pages/card-product/ui/advantage';
import { advantagesItems } from 'src/pages/card/model';
import { advantages } from 'src/pages/card-product/model';

import type { Card, CardProductInfo } from 'src/shared/model';
import './styles.scss';

interface Props {
    card: Card | CardProductInfo;
    type?: 'card' | 'card-product';
}
export const CardInfo = ({ card, type }: Props) => {
    return (
        <div className='finance-card__info'>
            <div className='finance-card__title'>
                <Text
                    size='l'
                    weight='bold'
                    color={type === 'card' ? 'blue' : 'quadruple'}
                >
                    {type === 'card'
                        ? 'cardName' in card && card.cardName
                        : 'nameProduct' in card && card.nameProduct}
                </Text>
                {type === 'card' ? (
                    <div
                        className={`finance-card__status finance-card__status-type__${'statusName' in card && card.statusName}`}
                    >
                        <Text size='s' weight='medium' color='white'>
                            {'statusName' in card &&
                                getStatusName(card.statusName)}
                        </Text>
                    </div>
                ) : (
                    <Icon
                        icon={getIconName(card.paymentSystem)}
                        className='finance-card__payment'
                        width={70}
                        height={30}
                    />
                )}
            </div>
            {type === 'card' && (
                <Text size='l' weight='bold' color='blue'>
                    {'balance' in card && card.balance + ' ₽'}
                </Text>
            )}
            <Advantages
                card={card}
                items={type === 'card' ? advantagesItems : advantages}
                type={type}
            />
            <div className='finance-card__buttons'>
                <Button>Перевести</Button>
            </div>
        </div>
    );
};
