import { MainRouteName } from 'src/shared/model';
import { Menu } from 'src/features/menu';
import { MainMenu } from 'src/widgets/main-menu';
import { Accounts } from 'src/widgets/accounts';

export const MainPage = () => {
    return (
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
                    component: <div>Карты</div>
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
    );
};
