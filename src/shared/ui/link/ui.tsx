import { memo } from 'react';
import cn from 'classnames';

import { NavLink } from 'react-router-dom';

import type { ReactNode } from 'react';
import type { NavLinkProps } from 'react-router-dom';

import './styles.scss';

interface Props extends NavLinkProps {
    variant?: 'action' | 'underline';
    children: ReactNode;
}

export const Link = memo(({ variant, children, ...props }: Props) => {
    const navLinkClass = cn(variant);
    return (
        <NavLink className={navLinkClass} {...props}>
            {children}
        </NavLink>
    );
});
