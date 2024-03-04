import type { InputHTMLAttributes, ReactNode } from 'react';
import { memo } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import './styles.scss';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    placeholder?: string;
    size?: 'small' | 'medium' | 'large';
    width?: 'auto' | 'max';
    error?: string;
    label: string;
    register: UseFormRegister<FieldValues>;
    children?: ReactNode;
}

export const Input = memo(
    ({
        type,
        placeholder,
        value,
        size = 'medium',
        width = 'auto',
        children,
        error,
        pattern = '',
        minLength,
        label,
        register,
        required,
        ...props
    }: Props) => {
        console.log(value);
        return (
            <div className={`field ${error && 'error'} ${size} ${width}`}>
                {type != 'search' && size != 'medium' && value && (
                    <div className='label'>{placeholder}</div>
                )}
                <input
                    {...register(label, {
                        pattern: new RegExp(pattern),
                        minLength
                    })}
                    type={type || 'text'}
                    placeholder={placeholder || ''}
                    className={`input ${type != 'search' && size != 'medium' && value && 'with-label'} ${error && 'error'} `}
                    {...props}
                />
                {children && <div className='input-icon'>{children}</div>}
                {error && <div className='error-text'>{error}</div>}
            </div>
        );
    }
);
