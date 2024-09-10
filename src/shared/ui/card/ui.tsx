import cn from 'classnames';

import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    children: ReactNode;
    color?: 'primary' | 'secondary' | 'tertiary';
    gap?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
    borderRadius?: 'small' | 'medium' | 'large' | 'extra-large';
    padding?: 'small' | 'small-medium' | 'medium' | 'large' | 'extra-large';
    direction?: 'column' | 'row';
    align?: 'center' | 'left' | 'right';
    justify?: 'space-between';
}

export const Card = ({
    children,
    color = 'primary',
    gap = 'small',
    borderRadius = 'medium',
    padding = 'small',
    direction,
    align,
    justify
}: Props) => {
    const cardClass = cn(
        'card',
        color,
        direction,
        align,
        justify,
        `${borderRadius}-border-radius`,
        `${padding}-padding`,
        `${gap}-gap`
    );
    return <div className={cardClass}>{children}</div>;
};
