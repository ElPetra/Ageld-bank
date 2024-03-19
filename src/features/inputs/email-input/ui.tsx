import type { ChangeEvent, InputHTMLAttributes } from 'react';
import { useState } from 'react';

import { Input } from 'src/shared/ui';
import type { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    width?: 'auto' | 'max';
    isError?: boolean;
    error?: string;
    label: string;
    register: UseFormRegister<FieldValues>;
}

export const EmailInput = ({ isError, error, ...props }: Props) => {
    const [value, setValue] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    };

    return (
        <Input
            type='text'
            pattern={
                "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
            }
            minLength={8}
            maxLength={50}
            placeholder='Email'
            size='large'
            width='max'
            value={value}
            onChange={handleChange}
            error={
                error ||
                (isError ? 'Email должен содержать от 8 до 50 символов' : '')
            }
            {...props}
        ></Input>
    );
};
