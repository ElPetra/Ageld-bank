import { type InputHTMLAttributes } from 'react';

import { Icon, Input } from 'src/shared/ui';

interface Props
    extends Omit<Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, 'type'> {
    type?:
        | 'search'
        | 'checkbox'
        | 'color'
        | 'date'
        | 'password'
        | 'email'
        | 'file'
        | 'hidden'
        | 'image'
        | 'month'
        | 'number'
        | 'text'
        | 'tel';
    label?: string;
    size?: 'large';
    width?: 'auto' | 'max';
    error?: string;
    setValue: (value: string) => void;
    setLabel: (value: string) => void;
}

export const ClearInput = ({ setValue, setLabel, ...props }: Props) => {
    return (
        <Input size='large' {...props}>
            <button
                type='button'
                onClick={() => {
                    setValue('');
                    setLabel('');
                }}
            >
                <Icon icon='clear' />
            </button>
        </Input>
    );
};
