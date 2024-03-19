import { type InputHTMLAttributes, useRef, useState } from 'react';

import { RouteName } from 'src/shared/model';
import { Icon, Input, Link, Text } from 'src/shared/ui';

import { useCapslock } from './lib';
import { PasswordRequirements } from './password-requirements';
import { InfoCard } from './info-card';

import type { FieldValues, UseFormRegister } from 'react-hook-form';

import './styles.scss';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    width?: 'auto' | 'max';
    size?: 'large' | 'medium';
    isError?: boolean;
    variant?: 'exist' | 'create' | 'confirm';
    error?: string;
    label: string;
    placeholder?: string;
    register: UseFormRegister<FieldValues>;
}

export const PasswordInput = ({
    isError,
    placeholder = 'Пароль',
    variant = 'exist',
    error,
    width = 'max',
    size = 'large',
    ...props
}: Props) => {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const [isFocused, setFocused] = useState<boolean>(false);
    const capslockFlag = useCapslock();
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className='password-input'>
            <Input
                type={open ? 'text' : 'password'}
                placeholder={placeholder}
                pattern={
                    variant === 'create'
                        ? '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!\\\\"#$%&\'()*+,\\-.\\/:;<=>?@[\\]^_{|}~])+[A-Za-z0-9!\\\\"#$%&\'()*+,\\-.\\/:;<=>?@[\\]^_{|}~]{6,20}$'
                        : ''
                }
                minLength={6}
                maxLength={20}
                size={size}
                width={width}
                value={value}
                onChange={e => setValue(e.target.value)}
                onFocus={() => setFocused(true)}
                reference={inputRef}
                error={value !== '' ? error : ''}
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
                <InfoCard
                    icon='warning'
                    color='error'
                    message='Включен CapsLock'
                />
            )}
            {variant === 'exist' && (
                <div className='forgot-password-link'>
                    <Text size='xs'>
                        <Link to={RouteName.MAIN_PAGE} variant='action'>
                            Забыли пароль?
                        </Link>
                    </Text>
                </div>
            )}
            {isFocused && variant === 'create' && (
                <PasswordRequirements
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
        </div>
    );
};
