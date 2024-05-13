import { useParams } from 'react-router-dom';
import { useGetCardProductInfoQuery } from 'src/shared/api';
import { CARDS_NOT_FOUND, CREATE_CARD } from 'src/shared/model';
import { Container, Image, Preloader, Text } from 'src/shared/ui';
import { MessageCard } from 'src/entities/message';
import { BackButton } from 'src/features/multi-step-form';
import { CardInfo } from 'src/entities/cards/card-info';

import { conditions, limits } from '../model';

import { Advantages } from './advantage';

export const CardProductPage = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading } = useGetCardProductInfoQuery({
        id: id ?? ''
    });

    return (
        <Container>
            {isLoading ? (
                <Preloader />
            ) : (
                <>
                    <BackButton />
                    {data ? (
                        <div className='finance-card__page'>
                            <div className='finance-card__container'>
                                <Image
                                    height={200}
                                    src={data.image}
                                    width={420}
                                    className='finance-card__image'
                                />
                                <CardInfo card={data} type='card-product' />
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
                        <MessageCard
                            title={CARDS_NOT_FOUND}
                            buttonText={CREATE_CARD}
                        />
                    )}
                </>
            )}
        </Container>
    );
};
