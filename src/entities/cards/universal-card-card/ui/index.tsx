import { Button, Card, Icon, Image, Link, Text } from 'src/shared/ui';
import {
    CARD_BALANCE,
    CARD_CURRENCY,
    CARD_LEVEL,
    CARD_NUMBER,
    CARD_NUMBER_REPLACEMENT,
    EXPIRY_DATE,
    INFO_ABOUT_CARD,
    MORE_DETAILS,
    REQUEST_CARD,
    RouteName,
    RUB,
    typeCard
} from 'src/shared/model';
import { formatExpirationDate, getIconName } from 'src/shared/lib';

import {
    isCardDetails,
    isCardProduct,
    isCardProductDetails,
    isCustomerCard
} from '../lib';

import { LinkCard } from './link-card';
import { Detail } from './detail';

import type { ReactNode } from 'react';
import type {
    CardDetails,
    CardProduct,
    CardProductDetails,
    CustomerCard
} from 'src/shared/model';

import './styles.scss';

interface Props {
    card: CustomerCard | CardProduct | CardDetails | CardProductDetails;
    children?: ReactNode;
}

function getFirstUpperCase(str: string): string {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export const UniversalCardCard = ({ card, children }: Props) => {
    const cardRoute =
        'status' in card ? RouteName.CARD_PAGE : RouteName.CARD_PRODUCT_PAGE;
    const link =
        isCustomerCard(card) || isCardProduct(card)
            ? cardRoute + '/' + card.id
            : '';

    const buttonText = isCustomerCard(card)
        ? INFO_ABOUT_CARD
        : isCardDetails(card)
          ? 'Перевести'
          : REQUEST_CARD;

    const handleCopyCard = () => {
        isCardDetails(card) && navigator.clipboard.writeText(card.number);
    };

    return (
        <Card
            color='quadruple'
            padding='large'
            gap='extra-large'
            className='universal-card-card'
        >
            <div className='universal-card-card__image'>
                <LinkCard link={link}>
                    <Image src={card.image} />
                </LinkCard>
            </div>
            <div className='universal-card-card__second'>
                <div className='universal-card-card__second__info'>
                    <div className='universal-card-card__second__info__text'>
                        <div className='universal-card-card__second__info__text__name'>
                            <LinkCard link={link}>
                                <Text size='l' weight='bold'>
                                    {`A-Geld Card ${card.name}`}
                                </Text>
                            </LinkCard>
                            {children ? (
                                children
                            ) : (
                                <div className='universal-card-card__second__info__text__name__icon'>
                                    <Icon
                                        icon={getIconName(card.paymentSystem)}
                                        width={60}
                                        height={30}
                                    />
                                </div>
                            )}
                        </div>
                        {isCardDetails(card) ? (
                            <Text size='l' weight='bold'>
                                {card.balance + ' ₽'}
                            </Text>
                        ) : (
                            <Text color='quadruple'>
                                {isCustomerCard(card)
                                    ? card.number.replace(
                                          /.{12}/gm,
                                          CARD_NUMBER_REPLACEMENT
                                      )
                                    : typeCard[card.type] +
                                      ' карта. Надежная карта на каждый день'}
                            </Text>
                        )}
                    </div>
                    <div className='universal-card-card__second__info__details'>
                        {isCardProduct(card) && (
                            <>
                                <Detail
                                    value={getFirstUpperCase(card.level)}
                                    description={CARD_LEVEL}
                                />
                                <Detail
                                    value={RUB}
                                    description={CARD_CURRENCY}
                                />
                            </>
                        )}
                        {isCardProductDetails(card) && (
                            <>
                                <Detail
                                    value={getFirstUpperCase(card.level)}
                                    description={CARD_LEVEL}
                                />
                                <Detail
                                    value={card.isVirtual ? 'Да' : 'Нет'}
                                    description='Виртуальная'
                                />
                                <Detail
                                    value={card.feeUse + ' ₽'}
                                    description='Плата за использование'
                                />
                            </>
                        )}
                        {isCustomerCard(card) && (
                            <>
                                <Detail
                                    value={formatExpirationDate(
                                        card.expirationAt
                                    )}
                                    description={EXPIRY_DATE}
                                />
                                <Detail
                                    value='1000 ₽' // Данные пока не преходят с api
                                    description={CARD_BALANCE}
                                />
                                <Detail
                                    value={RUB}
                                    description={CARD_CURRENCY}
                                />
                            </>
                        )}
                        {isCardDetails(card) && (
                            <>
                                <div className='universal-card-card__second__info__details__copy'>
                                    <Detail
                                        value={card.number.replace(
                                            /.{12}/gm,
                                            CARD_NUMBER_REPLACEMENT
                                        )}
                                        description={CARD_NUMBER}
                                    />
                                    <button onClick={handleCopyCard}>
                                        <Icon icon='copy-icon' />
                                    </button>
                                </div>
                                <Detail
                                    value={formatExpirationDate(
                                        card.expirationAt
                                    )}
                                    description={EXPIRY_DATE}
                                />
                                <Detail
                                    value={RUB}
                                    description={CARD_CURRENCY}
                                />
                            </>
                        )}
                    </div>
                </div>
                <div className='universal-card-card__second__button'>
                    {isCustomerCard(card) ? (
                        <Link to={link}>
                            <Button variant='secondary'>{buttonText}</Button>
                        </Link>
                    ) : (
                        <Button variant='secondary'>{buttonText}</Button>
                    )}
                    {isCardProduct(card) && (
                        <Link to={link}>
                            <Button>{MORE_DETAILS}</Button>
                        </Link>
                    )}
                </div>
            </div>
        </Card>
    );
};
