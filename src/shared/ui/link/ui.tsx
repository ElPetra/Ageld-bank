import { memo } from 'react';
import cn from 'classnames';

import { Link as Link1 } from 'react-router-dom';

import type { ReactNode } from 'react';
import type { LinkProps } from 'react-router-dom';

import './styles.scss';

interface Props extends LinkProps {
    variant?: 'quadruple' | 'action' | 'underline';
    children: ReactNode;
}

export const Link = memo(({ variant, children, ...props }: Props) => {
    const navLinkClass = cn(variant);
    return (
        <Link1 className={navLinkClass} {...props}>
            {children}
        </Link1>
    );
});
