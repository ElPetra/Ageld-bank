import { useTranslation } from 'react-i18next';

import { AuthStatus, RouteName } from 'src/shared/model';
import { Link } from 'src/shared/ui';
import { useAuth } from 'src/entities/user';
import { Logout } from 'src/features/logout';

import type { Dispatch, SetStateAction } from 'react';

import './styles.scss';

interface Props {
    direction?: 'column' | 'row';
    setVisible?: Dispatch<SetStateAction<boolean>>;
}

export const Navigation = ({ direction = 'row', setVisible }: Props) => {
    const { authStatus } = useAuth();
    const { t } = useTranslation();
    return (
        <nav className={`navigation ${direction}`}>
            <ul
                className='navigation__default'
                onClick={() => setVisible && setVisible(false)}
            >
                <Link to={RouteName.ATMS_AND_BRANCHES}>
                    {t('Банкоматы и отделения')}
                </Link>
                <Link to={RouteName.MAIN_PAGE}>{t('Курсы валют')}</Link>
                <Link to={RouteName.CONTACTS_PAGE}>{t('Контакты')}</Link>
                <Link to={RouteName.MAIN_PAGE}>{t('Список услуг')}</Link>
                <Link to={RouteName.MAIN_PAGE}>{t('Документы')}</Link>
                <Link to={RouteName.MAIN_PAGE}>{t('Вопросы и ответы')}</Link>
            </ul>
            <ul className='navigation__additional'>
                {authStatus === AuthStatus.SignedIn ? (
                    <>
                        <Link to={RouteName.PERSONAL_PAGE}>
                            {t('Личные данные')}
                        </Link>
                        <Logout />
                    </>
                ) : (
                    <>
                        <Link to={RouteName.LOGIN_PAGE}>{t('Войти')}</Link>
                        <Link to={RouteName.REGISTRATION_PAGE}>
                            {t('Регистрация')}
                        </Link>
                    </>
                )}
            </ul>
        </nav>
    );
};
