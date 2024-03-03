import './styles.scss';

import { memo } from 'react';

import { NavLink } from 'react-router-dom';

import type { ReactNode } from 'react';
import type { NavLinkProps } from 'react-router-dom';

interface Props extends NavLinkProps {
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
