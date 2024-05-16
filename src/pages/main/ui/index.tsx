import { Container } from 'src/shared/ui';
import { MainRouteName } from 'src/shared/model';
import { Menu } from 'src/features/menu';
import { MainMenu } from 'src/widgets/main-menu';
import { Accounts } from 'src/widgets/accounts';
import { Cards } from 'src/widgets/cards';
import { Deposits } from 'src/pages/deposits';

import { ProtectedMain } from './protected';

export const MainPage = () => {
    return (
        <Container>
            <Menu
                routes={MainRouteName}
                elements={[
                    {
                        id: 1,
                        name: 'Главная',
                        component: (
                            <ProtectedMain>
                                <MainMenu />
                            </ProtectedMain>
                        )
                    },
                    {
                        id: 2,
                        name: 'Карты',
                        component: <Cards />
                    },
                    {
                        id: 3,
                        name: 'Счета',
                        component: (
                            <ProtectedMain>
                                <Accounts />
                            </ProtectedMain>
                        )
                    },
                    {
                        id: 4,
                        name: 'Переводы',
                        component: <div>Переводы</div>
                    },
                    {
                        id: 5,
                        name: 'Платежи',
                        component: <div>Платежи</div>
                    },
                    {
                        id: 6,
                        name: 'Кредиты',
                        component: <div>Кредиты</div>
                    },
                    {
                        id: 7,
                        name: 'Депозиты',
                        component: <Deposits />
                    }
                ]}
            />
        </Container>
    );
};
