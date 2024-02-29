import { memo, ReactNode } from 'react';

interface Props {
    type: 'button' | 'submit',
    size?: 'm',
    theme?: 'primary',
    disabled?: boolean,
    width?: 'auto' | 'max',
    children: ReactNode;
}

export const Button = memo(({
                                type = 'button',
                                size = 'm',
                                theme = 'primary',
                                disabled = false,
                                width = 'auto',
                                children
                            }: Props) =>
    <button type={type} disabled={!!disabled}>
        {children}
    </button>
);