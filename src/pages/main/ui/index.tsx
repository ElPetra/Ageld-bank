import { Container } from 'src/shared/ui';
import { AuthStatus, MainRouteName } from 'src/shared/model';
import { Menu } from 'src/features/menu';
import { MainMenu } from 'src/widgets/main-menu';
import { Accounts } from 'src/widgets/accounts';
import { Cards } from 'src/widgets/cards';
import { useAuth } from 'src/entities/user';
import { MessageCard } from 'src/entities/message';

export const MainPage = () => {
    const { authStatus } = useAuth();
    return (
        <Container>
            <Menu
                routes={MainRouteName}
                elements={[
                    {
                        id: 1,
                        name: 'Главная',
                        component:
                            authStatus === AuthStatus.SignedIn ? (
                                <MainMenu />
                            ) : (
                                <MessageCard
                                    icon='paper-airplane-lady'
                                    width={400}
                                    title='Для просмотра данной информации вы должны быть авторизованы'
                                    buttonText='Войти в кабинет'
                                />
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
                        component: <Accounts />
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
                        component: <div>Депозиты</div>
                    }
                ]}
            />
        </Container>
    );
};
