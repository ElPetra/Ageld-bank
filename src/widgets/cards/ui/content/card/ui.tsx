import { Link, useLocation } from 'react-router-dom';
import { Button, Text } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';

import { Icon } from 'src/shared/ui';

import type { Card } from 'src/widgets/cards/model';

import './styles.scss';

interface Props {
    card: Card;
}

export const FinanceCard = ({ card }: Props) => {
    const { pathname } = useLocation();

    return (
        <Link to={RouteName.CARDS + '/' + card.id} state={{ from: pathname }}>
            <div className='finance-card__container'>
                <Icon height={200} width={340} icon='debet' />
                <div className='finance-card__info'>
                    <Text size='l' weight='bold' color='primary-day'>
                        {card.name}
                    </Text>
                    <Text size='s' color='copy'>
                        {card.description}
                    </Text>
                    <div className='finance-card__buttons'>
                        <Button variant='secondary'>Подробнее</Button>
                        <Button>Оформить</Button>
                    </div>
                </div>
            </div>
        </Link>
    );
};
