import { useTranslation } from 'react-i18next';

import { Link } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';

import './styles.scss';

export const Menu = () => {
    const { t } = useTranslation();
    return (
        <nav className='footer__menu'>
            <Link
                to={RouteName.ATMS_AND_BRANCHES}
                id='menu-link-atms-and-branches'
            >
                {t('Банкоматы и отделения')}
            </Link>
            <Link to={RouteName.MAIN_PAGE} id='menu-link-currency-rates'>
                {t('Курсы валют')}
            </Link>
            <Link to={RouteName.CONTACTS_PAGE} id='menu-link-contacts'>
                {t('Контакты')}
            </Link>
            <Link to={RouteName.MAIN_PAGE} id='menu-link-service-list'>
                {t('Список услуг')}
            </Link>
            <Link to={RouteName.MAIN_PAGE} id='menu-link-documents'>
                {t('Документы')}
            </Link>
            <Link to={RouteName.QAA_PAGE} id='menu-link-qaa'>
                {t('Вопросы и ответы')}
            </Link>
        </nav>
    );
};
