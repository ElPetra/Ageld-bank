import { Link } from 'src/shared/ui';
import { useAuth } from 'src/entities/user';
import { Logout } from 'src/features/logout';
import { AuthStatus, RouteName } from 'src/shared/model';

import type { Dispatch, SetStateAction } from 'react';

import './styles.scss';
import { useTranslation } from 'react-i18next';

interface Props {
    direction?: 'column' | 'row';
    setVisible?: Dispatch<SetStateAction<boolean>>;
}

export const Navigation = ({ direction = 'row', setVisible }: Props) => {
    const { authStatus } = useAuth();
    const { t, i18n } = useTranslation();
    return (
        <nav className={`navigation ${direction}`}>
            <ul
                className='navigation__default'
                onClick={() => setVisible && setVisible(false)}
            >
                <Link to={RouteName.ATMS_AND_BRANCHES}>
                    {t('Банкоматы и отделения')}
                </Link>
                <Link to={RouteName.MAIN_PAGE}>Курсы валют</Link>
                <Link to={RouteName.CONTACTS_PAGE}>Контакты</Link>
                <Link to={RouteName.MAIN_PAGE}>Список услуг</Link>
                <Link to={RouteName.MAIN_PAGE}>Документы</Link>
                <Link to={RouteName.MAIN_PAGE}>Вопросы и ответы</Link>
            </ul>
            <ul className='navigation__additional'>
                {authStatus === AuthStatus.SignedIn ? (
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
