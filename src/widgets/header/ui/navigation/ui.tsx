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
                <Link
                    to={RouteName.ATMS_AND_BRANCHES}
                    id='link-atms-and-branches'
                >
                    {t('Банкоматы и отделения')}
                </Link>
                <Link to={RouteName.MAIN_PAGE} id='link-currency-rates'>
                    {t('Курсы валют')}
                </Link>
                <Link to={RouteName.CONTACTS_PAGE} id='link-contacts'>
                    {t('Контакты')}
                </Link>
                <Link to={RouteName.MAIN_PAGE} id='link-service-list'>
                    {t('Список услуг')}
                </Link>
                <Link to={RouteName.MAIN_PAGE} id='link-documents'>
                    {t('Документы')}
                </Link>
                <Link to={RouteName.QAA_PAGE} id='link-qaa'>
                    {t('Вопросы и ответы')}
                </Link>
            </ul>
            <ul className='navigation__additional'>
                {authStatus === AuthStatus.SignedIn ? (
                    <>
                        <Link
                            to={RouteName.PERSONAL_PAGE}
                            id='link-personal-data'
                        >
                            {t('Личные данные')}
                        </Link>
                        <Logout />
                    </>
                ) : (
                    <>
                        <Link to={RouteName.LOGIN_PAGE} id='link-login'>
                            {t('Войти')}
                        </Link>
                        <Link
                            to={RouteName.REGISTRATION_PAGE}
                            id='link-registration'
                        >
                            {t('Регистрация')}
                        </Link>
                    </>
                )}
            </ul>
        </nav>
    );
};
