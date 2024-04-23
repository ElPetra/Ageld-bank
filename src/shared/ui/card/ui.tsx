import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    children: ReactNode;
    gap?: 'small' | 'medium' | 'large';
    direction?: 'column' | 'row';
    status?: 'active' | '';
}

export const Card = ({
    children,
    gap = 'medium',
    direction = 'column',
    status
}: Props) => (
    <div className={`card ${gap + '-gap'} ${direction} ${status}`}>
        {children}
    </div>
);
