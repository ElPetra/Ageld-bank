import { useState } from 'react';

import { Input } from 'src/shared/ui';

import type { ChangeEvent, InputHTMLAttributes } from 'react';
import type { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    width?: 'auto' | 'max';
    error?: string;
    label: string;
    register: UseFormRegister<FieldValues>;
}

export const EmailInput = ({ error, ...props }: Props) => {
    const [value, setValue] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    };

    return (
        <Input
            type='text'
            placeholder='Email'
            size='large'
            width='max'
            value={value}
            onChange={handleChange}
            error={error}
            {...props}
        ></Input>
    );
};
