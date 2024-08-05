import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Icon, Input } from 'src/shared/ui';

import type { ChangeEvent, InputHTMLAttributes } from 'react';
import type { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    defaultEmail?: string;
    width?: 'auto' | 'max';
    isError?: boolean;
    error?: string;
    clear: () => void;
    field: string;
    register: UseFormRegister<FieldValues>;
}

export const EmailInput = ({
    defaultEmail = '',
    isError,
    error,
    clear,
    disabled,
    ...props
}: Props) => {
    const { t } = useTranslation();
    const [value, setValue] = useState<string>(defaultEmail);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    };

    return (
        <Input
            type='text'
            pattern='([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z0-9_-]+)'
            minLength={8}
            maxLength={50}
            label='Email'
            size='large'
            width='max'
            value={value}
            onChange={handleChange}
            reference={inputRef}
            error={
                error ||
                (isError
                    ? t('Email должен быть валидным')
                    : value !== '' && value.length < 8
                      ? t('Email должен содержать от 8 до 50 символов')
                      : '')
            }
            disabled={disabled}
            {...props}
        >
            <button
                type='button'
                onClick={() => {
                    clear();
                    (inputRef.current?.children[1] as HTMLInputElement).focus(); // так сделано, потому что реакт хук форм не разрешает передавать в подконтрольный ей инпут реф.
                    setValue('');
                }}
            >
                <Icon icon='clear' />
            </button>
        </Input>
    );
};
