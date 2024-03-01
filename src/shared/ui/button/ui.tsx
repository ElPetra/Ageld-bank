<<<<<<< HEAD
import React, { memo, ReactNode } from 'react';

interface Props {
    type: 'button' | 'submit';
    size?: 'm';
    theme?: 'primary';
    disabled?: boolean;
    width?: 'auto' | 'max';
    children: ReactNode;
}

export const Button = memo(
    ({
        type = 'button',
        size = 'm',
        theme = 'primary',
        disabled = false,
        width = 'auto',
        children
    }: Props) => (
        <button type={type} disabled={disabled}>
            {children}
        </button>
    )
);
=======
import React, { ButtonHTMLAttributes, memo, ReactNode } from 'react';

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

export const Button = memo(({
                                type,
                                size = 'medium',
                                disabled = false,
                                variant = 'primary',
                                width = 'auto',
                                status,
                                children,
                                ...props
                            }: Props) =>
    <button type={type || 'button'} disabled={disabled}
            className={`button ${size} ${!disabled && variant} ${width} ${status}`} {...props}>
        {children}
    </button>
);

>>>>>>> 0d72c9fd3ea571c697e84973738ca8ab1422040f
