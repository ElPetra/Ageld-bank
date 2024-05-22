import { Link } from 'src/shared/ui';

import { links } from './config';

import './styles.scss';
import { useTranslation } from 'react-i18next';

export const Menu = () => {
    const { t, i18n } = useTranslation();
    return (
        <nav className='footer__menu'>
            {links.map(el => (
                <Link key={el.text} to={el.href}>
                    {t(el.text)}
                </Link>
            ))}
        </nav>
    );
};
