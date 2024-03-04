import type { ReactNode } from 'react';
import { memo } from 'react';

import type { NavLinkProps } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './styles.scss';

interface Props extends NavLinkProps {
    variant?: 'action';
    children: ReactNode;
}

export const Link = memo(({ variant, children, ...props }: Props) => {
    return (
        <NavLink className={`${variant}`} {...props}>
            {children}
        </NavLink>
    );
});
