import { type InputHTMLAttributes, useState } from 'react';

import { Icon, Input } from 'src/shared/ui';

import type { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    width?: 'auto' | 'max';
    error?: string;
    clear: () => void;
    label: string;
    register: UseFormRegister<FieldValues>;
}

export const ClearInput = ({ clear, ...props }: Props) => {
    const [value, setValue] = useState<string>('');
    return (
        <Input
            size='large'
            value={value}
            onChange={e => setValue(e.target.value)}
            {...props}
        >
            <button type='button' onClick={clear}>
                <Icon icon='clear' />
            </button>
        </Input>
    );
};
