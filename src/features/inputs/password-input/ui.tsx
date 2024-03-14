import { type InputHTMLAttributes, useState, useRef } from 'react';

import { Icon, Input } from 'src/shared/ui';

import { useCapslock } from './lib';
import { PasswordMatchDisplay } from './password-match';
import { InfoCard } from './info-card';

import type { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    width?: 'auto' | 'max';
    isError?: boolean;
    isCreating?: boolean;
    error?: string;
    label: string;
    placeholder?: string;
    placeholderLabel?: string;
    register: UseFormRegister<FieldValues>;
}

export const PasswordInput = ({
    isError,
    placeholder = 'Пароль',
    placeholderLabel,
    isCreating,
    error,
    ...props
}: Props) => {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const [isFocused, setFocused] = useState<boolean>(false);
    const capslockFlag = useCapslock();
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <>
            <Input
                type={open ? 'text' : 'password'}
                placeholder={placeholder}
                placeholderLabel={placeholderLabel}
                pattern={
                    '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!\\\\"#$%&\'()*+,\\-.\\/:;<=>?@[\\]^_{|}~])+[A-Za-z0-9!\\\\"#$%&\'()*+,\\-.\\/:;<=>?@[\\]^_{|}~]{6,20}$'
                }
                size='large'
                value={value}
                onChange={e => setValue(e.target.value)}
                onFocus={() => setFocused(true)}
                // onBlur={() => {
                //     setTimeout(setFocused, 300, false);
                // }}
                reference={inputRef}
                error={
                    (value !== '' && error) ||
                    (isError && !isCreating
                        ? 'Пароль должен содержать от 6 до 20 символов'
                        : '')
                }
                isError={!!value && isError}
                {...props}
            >
                <button
                    type='button'
                    onClick={() => {
                        setOpen(o => !o);
                        (
                            inputRef.current?.children[1] as HTMLInputElement
                        ).focus();
                    }}
                >
                    <Icon icon={open ? 'eye-open' : 'eye-close'} />
                </button>
            </Input>
            {capslockFlag && (
                <InfoCard icon='warning' message='Включен CapsLock' />
            )}
            {isFocused && isCreating && (
                <PasswordMatchDisplay
                    key={value}
                    password={value}
                    requirements={{
                        length: '6,20',
                        existsAllRegisters: true,
                        existsDigit: true,
                        existsSymbol:
                            /* prettier-ignore */ '!\\\\"#$%&\'()*+,\\-.\\/:;<=>?@[\\]^_`{|}~',
                        onlyLatin: true
                    }}
                />
            )}
        </>
    );
};
