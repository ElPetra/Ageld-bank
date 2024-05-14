import { useParams } from 'react-router-dom';
import { useGetCardProductDetailsQuery } from 'src/shared/api';
import { CARDS_NOT_FOUND, CREATE_CARD } from 'src/shared/model';
import { Container, Image, Preloader, Text } from 'src/shared/ui';
import { MessageCard } from 'src/entities/message';
import { BackButton } from 'src/features/multi-step-form';
import { CardInfo } from 'src/entities/cards/card-info';

import { Advantages } from './advantage';
import { conditions, limits } from 'src/pages/card-product/model';

export const CardProductPage = () => {
    const { id } = useParams<{ id: string }>();
    const { data: cardProductInfo, isLoading } = useGetCardProductDetailsQuery({
        id: id ?? ''
    });

    return (
        <Container>
            {isLoading ? (
                <Preloader />
            ) : (
                <>
                    <BackButton />
                    {cardProductInfo ? (
                        <div className='finance-card__page'>
                            <div className='finance-card__container'>
                                <Image
                                    height={200}
                                    src={cardProductInfo.image}
                                    width={420}
                                    className='finance-card__image'
                                />
                                <CardInfo
                                    card={cardProductInfo}
                                    type='card-product'
                                />
                            </div>
                            <div className='advantages__title'>
                                <Text size='l' weight='bold' color='quadruple'>
                                    Условия
                                </Text>
                            </div>
                            <Advantages
                                card={cardProductInfo}
                                items={conditions}
                            />
                            <div className='advantages__title'>
                                <Text size='l' weight='bold' color='quadruple'>
                                    Лимиты
                                </Text>
                            </div>
                            <Advantages card={cardProductInfo} items={limits} />
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
