// import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

// import { SearchForm } from 'src/features/forms';
// import { SmallCardCard } from 'src/entities/cards';
// import { useGetAccountsQuery, useGetCustomerCardsQuery } from 'src/shared/api';
// import { Button, Columns, Preloader } from 'src/shared/ui';
// import {
//     ACCOUNTS,
//     CARDS,
//     PAYMENTS,
//     RouteName,
//     TRANSFERS
// } from 'src/shared/model';

// import { ProductStatuses } from 'src/entities/product';
// import { AccountCard } from 'src/entities/accounts';

// import { MainMenuBlock } from './block';
// import { MainMenuCard } from './card';

// import './styles.scss';

// export const MainMenu = () => {
//     const { t } = useTranslation();
//     const { data: cards, isLoading } = useGetCustomerCardsQuery();
//     const { data: accounts, isLoading: isLoadingAccounts } =
//         useGetAccountsQuery();

//     return isLoading || isLoadingAccounts ? (
//         <Preloader />
//     ) : (
//         <div className='main-menu'>
//             <div className='main-menu__first-col'>
//                 <MainMenuBlock
//                     title={t('Мои карты')}
//                     href={RouteName.MAIN_PAGE + '/' + CARDS}
//                 >
//                     {cards?.map(el => (
//                         <SmallCardCard key={el.number} card={el} />
//                     ))}
//                 </MainMenuBlock>
//                 <Link to={RouteName.MAIN_PAGE + '/' + CARDS}>
//                     <Button
//                         variant='secondary'
//                         size='medium'
//                         width='max'
//                         type='button'
//                     >
//                         {t('Новая карта')}
//                     </Button>
//                 </Link>
//             </div>
//             <div className='main-menu__second-col'>
//                 <SearchForm />
//                 <MainMenuBlock
//                     title={t('Переводы')}
//                     href={RouteName.MAIN_PAGE + '/' + TRANSFERS}
//                 >
//                     <Columns number='4'>
//                         <MainMenuCard
//                             icon='main-menu-translations'
//                             text={t('Между счетами')}
//                         />
//                         <MainMenuCard
//                             icon='main-menu-smartphone'
//                             text={t('По номеру телефона')}
//                         />
//                         <MainMenuCard
//                             icon='main-menu-card'
//                             text={t('По номеру карты')}
//                         />

//                         <MainMenuCard
//                             icon='main-menu-requisites'
//                             text={t('По реквизитам')}
//                         />
//                     </Columns>
//                 </MainMenuBlock>
//                 <MainMenuBlock
//                     title={t('Платежи')}
//                     href={RouteName.MAIN_PAGE + '/' + PAYMENTS}
//                 >
//                     <Columns number='4'>
//                         <MainMenuCard
//                             icon='main-menu-smartphone'
//                             text={t('Мобильная связь')}
//                         />
//                         <MainMenuCard
//                             icon='main-menu-wallet'
//                             text={t('Коммунальные платежи')}
//                         />
//                     </Columns>
//                 </MainMenuBlock>
//                 <MainMenuBlock
//                     title={t('Мои счета')}
//                     href={RouteName.MAIN_PAGE + '/' + ACCOUNTS}
//                 >
//                     <Columns number='2'>
//                         {accounts?.slice(0, 2).map(el => (
//                             <AccountCard key={el.number} account={el}>
//                                 <ProductStatuses
//                                     isMaster={el.isMaster}
//                                     status={el.status}
//                                     direction='column'
//                                 />
//                             </AccountCard>
//                         ))}
//                     </Columns>
//                 </MainMenuBlock>
//             </div>
//         </div>
//     );
// };
