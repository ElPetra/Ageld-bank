import { useTranslation } from 'react-i18next';

import { MainRouteName } from 'src/shared/model';
import { Container } from 'src/shared/ui';
import { Menu } from 'src/features/menu';
import { MainMenu } from 'src/widgets/main-menu';
import { Accounts } from 'src/widgets/accounts';
import { Cards } from 'src/widgets/cards';
import { Deposits } from 'src/widgets/deposits';

import { ProtectedMain } from './protected';

export const MainPage = () => {
    const { t } = useTranslation();
    return (
        <Container>
            <Menu
                routes={MainRouteName}
                elements={[
                    {
                        id: 1,
                        name: t('Главная'),
                        component: (
                            <ProtectedMain>
                                <MainMenu />
                            </ProtectedMain>
                        )
                    },
                    {
                        id: 2,
                        name: t('Карты'),
                        component: <Cards />
                    },
                    {
                        id: 3,
                        name: t('Счета'),
                        component: (
                            <ProtectedMain>
                                <Accounts />
                            </ProtectedMain>
                        )
                    },
                    {
                        id: 4,
                        name: t('Переводы'),
                        component: <div>{t('Переводы')}</div>
                    },
                    {
                        id: 5,
                        name: t('Платежи'),
                        component: <div>{t('Платежи')}</div>
                    },
                    {
                        id: 6,
                        name: t('Кредиты'),
                        component: <div>{t('Кредиты')}</div>
                    },
                    {
                        id: 7,
                        name: t('Депозиты'),
                        component: <Deposits />
                    }
                ]}
            />
        </Container>
    );
};
