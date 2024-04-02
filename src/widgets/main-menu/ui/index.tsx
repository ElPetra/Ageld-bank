import { Link } from 'react-router-dom';

import { Button } from 'src/shared/ui';
import { ProductCard } from 'src/entities/products';
import { SearchForm } from 'src/features/forms';

import { CARDS, PAYMENTS, RouteName, TRANSFERS } from 'src/shared/model';

import { MainMenuBlock } from './block';
import { MainMenuCard } from './card';

import type { Product } from 'src/shared/model';

import './styles.scss';

const products: Product[] = [
    {
        balance: 30000,
        cardNumber: '1234********3456',
        expirationAt: '2026-02-19',
        nameProduct: 'Базовая',
        level: 'classic',
        paymentSystem: 'МИР',
        currencyName: 'rub'
    },
    {
        balance: 20000,
        cardNumber: '1234********0011',
        expirationAt: '2027-11-19',
        nameProduct: 'Базовая',
        level: 'classic-junior',
        paymentSystem: 'VISA',
        currencyName: 'eur'
    },
    {
        balance: 15000,
        cardNumber: '1234********3322',
        expirationAt: '2027-05-19',
        nameProduct: 'Кредитная',
        level: 'gold',
        paymentSystem: 'VISA',
        currencyName: 'usd'
    }
];

export const MainMenu = () => {
    return (
        <div className='main-menu'>
            <div className='main-menu__first-col'>
                <MainMenuBlock
                    title='Мои продукты'
                    href={RouteName.MAIN_PAGE_BASE + CARDS}
                >
                    {products.map(el => (
                        <ProductCard key={el.cardNumber} product={el} />
                    ))}
                </MainMenuBlock>
                <Link to={RouteName.MAIN_PAGE_BASE + CARDS}>
                    <Button
                        variant='secondary'
                        size='medium'
                        width='max'
                        type='button'
                    >
                        Новый продукт
                    </Button>
                </Link>
            </div>
            <div className='main-menu__second-col'>
                <SearchForm />
                <MainMenuBlock
                    title='Переводы'
                    href={RouteName.MAIN_PAGE_BASE + TRANSFERS}
                >
                    <div className='main-menu__4'>
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
                    </div>
                </MainMenuBlock>
                <MainMenuBlock
                    title='Платежи'
                    href={RouteName.MAIN_PAGE_BASE + PAYMENTS}
                >
                    <div className='main-menu__4'>
                        <MainMenuCard
                            icon='smartphone'
                            text='Мобильная связь'
                        />
                        <MainMenuCard
                            icon='wallet'
                            text='Коммунальные платежи'
                        />
                    </div>
                </MainMenuBlock>
                <MainMenuBlock title='Что-то'>
                    <div className='main-menu__2'>
                        <MainMenuCard icon='basket' text='Мобильная связь' />
                        <MainMenuCard
                            icon='basket'
                            text='Пополнить счет Ozon'
                        />
                    </div>
                </MainMenuBlock>
            </div>
        </div>
    );
};
