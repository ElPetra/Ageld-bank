import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

import './styles.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: 'submit' | 'reset' | 'button';
    disabled?: boolean;
    size?: 'medium' | 'large';
    variant?: 'primary' | 'secondary';
    width?: 'auto' | 'max';
    status?: 'active' | undefined;
    children: ReactNode;
}

export const Button = memo(
    ({
        type,
        size = 'medium',
        disabled = false,
        variant = 'primary',
        width = 'auto',
        status,
        children,
        ...props
    }: Props) => (
        <button
            type={type || 'button'}
            disabled={disabled}
            className={`button ${size} ${
                !disabled && variant
            } ${width} ${status}`}
            {...props}
        >
            {children}
        </button>
    )
);
