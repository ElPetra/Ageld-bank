import { useTranslation } from 'react-i18next';

import { Button, Card, Icon, Image, Link, Text } from 'src/shared/ui';
import { CARD_NUMBER_REPLACEMENT, RouteName, typeCard } from 'src/shared/model';
import { formatExpirationDate, getIconName } from 'src/shared/lib';

import {
    isCardDetails,
    isCardProduct,
    isCardProductDetails,
    isCustomerCard
} from '../lib';

import { LinkCard } from './link-card';
import { Detail } from './detail';

import type { ReactNode } from 'react';
import type {
    CardDetails,
    CardProduct,
    CardProductDetails,
    CustomerCard
} from 'src/shared/model';

import './styles.scss';

interface Props {
    card: CustomerCard | CardProduct | CardDetails | CardProductDetails;
    children?: ReactNode;
}

function getFirstUpperCase(str: string): string {
    return str && str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export const UniversalCardCard = ({ card, children }: Props) => {
    const { t } = useTranslation();
    const cardRoute =
        'status' in card ? RouteName.CARD_PAGE : RouteName.CARD_PRODUCT_PAGE;
    const link =
        isCustomerCard(card) || isCardProduct(card)
            ? cardRoute + '/' + card.id
            : '';

    const handleCopyCard = () =>
        isCardDetails(card) && navigator.clipboard.writeText(card.number);

    return (
        <Card padding='large'>
            <div className='universal-card-card'>
                <div className='universal-card-card__image'>
                    <LinkCard link={link}>
                        <Image src={card.image} />
                    </LinkCard>
                </div>
                <div className='universal-card-card__second'>
                    <div className='universal-card-card__second__info'>
                        <div className='universal-card-card__second__info__text'>
                            <div className='universal-card-card__second__info__text__name'>
                                <LinkCard link={link}>
                                    <Text size='l' weight='bold'>
                                        {`A-Geld ${card.name}`}
                                    </Text>
                                </LinkCard>
                                {children
                                    ? children
                                    : 'paymentSystem' in card && (
                                          <div className='universal-card-card__second__info__text__name__icon'>
                                              <Icon
                                                  icon={getIconName(
                                                      card.paymentSystem
                                                  )}
                                                  width={60}
                                                  height={30}
                                              />
                                          </div>
                                      )}
                            </div>
                            {isCardDetails(card) ? (
                                <Text size='l' weight='bold'>
                                    {card.balance + ' ₽'}
                                </Text>
                            ) : (
                                <Text color='tertiary'>
                                    {isCustomerCard(card)
                                        ? card.number.replace(
                                              /.{12}/gm,
                                              CARD_NUMBER_REPLACEMENT
                                          )
                                        : t(typeCard[card.type]) +
                                          ' ' +
                                          t('карта') +
                                          '. ' +
                                          t('Надежная карта на каждый день')}
                                </Text>
                            )}
                        </div>
                        <div className='universal-card-card__second__info__details'>
                            {isCardProduct(card) && (
                                <>
                                    <Detail
                                        value={getFirstUpperCase(card.level)}
                                        description={t('Уровень премиальность')}
                                    />
                                    <Detail
                                        value={card.currency.toUpperCase()}
                                        description={t('Валюта счета')}
                                    />
                                </>
                            )}
                            {isCardProductDetails(card) && (
                                <>
                                    <Detail
                                        value={
                                            card.isVirtual ? t('Да') : t('Нет')
                                        }
                                        description={t('Виртуальная')}
                                    />
                                    <Detail
                                        value={card.currency.toUpperCase()}
                                        description={t('Валюта счета')}
                                    />
                                    <Detail
                                        value={
                                            card.cardFee +
                                            ' ' +
                                            card.currency.toUpperCase()
                                        }
                                        description={t('Плата за выпуск')}
                                    />
                                    <Detail
                                        value={
                                            card.serviceFee +
                                            ' ' +
                                            card.currency.toUpperCase()
                                        }
                                        description={t(
                                            'Плата за использование'
                                        )}
                                    />
                                    <Detail
                                        value={getFirstUpperCase(card.level)}
                                        description={t('Уровень премиальность')}
                                    />
                                </>
                            )}
                            {isCustomerCard(card) && (
                                <>
                                    <Detail
                                        value={formatExpirationDate(
                                            card.expires
                                        )}
                                        description={t('Срок действия')}
                                    />
                                    <Detail
                                        value={
                                            card.balance.toLocaleString() +
                                            ' ' +
                                            card.currency.toUpperCase()
                                        }
                                        description={t('Баланс')}
                                    />
                                    <Detail
                                        value={card.currency.toUpperCase()}
                                        description={t('Валюта счета')}
                                    />
                                </>
                            )}
                            {isCardDetails(card) && (
                                <>
                                    <div className='universal-card-card__second__info__details__copy'>
                                        <Detail
                                            value={card.number.replace(
                                                /.{12}/gm,
                                                CARD_NUMBER_REPLACEMENT
                                            )}
                                            description={t('Номер карты')}
                                        />
                                        <button onClick={handleCopyCard}>
                                            <Icon icon='copy' />
                                        </button>
                                    </div>
                                    <Detail
                                        value={formatExpirationDate(
                                            card.expires
                                        )}
                                        description={t('Срок действия')}
                                    />
                                    <Detail
                                        value={card.currency.toUpperCase()}
                                        description={t('Валюта счета')}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                    <div className='universal-card-card__second__button'>
                        {isCustomerCard(card) ? (
                            <Link to={link}>
                                <Button variant='secondary'>
                                    {t('Информация по карте')}
                                </Button>
                            </Link>
                        ) : (
                            <Button variant='secondary'>
                                {isCardDetails(card)
                                    ? t('Перевести')
                                    : t('Оформить карту')}
                            </Button>
                        )}
                        {isCardProduct(card) && (
                            <Link to={link}>
                                <Button>{t('Показать больше')}</Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </Card>
    );
};
