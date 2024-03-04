import { type InputHTMLAttributes } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import { Icon, Input } from 'src/shared/ui';

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
