import { Container } from 'src/shared/ui';
import { MainRouteName } from 'src/shared/model';
import { Menu } from 'src/features/menu';
import { Greeting } from 'src/widgets/greeting';
import { MainMenu } from 'src/widgets/main-menu';
import { Accounts } from 'src/widgets/accounts';
import { Cards } from 'src/widgets/cards';

export const MainPage = () => {
    return (
        <Container>
            <Menu
                routes={MainRouteName}
                elements={[
                    {
                        id: 1,
                        name: 'Главная',
                        component: <MainMenu />
                    },
                    {
                        id: 2,
                        name: 'Карты',
                        component: <Cards />
                    },
                    {
                        id: 3,
                        name: 'Счета',
                        component: <Accounts />
                    },
                    {
                        id: 4,
                        name: 'Переводы',
                        component: <Greeting />
                    },
                    {
                        id: 5,
                        name: 'Платежи',
                        component: <Greeting />
                    },
                    {
                        id: 6,
                        name: 'Кредиты',
                        component: <Greeting />
                    },
                    {
                        id: 7,
                        name: 'Депозиты',
                        component: <Greeting />
                    }
                ]}
            />
        </Container>
    );
};
