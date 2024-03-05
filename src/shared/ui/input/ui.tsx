import { memo } from 'react';

import type { InputHTMLAttributes, ReactNode } from 'react';

import type { FieldValues, UseFormRegister } from 'react-hook-form';

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
        onChange,
        ...props
    }: Props) => {
        return (
            <div className={`field ${error && 'error'} ${size}`}>
                <div className={`input ${error && 'error'} ${size} ${width}`}>
                    {type != 'search' && size != 'medium' && value && (
                        <div className='label'>{placeholder}</div>
                    )}
                    <input
                        {...register(label, {
                            pattern: new RegExp(pattern),
                            minLength,
                            required: true,
                            onChange
                        })}
                        type={type || 'text'}
                        placeholder={placeholder || ''}
                        className={`${type != 'search' && size != 'medium' && value && 'with-label'} ${error && 'error'} `}
                        {...props}
                    />
                    {children && <div className='input-icon'>{children}</div>}
                </div>
                {error && size != 'small' && (
                    <div className='input-error'>{error}</div>
                )}
            </div>
        );
    }
);
