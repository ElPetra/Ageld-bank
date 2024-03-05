import { Link } from 'src/shared/ui';

import { links, privateLinks } from './config';

import './styles.scss';

export const Navigation = () => {
    const isAuth = false;
    // для будущего хука

    return (
        <nav className='navigation'>
            <ul className='navigation-default'>
                {links.map(el => (
                    <Link key={el.text} to={el.href}>
                        {el.text}
                    </Link>
                ))}
            </ul>
            <ul className='navigation-additional'>
                {isAuth && (
                    <>
                        {privateLinks.map(el => (
                            <Link key={el.text} to={el.href}>
                                {el.text}
                            </Link>
                        ))}
                    </>
                )}
            </ul>
        </nav>
    );
};
