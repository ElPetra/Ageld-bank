import cn from 'classnames';

import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    children: ReactNode;
    rowGap?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
    number?: '2' | '3' | '4';
    align?: 'center' | 'left' | 'right';
}

export const Columns = ({ children, number = '3', align, rowGap }: Props) => {
    const columnClass = cn('columns', align, {
        [`columns__${number}`]: true,
        [`${rowGap}-row-gap`]: !!rowGap
    });
    return <div className={columnClass}>{children}</div>;
};
