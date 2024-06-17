import { memo } from 'react';
import cn from 'classnames';

import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
    size?: 'xs' | 'xxs' | 's' | 'm' | 'l' | 'xl';
    weight?: 'light' | 'regular' | 'medium' | 'bold' | 'extra-bold';
    color?: 'action' | 'success' | 'error' | 'tertiary' | 'quadruple';
    align?: 'center' | 'left' | 'right';
    display?: 'flex';
    children: ReactNode;
}

export const Text = memo(
    ({
        tag,
        size = 's',
        weight = 'regular',
        align = 'left',
        color,
        children,
        display
    }: Props) => {
        const Element = tag || 'div';
        const textClass = cn('text', size, weight, align, display, {
            [`text-${color}`]: color
        });

        return <Element className={textClass}>{children}</Element>;
    }
);
