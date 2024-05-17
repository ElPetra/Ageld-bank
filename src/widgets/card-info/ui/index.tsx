import { Preloader } from 'src/shared/ui';
import { CARDS_NOT_FOUND, CREATE_CARD } from 'src/shared/model';
import { UniversalCardCard } from 'src/entities/cards';
import { ProductStatuses } from 'src/entities/product';
import { MessageCard } from 'src/entities/message';
import { BackButton } from 'src/features/multi-step-form';

import type { CardDetails, CardProductDetails } from 'src/shared/model';

import './styles.scss';

interface Props {
    card: CardDetails | CardProductDetails | undefined;
    isLoading: boolean;
}

export const CardInfo = ({ card, isLoading }: Props) => {
    return isLoading ? (
        <Preloader />
    ) : (
        <div className='card-info'>
            <BackButton />
            {card ? (
                <UniversalCardCard card={card}>
                    {'status' in card && (
                        <ProductStatuses
                            isMaster={false}
                            status={card.status}
                        />
                    )}
                </UniversalCardCard>
            ) : (
                <MessageCard title={CARDS_NOT_FOUND} buttonText={CREATE_CARD} />
            )}
        </div>
    );
};
