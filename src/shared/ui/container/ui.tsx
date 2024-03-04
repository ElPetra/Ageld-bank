import { memo } from 'react';

import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    variant?: 'primary' | 'secondary' | 'tertiary';
    children?: ReactNode;
}

export const Container = memo(({ variant = 'primary', children }: Props) => (
    <div className={`container-background ${variant}`}>
        <div className='container'>{children}</div>
    </div>
));
