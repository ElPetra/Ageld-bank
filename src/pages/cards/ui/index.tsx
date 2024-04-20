import { useParams } from 'react-router-dom';

import { getIconName } from 'src/shared/lib';
import { Button, Icon, Image, Text, Container } from 'src/shared/ui';
import { MessageCard } from 'src/entities/message';
import { BackButton } from 'src/features/multi-step-form';

import {
    cardsDebet,
    CARDS_NOT_FOUND,
    CREATE_CARD
} from 'src/widgets/cards/model';

import { Advantages } from './advantage';

export const CardPage = () => {
    const { id } = useParams<{ id: string }>();
    const card = cardsDebet.find(card => card.id === id);

    return (
        <Container>
            <BackButton />
            {card ? (
                <div className='finance-card__container'>
                    <Image height={200} image={card.image} width={420} />
                    <div className='finance-card__info'>
                        <div className='finance-card__title'>
                            <Text size='l' weight='bold' color='quadruple'>
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
                <MessageCard text={CARDS_NOT_FOUND} buttonText={CREATE_CARD} />
            )}
        </Container>
    );
};
