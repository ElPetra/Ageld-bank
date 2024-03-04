import './styles.scss';

import { memo } from 'react';

import { NavLink } from 'react-router-dom';

import type { ReactNode } from 'react';
import type { NavLinkProps } from 'react-router-dom';

interface Props extends NavLinkProps {
    size?: 'small' | 'medium';
    color?: 'none' | 'link';
    children: ReactNode;
}

export const Link = memo(
    ({ to, size = 'small', color = 'link', children, ...props }: Props) => {
        return (
            <NavLink to={to} className={`${color} ${size}`} {...props}>
                {children}
            </NavLink>
        );
    }
);
