import { memo, ReactNode } from 'react';

import './styles.scss';

interface Props {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
    size?: 's' | 'm' | 'l' | 'xl';
    weight?: 'regular' | 'medium' | 'bold';
    children: ReactNode;
}

export const Text = memo(({ tag, size = 's', weight = 'regular', children }: Props) => {
    const Element = tag || 'div';
    return (
        <Element className={`text ${size} ${weight}`}>
            {children}
        </Element>
    );
});

