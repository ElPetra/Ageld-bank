import { Link, useLocation, useParams } from 'react-router-dom';
import { Button, Icon, Image, Text } from 'src/shared/ui';
import { cards } from 'src/widgets/cards/model';
import { getIconName } from 'src/widgets/cards/ui/content/card/utils.js';
import { AccountNotFound } from 'src/widgets/accounts/ui/content/not-found/index.js';
import { Advantages } from 'src/widgets/card-info/ui/advantage/index.js';

export const CardInfo = () => {
    const { state } = useLocation();
    const { id } = useParams<{ id: string }>();
    const card = cards.find(card => card.id === id);

    return (
        <>
            <Link className='back_link' to={state.from}>
                <Icon icon='arrow' />
                <Text>Назад</Text>
            </Link>
            {card !== undefined ? (
                <div className='finance-card__container'>
                    <Image height={200} image={card.image} width={420} />
                    <div className='finance-card__info'>
                        <div className='finance-card__title'>
                            <Text size='l' weight='bold' color='primary-day'>
                                {card.name}
                            </Text>
                            <Icon
                                icon={getIconName(card.payment)}
                                className='finance-card__payment'
                                width={70}
                                height={30}
                            />
                        </div>
                        <div className='finance-card__advantages'>
                            <Advantages card={card} />
                        </div>
                        <div className='finance-card__buttons'>
                            <Button>Оформить</Button>
                        </div>
                    </div>
                </div>
            ) : (
                <AccountNotFound />
            )}
        </>
    );
};
