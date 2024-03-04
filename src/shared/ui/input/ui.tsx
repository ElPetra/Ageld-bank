import { memo } from 'react';

import type { InputHTMLAttributes, ReactNode } from 'react';

import './styles.scss';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    type?:
        | 'search'
        | 'checkbox'
        | 'color'
        | 'date'
        | 'password'
        | 'email'
        | 'file'
        | 'hidden'
        | 'image'
        | 'month'
        | 'number'
        | 'text'
        | 'tel';
    label?: string;
    placeholder?: string;
    size?: 'small' | 'medium' | 'large';
    width?: 'auto' | 'max';
    error?: string;
    children?: ReactNode;
}

export const Input = memo(
    ({
        type,
        label,
        placeholder,
        size = 'medium',
        width = 'auto',
        children,
        error,
        ...props
    }: Props) => (
        <div className={`field ${error && 'error'} ${size} ${width}`}>
            {type != 'search' && size != 'medium' && label && (
                <div className='label'>{label}</div>
            )}
            <input
                type={type || 'text'}
                placeholder={placeholder || ''}
                className={`input ${type != 'search' && size != 'medium' && label && 'with-label'} ${error && 'error'} `}
                {...props}
            />
            {children && <div className='input-icon'>{children}</div>}
            {error && <div className='error-text'>{error}</div>}
        </div>
    )
);
