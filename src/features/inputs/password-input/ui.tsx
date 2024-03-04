import { type ChangeEvent, type InputHTMLAttributes, useState } from 'react';

import { Icon, Input } from 'src/shared/ui';

interface Props
    extends Omit<Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, 'type'> {
    width?: 'auto' | 'max';
    error?: string;
    setValue: (value: string) => void;
}

export const PasswordInput = ({ setValue, ...props }: Props) => {
    const [open, setOpen] = useState<boolean>(false);
    const [label, setLabel] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
        if (e.target.value === '') {
            setLabel('');
        } else {
            setLabel('Пароль');
        }
    };

    return (
        <Input
            type={open ? 'text' : 'password'}
            placeholder='Пароль'
            label={label}
            size='large'
            onChange={handleChange}
            {...props}
        >
            <button type='button' onClick={() => setOpen(!open)}>
                <Icon icon={open ? 'eye-open' : 'eye-close'} />
            </button>
        </Input>
    );
};
