import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    children: ReactNode;
    gap?: 'small-gap' | 'medium-gap' | 'large-gap';
    direction?: 'column' | 'row';
    status?: 'active' | '';
}

export const Card = ({
    children,
    gap = 'medium-gap',
    direction = 'column',
    status
}: Props) => (
    <div className={`card ${gap} ${direction} ${status}`}>{children}</div>
);
