import { memo } from 'react';

import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
    size?: 'xs' | 'xxs' | 's' | 'm' | 'l' | 'xl';
    weight?: 'light' | 'regular' | 'medium' | 'bold' | 'extra-bold';
    color?:
        | 'inherit'
        | 'success'
        | 'error'
        | 'quadruple'
        | 'action'
        | 'blue'
        | 'grey'
        | 'white';
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
        color = 'inherit',
        children,
        display
    }: Props) => {
        const Element = tag || 'div';
        return (
            <Element
                className={`text text-${color} ${size} ${weight} ${align} ${display}`}
            >
                {children}
            </Element>
        );
    }
);
