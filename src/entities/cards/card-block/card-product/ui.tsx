import { Button, Text, Image, Icon, Link } from 'src/shared/ui';
import { getIconName } from 'src/shared/lib';
import { MORE_DETAILS, REQUEST_CARD, RouteName } from 'src/shared/model';

import type { CardProduct } from 'src/shared/model';

interface Props {
    card: CardProduct;
}

export const CardProductVariant = ({ card }: Props) => {
    return (
        <div className='finance-card__container'>
            <Link to={RouteName.CARD_PRODUCT_PAGE + '/' + card.cardProductId}>
                <Image
                    className='finance-card__image'
                    height={200}
                    width={340}
                    src={card.imageUrl}
                />
            </Link>
            <div className='finance-card__info'>
                <div className='finance-card__title'>
                    <Link
                        to={
                            RouteName.CARD_PRODUCT_PAGE +
                            '/' +
                            card.cardProductId
                        }
                    >
                        <Text size='l' weight='bold' color='quadruple'>
                            {card.nameProduct}
                        </Text>
                    </Link>
                    <Icon
                        icon={getIconName(card.paymentSystem)}
                        className='finance-card__payment'
                        width={70}
                        height={30}
                    />
                </div>
                <Text size='s' color='quadruple'>
                    {card.level}
                </Text>
                <div className='finance-card__buttons'>
                    <Link
                        to={
                            RouteName.CARD_PRODUCT_PAGE +
                            '/' +
                            card.cardProductId
                        }
                    >
                        <Button variant='secondary'>{MORE_DETAILS}</Button>
                    </Link>
                    <Button>{REQUEST_CARD}</Button>
                </div>
            </div>
        </div>
    );
};
