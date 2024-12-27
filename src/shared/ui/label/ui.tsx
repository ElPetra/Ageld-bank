import { memo } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface IProps {
    info: string;
    mode: 'error' | 'warning' | 'success' | 'info' | 'disabled';
    className?: string;
}

export const Label = memo(({ info, mode, className }: IProps) => {
    const styleLabel = cn(
        styles.label,
        styles[mode],
        className ? className : ''
    );

    return <p className={styleLabel}>{info}</p>;
});
