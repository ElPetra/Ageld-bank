import { type InputHTMLAttributes, useState } from 'react';

import { Icon, Input } from 'src/shared/ui';

import type { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    width?: 'auto' | 'max';
    error?: boolean;
    register: UseFormRegister<FieldValues>;
}

export const PasswordInput = ({ error, ...props }: Props) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <Input
            type={open ? 'text' : 'password'}
            placeholder='Пароль'
            size='large'
            label='password'
            minLength={8}
            error={error ? 'Введите, пожалуйста, валидный пароль' : ''}
            {...props}
        >
            {error}
            <button type='button' onClick={() => setOpen(!open)}>
                <Icon icon={open ? 'eye-open' : 'eye-close'} />
            </button>
        </Input>
    );
};
