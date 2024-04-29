import type { ReactNode } from 'react';

import './styles.scss';
import cn from 'classnames';

interface Props {
    children: ReactNode;
    color?: 'primary' | 'quadruple';
    gap?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
    borderRadius?: 'small' | 'medium' | 'large' | 'extra-large';
    direction?: 'column' | 'row';
    status?: 'active' | '';
}

export const Card = ({
    children,
    color = 'primary',
    gap = 'small',
    borderRadius = 'medium',
    direction = 'row',
    status
}: Props) => {
    const cardClass = cn('card', color, direction, status, {
        [`${borderRadius}-border-radius`]: true,
        [`${gap}-gap`]: true
    });
    return <div className={cardClass}>{children}</div>;
};
