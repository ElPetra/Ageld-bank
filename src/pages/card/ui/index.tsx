import { useParams } from 'react-router-dom';

import { Container, Image, Text } from 'src/shared/ui';
import { BackButton } from 'src/features/multi-step-form';
import { CardInfo } from 'src/entities/cards';

import { actionsItems, data, infoItems } from '../model';

import { DetailsItem } from './details-item';

export const CardPage = () => {
    const { id } = useParams<{ id: string }>();

    const card = data[0];

    return (
        <Container>
            <BackButton />
            {card && (
                <div className='finance-card__page'>
                    <div className='finance-card__container'>
                        <Image
                            height={200}
                            image='gold'
                            width={420}
                            className='finance-card__image'
                        />
                        <CardInfo card={card} type='card' />
                    </div>
                    <div className='advantages__title'>
                        <Text size='m' weight='medium' color='blue'>
                            Информация по карте
                        </Text>
                        <div className='advantages__container'>
                            {infoItems.map(detail => (
                                <DetailsItem detail={detail} key={detail.id} />
                            ))}
                        </div>
                    </div>
                    <div className='advantages__title'>
                        <Text size='m' weight='medium' color='blue'>
                            Действия с картой
                        </Text>
                        <div className='advantages__container'>
                            {actionsItems.map(detail => (
                                <DetailsItem detail={detail} key={detail.id} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </Container>
    );
};
