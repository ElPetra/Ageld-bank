import { type InputHTMLAttributes, useState } from 'react';

import { Icon, Input } from 'src/shared/ui';

import type { ChangeEvent } from 'react';
import type { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    width?: 'auto' | 'max';
    error?: boolean;
    clear: () => void;
    label: string;
    register: UseFormRegister<FieldValues>;
}

export const PhoneInput = ({ clear, error, ...props }: Props) => {
    const [value, setValue] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        e.target.value = e.target.value.replace(/\D/gm, '');
        setValue(e.target.value);
    };

    return (
        <Input
            type='tel'
            pattern='8[0-9]{10}'
            maxLength={11}
            placeholder='Номер телефона'
            size='large'
            value={value}
            onChange={handleChange}
            error={error ? 'Введите, пожалуйста, валидный номер телефона' : ''}
            {...props}
        >
            <button type='button' onClick={clear}>
                <Icon icon='clear' />
            </button>
        </Input>
    );
};
