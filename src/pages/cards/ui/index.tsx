import { useParams } from 'react-router-dom';

import { getIconName } from 'src/shared/lib';
import { Button, Icon, Image, Text, Container } from 'src/shared/ui';
import { MessageCard } from 'src/entities/message';
import { BackButton } from 'src/features/multi-step-form';

import { CARDS_NOT_FOUND, CREATE_CARD } from 'src/widgets/cards/model';
import { useGetCardProductInfoQuery } from 'src/shared/api';

import { Advantages } from './advantage';

export const CardPage = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading } = useGetCardProductInfoQuery({
        id: id
    });

    return (
        <Container>
            <BackButton />
            {data ? (
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
                        <Advantages card={data} />
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
