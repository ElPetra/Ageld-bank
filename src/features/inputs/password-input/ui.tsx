import { type InputHTMLAttributes, useState } from 'react';

import { Icon, Input } from 'src/shared/ui';

import type {
    FieldValues,
    UseFormClearErrors,
    UseFormRegister
} from 'react-hook-form';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    width?: 'auto' | 'max';
    error?: string;
    label: string;
    clearErrors: UseFormClearErrors<FieldValues>;
    register: UseFormRegister<FieldValues>;
}

export const PasswordInput = (props: Props) => {
    const [open, setOpen] = useState<boolean>(false);
    const [pass, setPass] = useState<string>('');
    return (
        <Input
            type={open ? 'text' : 'password'}
            size='large'
            value={pass}
            onChange={e => setPass(e.target.value)}
            {...props}
        >
            <button type='button' onClick={() => setOpen(prev => !prev)}>
                <Icon icon={open ? 'eye-open' : 'eye-close'} />
            </button>
        </Input>
    );
};
