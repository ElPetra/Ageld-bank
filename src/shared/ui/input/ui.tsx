import { memo } from 'react';

import type { InputHTMLAttributes, ReactNode, RefObject } from 'react';

import type { FieldValues, UseFormRegister } from 'react-hook-form';

import './styles.scss';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    placeholder?: string;
    size?: 'small' | 'medium' | 'large';
    width?: 'auto' | 'max';
    variant?: 'primary' | 'secondary'
    isError?: boolean;
    error?: string;
    label?: string;
    register?: UseFormRegister<FieldValues>;
    reference?: RefObject<HTMLInputElement>;
    children?: ReactNode;
}

export const Input = memo(
    ({
        type,
        placeholder,
        value,
        reference,
         variant = 'primary',
        size = 'medium',
        width = 'auto',
        children,
        error,
        isError,
        pattern = '',
        minLength,
        label = 'label',
        register,
        onBlur,
        onChange,
        ...props
    }: Props) => {
        return (
            <div className={`field ${(error || isError) && 'error'} ${size} ${width}`}>
                <div
                    className={`input ${(error || isError) && 'error'}  ${size} ${width} ${variant}`}
                    ref={reference}
                >
                    {type != 'search' && size != 'medium' && value && (
                        <div className='label'>{placeholder}</div>
                    )}
                    <input
                        {...(register
                            ? register(label, {
                                  pattern: new RegExp(pattern),
                                  minLength,
                                  required: true,
                                  onChange,
                                  onBlur
                              })
                            : null)}
                        type={type || 'text'}
                        placeholder={placeholder || ''}
                        className={`${type != 'search' && size != 'medium' && value && 'with-label'} ${error && 'error'}`}
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
