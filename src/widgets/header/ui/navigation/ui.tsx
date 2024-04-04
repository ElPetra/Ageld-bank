import { Link } from 'src/shared/ui';
import { useAuth } from 'src/shared/hooks/useAuth';
import { Logout } from 'src/features/logout';
import { RouteName } from 'src/shared/model';

import './styles.scss';

export const Navigation = () => {
    const { isAuth } = useAuth();
    return (
        <nav className='navigation'>
            <ul className='navigation-default'>
                <Link to={RouteName.MAIN_PAGE}>Банкоматы и отеделения</Link>
                <Link to={RouteName.MAIN_PAGE}>Курсы валют</Link>
                <Link to={RouteName.MAIN_PAGE}>Контакты</Link>
                <Link to={RouteName.MAIN_PAGE}>Список услуг</Link>
                <Link to={RouteName.MAIN_PAGE}>Документы</Link>
                <Link to={RouteName.MAIN_PAGE}>Вопросы и ответы</Link>
            </ul>
            <ul className='navigation-additional'>
                {isAuth ? (
                    <>
                        <Link to={RouteName.PERSONAL_PAGE}>Личные данные</Link>
                        <Logout />
                    </>
                ) : (
                    <>
                        <Link to={RouteName.LOGIN_PAGE}>Войти</Link>
                        <Link to={RouteName.REGISTRATION_PAGE}>
                            Регистрация
                        </Link>
                    </>
                )}
            </ul>
        </nav>
    );
};
