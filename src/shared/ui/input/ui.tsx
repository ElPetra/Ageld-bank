import { InputHTMLAttributes, memo, ReactNode } from 'react';

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
        | 'text';
    label?: string;
    placeholder?: string;
    size?: 'medium' | 'large';
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
        <div className={`field ${error && 'error'}`}>
            {type != 'search' && size != 'medium' && label && (
                <div className='label'>{label}</div>
            )}
            <input
                type={type || 'text'}
                placeholder={placeholder || ''}
                className={`input ${type != 'search' && size != 'medium' && label && 'with-label'} ${error && 'error'} ${size} ${width}`}
                {...props}
            >
                {children}
            </input>
            {error && <div>{error}</div>}
        </div>
    )
);
