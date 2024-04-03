import { Link } from 'src/shared/ui';
import { useAuth } from 'src/shared/hooks/useAuth';
import { Logout } from 'src/features/logout';

import { links, privateLinks, publicLinks } from './config';

import './styles.scss';

export const Navigation = () => {
    const { isAuth } = useAuth();
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
                {isAuth ? (
                    <>
                        {privateLinks.map(el => (
                            <Link key={el.text} to={el.href}>
                                {el.text}
                            </Link>
                        ))}
                        <Logout />
                    </>
                ) : (
                    <>
                        {publicLinks.map(el => (
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
