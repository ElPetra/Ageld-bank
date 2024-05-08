import { Link } from 'react-router-dom';

import { SearchForm } from 'src/features/forms';
import { AccountCard } from 'src/entities/accounts';
import { CardCard } from 'src/entities/cards';
import { Button, Columns } from 'src/shared/ui';
import {
    ACCOUNTS,
    CARDS,
    PAYMENTS,
    RouteName,
    TRANSFERS
} from 'src/shared/model';

import { MainMenuBlock } from './block';
import { MainMenuCard } from './card';

import type { Card, Account } from 'src/shared/model';

import './styles.scss';

const cards: Card[] = [
    {
        balance: 30000,
        number: '1234********3456',
        expirationAt: '2026-02-19',
        name: 'Базовая',
        level: 'CLASSIC',
        paymentSystem: 'МИР',
        currency: 'rub'
    },
    {
        balance: 20000,
        number: '1234********0011',
        expirationAt: '2027-11-19',
        name: 'Базовая',
        level: 'PLATINUM',
        paymentSystem: 'VISA',
        currency: 'eur'
    },
    {
        balance: 15000,
        number: '1234********3322',
        expirationAt: '2027-05-19',
        name: 'Кредитная',
        level: 'GOLD',
        paymentSystem: 'VISA',
        currency: 'usd'
    }
];

export const accounts: Account[] = [
    {
        status: 'active',
        number: '3212131213211111',
        id: 'qwerty_1',
        balance: '550',
        currency: 'rub',
        type: 'credit',
        master: true,
        created: new Date(),
        contractNumber: '12312312132211212312'
    },
    {
        status: 'active',
        number: '321213121322211111',
        id: 'qwerty_4',
        balance: '10000',
        currency: 'usd',
        type: 'deposit',
        master: false,
        created: new Date(),
        contractNumber: '12312312132211212312'
    }
];

export const MainMenu = () => {
    return (
        <div className='main-menu'>
            <div className='main-menu__first-col'>
                <MainMenuBlock
                    title='Мои карты'
                    href={RouteName.MAIN_PAGE + '/' + CARDS}
                >
                    {cards.map(el => (
                        <CardCard key={el.number} card={el} />
                    ))}
                </MainMenuBlock>
                <Link to={RouteName.MAIN_PAGE + '/' + CARDS}>
                    <Button
                        variant='secondary'
                        size='medium'
                        width='max'
                        type='button'
                    >
                        Новая карта
                    </Button>
                </Link>
            </div>
            <div className='main-menu__second-col'>
                <SearchForm />
                <MainMenuBlock
                    title='Переводы'
                    href={RouteName.MAIN_PAGE + '/' + TRANSFERS}
                >
                    <Columns number='4'>
                        <MainMenuCard
                            icon='translations'
                            text='Между счетами'
                        />
                        <MainMenuCard
                            icon='smartphone'
                            text='По номеру телефона'
                        />
                        <MainMenuCard icon='card' text='По номеру карты' />

                        <MainMenuCard icon='requisites' text='По реквизитам' />
                    </Columns>
                </MainMenuBlock>
                <MainMenuBlock
                    title='Платежи'
                    href={RouteName.MAIN_PAGE + '/' + PAYMENTS}
                >
                    <Columns number='4'>
                        <MainMenuCard
                            icon='smartphone'
                            text='Мобильная связь'
                        />
                        <MainMenuCard
                            icon='wallet'
                            text='Коммунальные платежи'
                        />
                    </Columns>
                </MainMenuBlock>
                <MainMenuBlock
                    title='Мои счета'
                    href={RouteName.MAIN_PAGE + '/' + ACCOUNTS}
                >
                    <Columns number='2'>
                        {accounts.map(el => (
                            <AccountCard key={el.id} account={el} />
                        ))}
                    </Columns>
                </MainMenuBlock>
            </div>
        </div>
    );
};
