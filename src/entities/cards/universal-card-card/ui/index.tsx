import { Button, Card, Icon, Image, Link, Text } from 'src/shared/ui';

import type { ReactNode } from 'react';

import {
    type CardDetails,
    type CardProduct,
    type CardProductDetails,
    type CustomerCard,
    INFO_ABOUT_CARD,
    MORE_DETAILS,
    REQUEST_CARD,
    RouteName
} from 'src/shared/model';

import './styles.scss';
import { getIconName } from 'src/shared/lib';
import { LinkCard } from 'src/entities/cards/universal-card-card/ui/link-card';

interface Props {
    card: CustomerCard | CardProduct | CardDetails | CardProductDetails;
    children?: ReactNode;
}

export const UniversalCardCard = ({ card, children }: Props) => {
    const cardRoute =
        'status' in card ? RouteName.CARD_PAGE : RouteName.CARD_PRODUCT_PAGE;
    const linkCardDetails = 'id' in card ? cardRoute + '/' + card.id : '';
    const buttonText =
        'status' in card
            ? 'id' in card
                ? INFO_ABOUT_CARD
                : 'Перевести'
            : REQUEST_CARD;
    return (
        <Card color='quadruple' padding='large' gap='extra-large'>
            <div className='universal-card-card__image'>
                <LinkCard link={linkCardDetails}>
                    <Image src={card.image} />
                </LinkCard>
            </div>
            <div className='universal-card-card__second'>
                <div className='universal-card-card__second__info'>
                    <div className='universal-card-card__second__info__text'>
                        <div className='universal-card-card__second__info__text__name'>
                            <LinkCard link={linkCardDetails}>
                                <Text size='l' weight='bold'>
                                    {card.name}
                                </Text>
                            </LinkCard>
                            {children ? (
                                children
                            ) : (
                                <Icon
                                    icon={getIconName(card.paymentSystem)}
                                    width={60}
                                    height={30}
                                />
                            )}
                        </div>
                        <Text color='quadruple'>1</Text>
                    </div>
                    <div className='universal-card-card__second__info__details'></div>
                </div>
                <div className='universal-card-card__second__button'>
                    <Button variant='secondary'>{buttonText}</Button>
                    {linkCardDetails && !('status' in card) && (
                        <Link to={linkCardDetails}>
                            <Button>{MORE_DETAILS}</Button>
                        </Link>
                    )}
                </div>
            </div>
        </Card>
    );
};
