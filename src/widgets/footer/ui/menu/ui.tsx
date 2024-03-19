import { Link } from 'src/shared/ui';

import { links } from './config';

import './styles.scss';

export const Menu = () => (
    <nav className='footer__menu'>
        {links.map(el => (
            <Link key={el.text} to={el.href}>
                {el.text}
            </Link>
        ))}
    </nav>
);
