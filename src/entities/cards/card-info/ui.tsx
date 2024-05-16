import { Button, Icon, Text } from 'src/shared/ui';
import { getIconName } from 'src/shared/lib';

import { ProductStatuses } from 'src/entities/product';
import { Advantages } from 'src/pages/card-product/ui/advantage';
import { advantagesItems } from 'src/pages/card/model';
import { advantages } from 'src/pages/card-product/model';

import type { CardDetails, CardProductDetails } from 'src/shared/model';

import './styles.scss';

interface Props {
    card: CardDetails | CardProductDetails;
    type?: 'card' | 'card-product';
}
export const CardInfo = ({ card, type }: Props) => {
    return (
        <div className='finance-card__info'>
            <div className='finance-card__title'>
                <Text size='l' weight='bold' color='quadruple'>
                    {card.name}
                </Text>
                {type === 'card' ? (
                    <>
                        {'status' in card && (
                            <ProductStatuses
                                isMaster={false}
                                status={card.status}
                                direction='row'
                            />
                        )}
                    </>
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
                <Text size='l' weight='bold'>
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
