import { SearchForm } from 'src/features/forms';
import { ProductCard } from 'src/entities/products';

import { Button } from 'src/shared/ui';

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
        paymentSystem: 'МИР',
        currencyName: 'rub'
    },
    {
        balance: 20000,
        cardNumber: '1234********0011',
        expirationAt: '2027-11-19',
        nameProduct: 'Базовая',
        paymentSystem: 'VISA',
        currencyName: 'eur'
    }
];

export const MainMenu = () => {
    return (
        <div className='main-menu'>
            <div className='main-menu__first-col'>
                <MainMenuBlock title='Мои продукты'>
                    {products.map(el => (
                        <ProductCard key={el.cardNumber} product={el} />
                    ))}
                </MainMenuBlock>
                <Button
                    variant='secondary'
                    size='medium'
                    width='max'
                    type='button'
                >
                    Новый счет или продукт
                </Button>
            </div>
            <div className='main-menu__second-col'>
                <SearchForm />
                <MainMenuBlock title='Избранное'>
                    <div className='main-menu__4'>
                        <MainMenuCard icon='basket' text='Пополнить счет' />
                        <MainMenuCard
                            icon='smartphone'
                            text='Перевести по телефону'
                        />
                        <MainMenuCard
                            icon='translations'
                            text='Перевод на карту'
                        />
                        <MainMenuCard
                            icon='wallet'
                            text='Коммунальные платежи'
                        />
                    </div>
                </MainMenuBlock>
                <MainMenuBlock title='Популярные операции'>
                    <div className='main-menu__4'>
                        <MainMenuCard
                            icon='requisites'
                            text='Пополнить счет Ozon'
                        />
                        <MainMenuCard
                            icon='basket'
                            text='Пополнить счет Ozon'
                        />
                        <MainMenuCard
                            icon='basket'
                            text='Пополнить счет Ozon'
                        />
                    </div>
                </MainMenuBlock>
                <MainMenuBlock title='Кэшбэк и бонусы'>
                    <div className='main-menu__2'>
                        <MainMenuCard
                            icon='basket'
                            text='Пополнить счет Ozon'
                        />
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
