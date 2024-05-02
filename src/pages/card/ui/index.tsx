import { Button, Container, Image, Text } from 'src/shared/ui';
import { BackButton } from 'src/features/multi-step-form';
import { data } from 'src/pages/card/model/index.js';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { CardInfo } from 'src/pages/card/ui/info/index.js';

export const CardPage = () => {
    const { id } = useParams<{ id: string }>();
    let card = data.find(item => item.cardId === Number(id));
    useEffect(() => {
        console.log(data);
    }, []);

    return (
        <Container>
            <BackButton />
            <div className='finance-card__page'>
                <div className='finance-card__container'>
                    <Image
                        height={200}
                        image='gold'
                        width={420}
                        className='finance-card__image'
                    />
                    <div className='finance-card__info'>
                        <div className='finance-card__title'>
                            <Text size='l' weight='bold' color='quadruple'>
                                {card?.cardName}
                            </Text>

                            <Text size='l' weight='bold' color='quadruple'>
                                {card?.statusName}
                            </Text>
                        </div>
                        <Text size='l' weight='bold' color='quadruple'>
                            {card?.balance}
                        </Text>
                        <CardInfo card={card} />
                        <div className='finance-card__buttons'>
                            <Button>Перевести</Button>
                        </div>
                    </div>
                </div>
                <div className='advantages__title'>
                    <Text size='l' weight='bold' color='quadruple'>
                        Информация по карте
                    </Text>
                </div>

                <div className='advantages__title'>
                    <Text size='l' weight='bold' color='quadruple'>
                        Действия с картой
                    </Text>
                </div>
            </div>
        </Container>
    );
};
