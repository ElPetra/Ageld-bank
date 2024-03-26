import { memo } from 'react';

import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
    size?: 'xs' | 'xxs' | 's' | 'm' | 'l' | 'xl';
    weight?: 'regular' | 'medium' | 'bold' | 'extra-bold';
    color?: 'inherit' | 'success' | 'error';
    align?: 'center' | 'left' | 'right';
    children: ReactNode;
}

export const Text = memo(
    ({
        tag,
        size = 's',
        weight = 'regular',
        align = 'left',
        color = 'inherit',
        children
    }: Props) => {
        const Element = tag || 'div';
        return (
            <Element
                className={`text text-${color} ${size} ${weight} ${align}`}
            >
                {children}
            </Element>
        );
    }
);
