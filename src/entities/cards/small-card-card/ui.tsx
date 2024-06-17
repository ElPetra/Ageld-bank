import { useTranslation } from 'react-i18next';

import { Card, Icon, Text } from 'src/shared/ui';
import { formatExpirationDate } from 'src/shared/lib';

import type { CustomerCard } from 'src/shared/model';

import './styles.scss';

interface Props {
    card: CustomerCard;
}

export const SmallCardCard = ({ card }: Props) => {
    const { t } = useTranslation();
    return (
        <Card direction='column'>
            <div className='small-card-card__first-row'>
                <Icon widthAndHeight={40} icon='rub' />
                <div className='small-card-card__info'>
                    <Text size='m' weight='medium'>
                        {100000}
                    </Text>
                    <Text size='xs' color='tertiary'>
                        {card.name}
                    </Text>
                </div>
            </div>
            <div className='small-card-card__second-row'>
                <div
                    className={`small-card-card__preview ${card.level.toLowerCase()}`}
                >
                    <div className='small-card-card__preview__number'>
                        {card.number.substring(12, 16)}
                    </div>
                    <div className='small-card-card__preview__payment-system'>
                        {t(card.paymentSystem)}
                    </div>
                </div>
                <Text size='xs'>{formatExpirationDate(card.expirationAt)}</Text>
            </div>
        </Card>
    );
};
