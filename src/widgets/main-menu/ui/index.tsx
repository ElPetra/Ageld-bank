import { Link } from 'react-router-dom';

import { SearchForm } from 'src/features/forms';
import { AccountCard } from 'src/entities/accounts';
import { SmallCardCard } from 'src/entities/cards';
import {
    useGetAccountsQuery,
    useGetCustomerCardsByTypeQuery
} from 'src/shared/api';
import { Button, Columns, Preloader } from 'src/shared/ui';
import {
    ACCOUNTS,
    CARDS,
    PAYMENTS,
    RouteName,
    TRANSFERS
} from 'src/shared/model';

import { MainMenuBlock } from './block';
import { MainMenuCard } from './card';

import './styles.scss';

export const MainMenu = () => {
    const { data: cards, isLoading } = useGetCustomerCardsByTypeQuery({
        type: 'ACTIVE'
    });

    const { data: accounts, isLoading: isLoadingAccounts } =
        useGetAccountsQuery();

    return isLoading || isLoadingAccounts ? (
        <Preloader />
    ) : (
        <div className='main-menu'>
            <div className='main-menu__first-col'>
                <MainMenuBlock
                    title='Мои карты'
                    href={RouteName.MAIN_PAGE + '/' + CARDS}
                >
                    {cards?.map(el => (
                        <SmallCardCard key={el.number} card={el} />
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
                            icon='translations-icon'
                            text='Между счетами'
                        />
                        <MainMenuCard
                            icon='smartphone-icon'
                            text='По номеру телефона'
                        />
                        <MainMenuCard icon='card-icon' text='По номеру карты' />

                        <MainMenuCard
                            icon='requisites-icon'
                            text='По реквизитам'
                        />
                    </Columns>
                </MainMenuBlock>
                <MainMenuBlock
                    title='Платежи'
                    href={RouteName.MAIN_PAGE + '/' + PAYMENTS}
                >
                    <Columns number='4'>
                        <MainMenuCard
                            icon='smartphone-icon'
                            text='Мобильная связь'
                        />
                        <MainMenuCard
                            icon='wallet-icon'
                            text='Коммунальные платежи'
                        />
                    </Columns>
                </MainMenuBlock>
                <MainMenuBlock
                    title='Мои счета'
                    href={RouteName.MAIN_PAGE + '/' + ACCOUNTS}
                >
                    <Columns number='2'>
                        {accounts?.slice(0, 2).map(el => (
                            <AccountCard key={el.number} account={el} />
                        ))}
                    </Columns>
                </MainMenuBlock>
            </div>
        </div>
    );
};
