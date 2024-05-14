import { Button, Text, Image, Link } from 'src/shared/ui';
import {
    CARD_BALANCE,
    CARD_CURRENCY,
    CARD_NUMBER_REPLACEMENT,
    EXPIRY_DATE,
    INFO_ABOUT_CARD,
    RouteName
} from 'src/shared/model';
import { formatCardExpirationDate } from 'src/shared/lib';
import { AccountStatuses } from 'src/entities/accounts';

import type { CustomersCard, ProductStatus } from 'src/shared/model';

import './styles.scss';

interface Props {
    card: CustomersCard;
}

export const CustomerCard = ({ card }: Props) => {
    const currentLink = RouteName.CARD_PAGE + '/' + card.number;
    return (
        <div className='customer-card__container'>
            <Link to={currentLink}>
                <Image
                    className='customer-card__image'
                    height={200}
                    width={340}
                    src={card.image}
                />
            </Link>
            <div className='customer-card__info'>
                <div className='customer-card__about'>
                    <div className='customer-card__header'>
                        <div className='customer-card__title'>
                            <Text size='l' weight='bold' color='quadruple'>
                                {`AGELD CARD ${card.level}`}
                            </Text>
                            <AccountStatuses
                                master={false}
                                status={
                                    card.status.toLowerCase() as ProductStatus
                                }
                            />
                        </div>
                        <Text size='l' weight='bold' color='quadruple'>
                            {card.number.replace(
                                /.{12}/gm,
                                CARD_NUMBER_REPLACEMENT
                            )}
                        </Text>
                    </div>
                    <div className='customer-card__advantages'>
                        <div className='customer-card__advantages-block'>
                            <Text tag='h2' size='m' weight='bold'>
                                {formatCardExpirationDate(card.expirationAt)}
                            </Text>
                            <Text size='xs'>{EXPIRY_DATE}</Text>
                        </div>
                        <div className='customer-card__advantages-block'>
                            <Text tag='h2' size='m' weight='bold'>
                                Здесь мог быть баланс
                            </Text>
                            <Text size='xs'>{CARD_BALANCE}</Text>
                        </div>
                        <div className='customer-card__advantages-block'>
                            <Text tag='h2' size='m' weight='bold'>
                                Здесь могла быть валюта
                            </Text>
                            <Text size='xs'>{CARD_CURRENCY}</Text>
                        </div>
                    </div>
                </div>
                <div className='customer-card__buttons'>
                    <Link to={currentLink}>
                        <Button variant='secondary'>{INFO_ABOUT_CARD}</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
