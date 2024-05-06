import cn from 'classnames';

import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    children: ReactNode;
    number?: '2' | '3' | '4';
    align?: 'center' | 'left' | 'right';
}

export const Columns = ({ children, number = '3', align }: Props) => {
    const columnClass = cn('columns', align, {
        [`columns__${number}`]: true
    });
    return <div className={columnClass}>{children}</div>;
};
