import { type InputHTMLAttributes, useState } from 'react';

import { Icon, Input } from 'src/shared/ui';
import { PasswordMatchDisplay } from 'src/entities/password-match/ui';
import { InfoCard } from 'src/shared/info-card';

import { useCapslock } from './lib/useCapslock';

import type { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    width?: 'auto' | 'max';
    isError?: boolean;
    isCreating?: boolean;
    error?: string;
    label: string;
    placeholder?: string;
    register: UseFormRegister<FieldValues>;
}

export const PasswordInput = ({
    isError,
    placeholder = 'Пароль',
    isCreating,
    error,
    ...props
}: Props) => {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const [isFocused, setFocused] = useState<boolean>(false);
    const capslockFlag = useCapslock();

    return (
        <>
            <Input
                type={open ? 'text' : 'password'}
                placeholder={placeholder}
                pattern='^.{6,20}$'
                size='large'
                value={value}
                onChange={e => setValue(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                error={
                    error ||
                    (isError
                        ? 'Пароль должен содержать от 6 до 20 символов'
                        : '')
                }
                {...props}
            >
                <button
                    type='button'
                    onClick={e => {
                        e.stopPropagation();
                        setOpen(o => !o);
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
