import { Link } from 'src/shared/ui';

import { links } from './config';

import './styles.scss';

export const Navigation = () => (
    <nav className='navigation'>
        {links.map(el => (
            <Link key={el.text} to={el.href}>
                {el.text}
            </Link>
        ))}
    </nav>
);
