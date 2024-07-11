import { useState } from 'react';

import { Input } from 'src/shared/ui';

import type { ChangeEvent, InputHTMLAttributes } from 'react';
import type { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    width?: 'auto' | 'max';
    error?: string;
    field: string;
    register: UseFormRegister<FieldValues>;
    disabled: boolean;
}

export const EmailInput = ({ error, disabled, ...props }: Props) => {
    const [value, setValue] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    };

    return (
        <Input
            type='text'
            label='Email'
            size='large'
            width='max'
            value={value}
            onChange={handleChange}
            error={error}
            disabled={disabled}
            {...props}
        ></Input>
    );
};
