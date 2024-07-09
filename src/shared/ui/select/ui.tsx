import { memo, useState } from 'react';
import cn from 'classnames';

import { Icon } from 'src/shared/ui';

import type { InputHTMLAttributes } from 'react';
import type { FieldValues, UseFormRegister } from 'react-hook-form';

import './styles.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    options: { value: string, label: string }[];
    variant?: 'primary' | 'secondary';
    label: string;
    width?: 'auto' | 'max';
    isError?: boolean;
    error?: string;
    field?: string;
    register?: UseFormRegister<FieldValues>;
}

export const Select = memo(
    ({
        options,
        variant = 'primary',
        label,
        value,
        width = 'auto',
        isError,
        error,
        field = 'field',
        register,
        onChange,
        ...props
    }: Props) => {
        const [open, setOpen] = useState<boolean>(false);
        const selectorButtonClass = cn('select__button', variant, {
            error: error || isError
        });
        return (
            <div className={cn('select', width)}>
                <button
                    type='button'
                    className={selectorButtonClass}
                    onClick={() => setOpen(!open)}
                >
                    <div className='select__button__content'>
                        <div
                            className={cn('select__button__content__label', {
                                selected: value
                            })}
                        >
                            {label}
                        </div>
                        {value && (
                            <div className='select__button__content__value'>
                                {value}
                            </div>
                        )}
                    </div>
                    <div className={cn('select__button__icon', { open: open })}>
                        <Icon width={24} icon='arrow-bottom-input' />
                    </div>
                </button>
                {open && (
                    <ul
                        className={cn('select__dropdown', variant)}
                        role='listbox'
                    >
                        {options.map(el => (
                            <li role='option' key={el.value}>
                                <input
                                    type='radio'
                                    {...(register &&
                                        field &&
                                        register(field, { onChange }))}
                                    id={el.value}
                                    value={el.value}
                                    onClick={() => setOpen(false)}
                                    {...props}
                                />
                                <label htmlFor={el.value}>{el.label}</label>
                            </li>
                        ))}
                    </ul>
                )}
                {error && <div className='select__error'>{error}</div>}
            </div>
        );
    }
);
