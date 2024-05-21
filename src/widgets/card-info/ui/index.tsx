import { Columns, Preloader } from 'src/shared/ui';
import { CARDS_NOT_FOUND, CREATE_CARD } from 'src/shared/model';
import { UniversalCardCard, Detail } from 'src/entities/cards';
import { ProductStatuses } from 'src/entities/product';
import { MessageCard } from 'src/entities/message';
import { BackButton } from 'src/features/multi-step-form';

import {
    cardActions,
    cardInfo,
    conditionsMatcher,
    limitsMatcher
} from '../model';

import { Segment } from './segment';
import { InfoLinkCard } from './info-link-card';

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
                <>
                    <UniversalCardCard card={card}>
                        {'status' in card && (
                            <ProductStatuses
                                isMaster={false}
                                status={card.status}
                            />
                        )}
                    </UniversalCardCard>
                    {'status' in card ? (
                        <>
                            <Segment title='Действия с картой'>
                                <Columns number='3'>
                                    {cardInfo.map(el => (
                                        <div key={el.id}>
                                            <InfoLinkCard info={el} />
                                        </div>
                                    ))}
                                </Columns>
                            </Segment>
                            <Segment title='Действия с картой'>
                                <Columns number='3'>
                                    {cardActions.map(el => (
                                        <div key={el.id}>
                                            <InfoLinkCard info={el} />
                                        </div>
                                    ))}
                                </Columns>
                            </Segment>
                        </>
                    ) : (
                        <>
                            <Segment title='Условия'>
                                <Columns number='3' rowGap='small'>
                                    {card.conditions.map(el => (
                                        <div key={el.key}>
                                            <Detail
                                                value={el.value + ' ₽'}
                                                description={
                                                    conditionsMatcher[
                                                        el.key as keyof typeof conditionsMatcher
                                                    ]
                                                }
                                            />
                                        </div>
                                    ))}
                                </Columns>
                            </Segment>
                            <Segment title='Лимиты'>
                                <Columns number='3' rowGap='small'>
                                    {card.limits.map(el => (
                                        <div key={el.key}>
                                            <Detail
                                                value={el.value + ' ₽'}
                                                description={
                                                    limitsMatcher[
                                                        el.key as keyof typeof limitsMatcher
                                                    ]
                                                }
                                            />
                                        </div>
                                    ))}
                                </Columns>
                            </Segment>
                        </>
                    )}
                </>
            ) : (
                <MessageCard title={CARDS_NOT_FOUND} buttonText={CREATE_CARD} />
            )}
        </div>
    );
};
