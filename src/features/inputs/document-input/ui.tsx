import { type InputHTMLAttributes, useState } from 'react';

import { Icon, Input } from 'src/shared/ui';

import type { ChangeEvent } from 'react';
import type { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    width?: 'auto' | 'max';
    isError?: boolean;
    error?: string;
    clear: () => void;
    label: string;
    register: UseFormRegister<FieldValues>;
}

export const DocumentInput = ({ clear, isError, error, ...props }: Props) => {
    const [value, setValue] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        let inputValue = e.target.value;
        inputValue = inputValue.replace(/\D/gm, '');
        if (inputValue.length == 0) {
            e.target.value = inputValue;
        } else if (inputValue.length == 3) {
            e.target.value = inputValue.replace(/(\d{2})/, '$1 ');
        } else if (inputValue.length == 5) {
            e.target.value = inputValue.replace(/(\d{2})(\d{2})/, '$1 $2 ');
        } else if (inputValue.length >= 6) {
            e.target.value = inputValue.replace(
                /(\d{2})(\d{2})(\d{1,6})/,
                '$1 $2 $3'
            );
        }
        setValue(e.target.value);
    };

    return (
        <Input
            type='text'
            maxLength={22}
            minLength={8}
            placeholder='Серия и номер паспорта/ВНЖ'
            size='large'
            value={value}
            onChange={handleChange}
            error={
                error ||
                (isError ? 'Документ должен содержать от 6 до 20 символов' : '')
            }
            {...props}
        >
            <button
                type='button'
                onClick={() => {
                    clear();
                    setValue('');
                }}
            >
                <Icon icon='clear' />
            </button>
        </Input>
    );
};
