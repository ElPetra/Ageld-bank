import { useRef, useState } from 'react';

import { Icon, Input } from 'src/shared/ui';

import type { ChangeEvent, InputHTMLAttributes } from 'react';
import type { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    width?: 'auto' | 'max';
    isError?: boolean;
    error?: string;
    clear: () => void;
    label: string;
    register: UseFormRegister<FieldValues>;
}

export const PhoneInput = ({ clear, isError, error, ...props }: Props) => {
    const [value, setValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value;
        inputValue = inputValue.replace(/\D/gm, '');
        if (inputValue.length == 0) {
            e.target.value = inputValue;
        } else if (inputValue.length == 1) {
            if (!/\+/.test(e.target.value)) {
                e.target.value = inputValue.replace(/(\d)/, '+7 (');
            }
        } else if (inputValue.length == 5) {
            e.target.value = inputValue.replace(
                /(\d)(\d{3})(\d)/,
                '+7 ($2) $3'
            );
        } else if (inputValue.length == 8) {
            e.target.value = inputValue.replace(
                /(\d)(\d{3})(\d{3})(\d)/,
                '+7 ($2) $3-$4'
            );
        } else if (inputValue.length == 10 || inputValue.length == 11) {
            e.target.value = inputValue.replace(
                /(\d)(\d{3})(\d{3})(\d{2})(\d)/,
                '+7 ($2) $3-$4-$5'
            );
        }
        setValue(e.target.value);
    };

    return (
        <Input
            type='text'
            minLength={18}
            maxLength={18}
            placeholder='Номер телефона'
            size='large'
            value={value}
            onChange={handleChange}
            reference={inputRef}
            error={
                error ||
                (isError ? 'Номер телефона должен содержать 11 цифр' : '')
            }
            {...props}
        >
            <button
                type='button'
                onClick={() => {
                    clear();
                    (inputRef.current?.children[1] as HTMLInputElement).focus(); // так сделано, потому что реакт хук форм не разрешает передавать в подконтрольный ей инпут реф.
                    setValue('');
                }}
            >
                <Icon icon='clear' />
            </button>
        </Input>
    );
};
