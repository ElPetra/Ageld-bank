import { memo, useState } from 'react';

import type { InputHTMLAttributes, ReactNode } from 'react';

import type { FieldValues, UseFormRegister } from 'react-hook-form';

import './styles.scss';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    placeholder?: string;
    size?: 'small' | 'medium' | 'large';
    width?: 'auto' | 'max';
    error?: string;
    label?: string;
    register?: UseFormRegister<FieldValues>;
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
        label = 'label',
        register,
        onChange,
        ...props
    }: Props) => {
        const [isFocus, setIsFocus] = useState<boolean>(false);

        const handleOnBlur = () => {
            setIsFocus(false);
        };
        const handleOnFocus = () => {
            setIsFocus(true);
        };

        return (
            <div className={`field ${error && 'error'} ${size}`}>
                <div
                    className={`input ${error && 'error'} ${isFocus && 'focus'} ${size} ${width}`}
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
                                  onBlur: handleOnBlur
                              })
                            : null)}
                        onFocus={handleOnFocus}
                        type={type || 'text'}
                        placeholder={placeholder || ''}
                        className={`${type != 'search' && size != 'medium' && value && 'with-label'} ${error && 'error'} ${type === 'tel' && 'phone-input'}`}
                        {...props}
                    />
                    {children && <div className='input-icon'>{children}</div>}
                </div>
                <span className={`field-border ${error && 'error'}`} />
                {error && size != 'small' && (
                    <div className='input-error'>{error}</div>
                )}
            </div>
        );
    }
);
