import { memo } from 'react';
import cn from 'classnames';

import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
    size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';
    weight?: 'light' | 'regular' | 'medium' | 'bold' | 'extra-bold';
    color?: 'action' | 'success' | 'error' | 'tertiary' | 'quadruple';
    align?: 'center' | 'left' | 'right';
    lineHeight?: 'xs' | 's' | 'm' | 'l';
    display?: 'flex';
    children: ReactNode;
    className?: string;
}

export const Text = memo(
    ({
        tag,
        size = 's',
        weight = 'regular',
        align = 'left',
        color,
        lineHeight,
        children,
        display,
        className
    }: Props) => {
        const Element = tag || 'div';
        const textClass = cn(
            'text',
            size,
            weight,
            align,
            display,
            {
                [`text-${color}`]: color,
                [`line-height-${lineHeight}`]: lineHeight
            },
            className ? className : ''
        );

        return <Element className={textClass}>{children}</Element>;
    }
);
