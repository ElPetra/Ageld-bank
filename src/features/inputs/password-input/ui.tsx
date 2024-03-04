import { type InputHTMLAttributes, useState } from 'react';

import { Icon, Input } from 'src/shared/ui';

interface Props
    extends Omit<Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, 'type'> {
    label?: string;
    size?: 'large';
    width?: 'auto' | 'max';
    error?: string;
}

export const PasswordInput = ({ ...props }: Props) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <Input
            type={open ? 'text' : 'password'}
            size='large'
            placeholder='Пароль'
            {...props}
        >
            <button onClick={() => setOpen(!open)}>
                <Icon icon={open ? 'eye-open' : 'eye-close'} />
            </button>
        </Input>
    );
};
