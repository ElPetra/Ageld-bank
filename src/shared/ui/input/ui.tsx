import { memo } from 'react';

import type {
    ChangeEvent,
    ClipboardEvent,
    InputHTMLAttributes,
    ReactNode
} from 'react';

import type {
    FieldValues,
    UseFormClearErrors,
    UseFormRegister
} from 'react-hook-form';

import './styles.scss';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    placeholder?: string;
    name?: string;
    size?: 'small' | 'medium' | 'large';
    width?: 'auto' | 'max';
    error?: string;
    label: string;
    clearErrors: UseFormClearErrors<FieldValues>;
    register: UseFormRegister<FieldValues>;
    children?: ReactNode;
    onChange: (
        e: ChangeEvent<HTMLInputElement>
    ) => void | ((e: ClipboardEvent<HTMLInputElement>) => void);
}

export const Input = memo(
    ({
        type,
        clearErrors,
        placeholder,
        value,
        size = 'medium',
        width = 'auto',
        children,
        error,
        pattern = '',
        minLength,
        label,
        name,
        register,
        onChange,
        ...props
    }: Props) => {
        const handleChange = (
            e: ChangeEvent<HTMLInputElement> | ClipboardEvent<HTMLInputElement>
        ) => {
            if (error) {
                clearErrors();
            }
            if ((e.target as HTMLInputElement).name === 'phone') {
                (e.target as HTMLInputElement).value = (
                    e.target as HTMLInputElement
                ).value.replace(/\D/gm, '');
            }
            if (onChange) {
                onChange(e as ChangeEvent<HTMLInputElement>); //Todo: возможно этот участок кода пахнет. Пока не знаю, как типизировать корректно.
            }
        };

        return (
            <div className={`field ${error && 'error'} ${size} ${width}`}>
                {type != 'search' && size != 'medium' && value && (
                    <div className='label'>{placeholder}</div>
                )}
                <input
                    {...register(label, {
                        pattern: new RegExp(pattern),
                        minLength,
                        required: true,
                        onChange: handleChange
                    })}
                    onPaste={handleChange}
                    name={name}
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
