import { Button, Text, Image } from 'src/shared/ui';

import type { Card } from 'src/widgets/cards/model';
import './styles.scss';

interface Props {
    card: Card;
}

export const FinanceCard = ({ card }: Props) => {
    // const { pathname } = useLocation();

    return (
        card && (
            <div className='finance-card__container'>
                {/*<Link*/}
                {/*    to={RouteName.CARD_PAGE + '/' + card.id}*/}
                {/*    state={{ from: pathname }}*/}
                {/*>*/}
                <Image
                    className='finance-card__image'
                    height={200}
                    width={340}
                    src={card.imageUrl}
                />

                {/*</Link>*/}
                <div className='finance-card__info'>
                    <div className='finance-card__title'>
                        {/*<Link*/}
                        {/*    to={RouteName.CARD_PAGE + '/' + card.id}*/}
                        {/*    state={{ from: pathname }}*/}
                        {/*>*/}
                        <Text size='l' weight='bold' color='quadruple'>
                            {card.nameProduct}
                        </Text>
                        {/*</Link>*/}
                        {/*<Icon*/}
                        {/*    icon={getIconName(card.payment)}*/}
                        {/*    className='finance-card__payment'*/}
                        {/*    width={70}*/}
                        {/*    height={30}*/}
                        {/*/>*/}
                        {card.payment_system}
                    </div>
                    {/*<Text size='s' color='copy'>*/}
                    {/*    {card.description}*/}
                    {/*</Text>*/}
                    <div className='finance-card__buttons'>
                        {/*<Link*/}
                        {/*    to={RouteName.CARD_PAGE + '/' + card.id}*/}
                        {/*    state={{ from: pathname }}*/}
                        {/*>*/}
                        <Button variant='secondary'>Подробнее</Button>
                        {/*</Link>*/}
                        <Button>Оформить</Button>
                    </div>
                </div>
            </div>
        )
    );
};
