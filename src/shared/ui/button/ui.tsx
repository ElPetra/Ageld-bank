import { memo } from 'react';

import cn from 'classnames';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

import './styles.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: 'submit' | 'reset' | 'button';
    size?: 'medium' | 'large';
    variant?: 'primary' | 'secondary' | 'link';
    width?: 'auto' | 'max';
    disabled?: boolean;
    children: ReactNode;
}

export const Button = memo(
    ({
        type,
        size = 'medium',
        disabled = false,
        variant = 'primary',
        width = 'auto',
        children,
        ...props
    }: Props) => {
        const buttonClass = cn(size, width, {
            button: variant !== 'link',
            [variant]: !disabled
        });
        return (
            <button
                type={type || 'button'}
                disabled={disabled}
                className={buttonClass}
                {...props}
            >
                {children}
            </button>
        );
    }
);
