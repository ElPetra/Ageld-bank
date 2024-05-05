import { Container, Image, Text } from 'src/shared/ui';
import { BackButton } from 'src/features/multi-step-form';
import { actionsItems, data, infoItems } from 'src/pages/card/model';
import { useParams } from 'react-router-dom';
import { DetailsItem } from 'src/pages/card/ui/details-item';
import { CardInfo } from 'src/pages/card/ui/info';

export const CardPage = () => {
    const { id } = useParams<{ id: string }>();
    const card = data.find(item => item.cardId === Number(id));

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
                        <CardInfo card={card} />
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
