import { type ChangeEvent, type InputHTMLAttributes, useState } from 'react';

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
    width?: 'auto' | 'max';
    error?: string;
    setValue: (value: string) => void;
}

export const ClearInput = ({ placeholder, setValue, ...props }: Props) => {
    const [label, setLabel] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
        if (e.target.value === '') {
            setLabel('');
        } else {
            setLabel(placeholder || '');
        }
    };

    return (
        <Input
            placeholder={placeholder}
            label={label}
            size='large'
            onChange={handleChange}
            {...props}
        >
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
