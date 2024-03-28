import { Link } from 'src/shared/ui';
import { useAuth } from 'src/shared/hooks/useAuth';
import { useAppDispatch } from 'src/app/store/dispatch';
import { removeUser } from 'src/app/store/slices/userSlice';

import { links, privateLinks, publicLinks } from './config';

import './styles.scss';

export const Navigation = () => {
    const { isAuth } = useAuth();
    const dispatch = useAppDispatch();
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
                            <Link
                                key={el.text}
                                to={el.href}
                                onClick={() =>
                                    el.text === 'Выйти' &&
                                    dispatch(removeUser())
                                }
                            >
                                {el.text}
                            </Link>
                        ))}
                    </>
                )}
                {!isAuth && (
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
