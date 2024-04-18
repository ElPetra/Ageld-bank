import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    children: ReactNode;
    gap?: 'small-gap' | 'medium-gap' | 'large-gap';
    direction?: 'column' | 'row';
}

export const Card = ({
    children,
    gap = 'medium-gap',
    direction = 'column'
}: Props) => <div className={`card ${gap} ${direction}`}>{children}</div>;
