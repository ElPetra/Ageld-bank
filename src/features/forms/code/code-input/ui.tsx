import { Input, Text } from 'src/shared/ui';

import { Info } from './info';

import type { FieldValues, UseFormRegister } from 'react-hook-form';
import type { InputHTMLAttributes, ChangeEvent, KeyboardEvent } from 'react';

import './styles.scss';

const values = [0, 1, 2, 3, 4, 5];

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    width?: 'auto' | 'max';
    error?: string;
    label: string;
    register: UseFormRegister<FieldValues>;
    phone: string;
}

export const CodeInput = ({ label, error, phone, ...props }: Props) => {
    const inputOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        if (e.key !== 'Backspace' || target.value !== '') {
            return;
        }
        const previousElementSibling = target.parentElement?.parentElement
            ?.previousElementSibling?.firstElementChild
            ?.firstElementChild as HTMLInputElement | null;
        if (previousElementSibling) {
            previousElementSibling.focus();
        }
    };

    const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        if (!target.value) {
            return;
        }
        const nextElementSibling = target.parentElement?.parentElement
            ?.nextElementSibling?.firstElementChild
            ?.firstElementChild as HTMLInputElement | null;
        if (nextElementSibling) {
            nextElementSibling.focus();
        }
    };

    return (
        <div className='code-input'>
            <div className='code-input__inputs'>
                {values.map(el => (
                    <Input
                        key={el}
                        inputMode='numeric'
                        minLength={1}
                        maxLength={1}
                        autoComplete='one-time-code'
                        pattern='\d{1}'
                        size='small'
                        onKeyDown={inputOnKeyDown}
                        onChange={inputOnChange}
                        label={label + '.' + el}
                        error={error}
                        {...props}
                    ></Input>
                ))}
            </div>
            {error && (
                <div className='code-input__error'>
                    <Text size='xs'>{error}</Text>
                </div>
            )}
            <Info phone={phone} />
        </div>
    );
};
