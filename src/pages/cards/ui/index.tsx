import { useParams } from 'react-router-dom';

import { getIconName } from 'src/shared/lib';
import { Button, Icon, Image, Text } from 'src/shared/ui';
import { ProductNotFound } from 'src/entities/products';
import { BackButton } from 'src/features/multi-step-form';

import { Advantages } from './advantage';

import { cards, CARDS_NOT_FOUND, CREATE_CARD } from 'src/widgets/cards/model';

export const CardPage = () => {
    const { id } = useParams<{ id: string }>();
    const card = cards.find(card => card.id === id);

    return (
        <>
            <BackButton />
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
                <ProductNotFound
                    text={CARDS_NOT_FOUND}
                    buttonText={CREATE_CARD}
                />
            )}
        </>
    );
};
