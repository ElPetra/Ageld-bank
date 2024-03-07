import { type InputHTMLAttributes, useState } from 'react';

import { Icon, Input } from 'src/shared/ui';

import type { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    width?: 'auto' | 'max';
    isError?: boolean;
    error?: string;
    label: string;
    register: UseFormRegister<FieldValues>;
}

export const PasswordInput = ({ isError, error, ...props }: Props) => {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');

    return (
        <Input
            type={open ? 'text' : 'password'}
            placeholder='Пароль'
            pattern='^.{6,20}$'
            size='large'
            value={value}
            onChange={e => setValue(e.target.value)}
            error={
                error ||
                (isError ? 'Пароль должен содержать от 6 до 20 символов' : '')
            }
            {...props}
        >
            <button type='button' onClick={() => setOpen(o => !o)}>
                <Icon icon={open ? 'eye-open' : 'eye-close'} />
            </button>
        </Input>
    );
};
