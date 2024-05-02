import cn from 'classnames';

import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    children: ReactNode;
    color?: 'primary' | 'quadruple';
    gap?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
    borderRadius?: 'small' | 'medium' | 'large' | 'extra-large';
    padding?: 'small' | 'small-medium' | 'medium' | 'large' | 'extra-large';
    direction?: 'column' | 'row';
    align?: 'center' | 'left' | 'right';
    status?: 'active' | '';
}

export const Card = ({
    children,
    color = 'primary',
    gap = 'small',
    borderRadius = 'medium',
    padding = 'small',
    direction,
    align,
    status
}: Props) => {
    const cardClass = cn('card', color, direction, status, align, {
        [`${borderRadius}-border-radius`]: true,
        [`${padding}-padding`]: true,
        [`${gap}-gap`]: true
    });
    return <div className={cardClass}>{children}</div>;
};
