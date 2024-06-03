import { useTranslation } from 'react-i18next';

import { Link } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';

import './styles.scss';

export const Menu = () => {
    const { t } = useTranslation();
    return (
        <nav className='footer__menu'>
            <Link to={RouteName.ATMS_AND_BRANCHES}>
                {t('Банкоматы и отделения')}
            </Link>
            <Link to={RouteName.MAIN_PAGE}>{t('Курсы валют')}</Link>
            <Link to={RouteName.CONTACTS_PAGE}>{t('Контакты')}</Link>
            <Link to={RouteName.MAIN_PAGE}>{t('Список услуг')}</Link>
            <Link to={RouteName.MAIN_PAGE}>{t('Документы')}</Link>
            <Link to={RouteName.MAIN_PAGE}>{t('Вопросы и ответы')}</Link>
        </nav>
    );
};
