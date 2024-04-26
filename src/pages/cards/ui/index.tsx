import { useParams } from 'react-router-dom';
import { getIconName } from 'src/shared/lib';
import { Button, Container, Icon, Image, Preloader, Text } from 'src/shared/ui';
import { MessageCard } from 'src/entities/message';
import { BackButton } from 'src/features/multi-step-form';
import { CARDS_NOT_FOUND, CREATE_CARD } from 'src/widgets/cards/model';
import { useGetCardProductInfoQuery } from 'src/shared/api';
import { advantages, conditions, limits } from 'src/pages/cards/model';

import { Advantages } from './advantage';

export const CardPage = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading } = useGetCardProductInfoQuery({
        id: id ?? ''
    });

    return (
        <Container>
            <BackButton />
            {isLoading && <Preloader />}
            {data ? (
                <div className='finance-card__page'>
                    <div className='finance-card__container'>
                        <Image
                            height={200}
                            src={data.image}
                            width={420}
                            className='finance-card__image'
                        />
                        <div className='finance-card__info'>
                            <div className='finance-card__title'>
                                <Text size='l' weight='bold' color='quadruple'>
                                    {data.nameProduct}
                                </Text>
                                <Icon
                                    icon={getIconName(data.paymentSystem)}
                                    className='finance-card__payment'
                                    width={70}
                                    height={30}
                                />
                            </div>
                            <Advantages card={data} items={advantages} />

                            <div className='finance-card__buttons'>
                                <Button>Оформить</Button>
                            </div>
                        </div>
                    </div>
                    <div className='advantages__title'>
                        <Text size='l' weight='bold' color='quadruple'>
                            Условия
                        </Text>
                    </div>
                    <Advantages card={data} items={conditions} />
                    <div className='advantages__title'>
                        <Text size='l' weight='bold' color='quadruple'>
                            Лимиты
                        </Text>
                    </div>
                    <Advantages card={data} items={limits} />
                </div>
            ) : (
                <MessageCard text={CARDS_NOT_FOUND} buttonText={CREATE_CARD} />
            )}
        </Container>
    );
};
