import { type InputHTMLAttributes } from 'react';

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
    return (
        <Input size='large' {...props}>
            <button type='button' onClick={clear}>
                <Icon icon='clear' />
            </button>
        </Input>
    );
};
