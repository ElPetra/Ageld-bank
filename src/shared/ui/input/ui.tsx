import { memo } from 'react';
import cn from 'classnames';

import type { InputHTMLAttributes, RefObject } from 'react';

import type { FieldValues, UseFormRegister } from 'react-hook-form';

import './styles.scss';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    size?: 'small' | 'medium' | 'large';
    width?: 'auto' | 'max';
    isError?: boolean;
    error?: string;
    disabled?: boolean;
    field?: string;
    register?: UseFormRegister<FieldValues>;
    reference?: RefObject<HTMLInputElement>;
}

export const Input = memo(
    ({
        label,
        size = 'medium',
        width = 'auto',
        isError,
        error,
        type,
        value,
        pattern = '',
        minLength,
        disabled,
        field = 'field',
        register,
        onBlur,
        onChange,
        reference,
        children,
        ...props
    }: Props) => {
        const fieldClass = cn('field', size, width, {
            error: error || isError
        });
        const inputContainerClass = cn('input', size, width, {
            error: error || isError,
            disabled: disabled
        });
        const inputClass = cn({
            'with-label': size != 'medium' && value,
            error: error
        });
        return (
            <div className={fieldClass}>
                <div className={inputContainerClass} ref={reference}>
                    {size != 'medium' && value && (
                        <div className='label'>{label}</div>
                    )}
                    {register ? (
                        <input
                            {...register(field, {
                                pattern: new RegExp(pattern),
                                minLength,
                                required: true,
                                onChange,
                                onBlur
                            })}
                            type={type || 'text'}
                            placeholder={label || ''}
                            className={inputClass}
                            disabled={disabled}
                            {...props}
                        />
                    ) : (
                        <input
                            value={value}
                            pattern={pattern}
                            minLength={minLength}
                            onBlur={onBlur}
                            onChange={onChange}
                            type={type || 'text'}
                            placeholder={label || ''}
                            disabled={disabled}
                            className={inputClass}
                            {...props}
                        />
                    )}
                    {children && <div className='input-icon'>{children}</div>}
                </div>
                {error && size != 'small' && (
                    <div className='field__error'>{error}</div>
                )}
            </div>
        );
    }
);
