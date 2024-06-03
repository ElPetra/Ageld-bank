import { useTranslation } from 'react-i18next';

import { Columns, Preloader } from 'src/shared/ui';
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
    const { t } = useTranslation();
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
                            <Segment title={t('Информация по карте')}>
                                <Columns number='3'>
                                    {cardInfo.map(el => (
                                        <div key={el.id}>
                                            <InfoLinkCard info={el} />
                                        </div>
                                    ))}
                                </Columns>
                            </Segment>
                            <Segment title={t('Действия с картой')}>
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
                            <Segment title={t('Условия')}>
                                <Columns number='3' rowGap='small'>
                                    {card.conditions.map(el => (
                                        <div key={el.key}>
                                            <Detail
                                                value={el.value + ' ₽'}
                                                description={t(
                                                    conditionsMatcher[
                                                        el.key as keyof typeof conditionsMatcher
                                                    ]
                                                )}
                                            />
                                        </div>
                                    ))}
                                </Columns>
                            </Segment>
                            <Segment title={t('Лимиты')}>
                                <Columns number='3' rowGap='small'>
                                    {card.limits.map(el => (
                                        <div key={el.key}>
                                            <Detail
                                                value={el.value + ' ₽'}
                                                description={t(
                                                    limitsMatcher[
                                                        el.key as keyof typeof limitsMatcher
                                                    ]
                                                )}
                                            />
                                        </div>
                                    ))}
                                </Columns>
                            </Segment>
                        </>
                    )}
                </>
            ) : (
                <MessageCard
                    title={t(
                        'На данный момент \n у Вас нет соответствующих карт'
                    )}
                    buttonText={t('Создать карту')}
                />
            )}
        </div>
    );
};
