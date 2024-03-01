import { memo, ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

import './styles.scss';

interface Props extends NavLinkProps {
    to?: string;
    size?: 'small' | 'medium';
    children: ReactNode;
}

export const Link = memo(
    ({ to, size = 'small', children, ...props }: Props) => {
        return (
            <NavLink to={to || '/'} className={`link ${size}`} {...props}>
                {children}
            </NavLink>
        );
    }
);
