import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Icon, Input } from 'src/shared/ui';

import type { ChangeEvent, InputHTMLAttributes } from 'react';
import type { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    width?: 'auto' | 'max';
    isError?: boolean;
    error?: string;
    clear: () => void;
    label: string;
    register: UseFormRegister<FieldValues>;
}

export const PhoneInput = ({ clear, isError, error, ...props }: Props) => {
    const { t } = useTranslation();
    const [value, setValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value.replaceAll(/\D/gm, '');
        if (inputValue.length == 1) {
            if (!/\+/.test(e.target.value)) {
                inputValue =
                    inputValue === '8' || inputValue === '7'
                        ? inputValue.replace(/(\d)/, '+7 (')
                        : inputValue.replace(/(\d)/, '+7 ($1');
            }
        } else if (1 < inputValue.length && inputValue.length < 5) {
            inputValue = inputValue.replace(/(\d)(\d{0,3})/, '+7 ($2');
        } else if (inputValue.length >= 5 && inputValue.length < 8) {
            inputValue = inputValue.replace(/(\d)(\d{3})(\d)/, '+7 ($2) $3');
        } else if (inputValue.length == 8 || inputValue.length == 9) {
            inputValue = inputValue.replace(
                /(\d)(\d{3})(\d{3})(\d)/,
                '+7 ($2) $3-$4'
            );
        } else if (inputValue.length == 10 || inputValue.length == 11) {
            inputValue = inputValue.replace(
                /(\d)(\d{3})(\d{3})(\d{2})(\d)/,
                '+7 ($2) $3-$4-$5'
            );
        }
        e.target.value = inputValue;
        setValue(inputValue);
    };

    return (
        <Input
            type='text'
            minLength={18}
            maxLength={18}
            placeholder={t('Номер телефона')}
            size='large'
            value={value}
            onChange={handleChange}
            reference={inputRef}
            error={
                error ||
                (isError || (value !== '' && value.length < 18)
                    ? t('Номер телефона должен содержать 11 цифр')
                    : '')
            }
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
