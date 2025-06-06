import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { RouteName } from 'src/shared/model';
import { Icon, Input, Link, Text } from 'src/shared/ui';

import { useCapslock } from './lib';
import { PasswordRequirements } from './password-requirements';
import { InfoCard } from './info-card';

import type { InputHTMLAttributes } from 'react';
import type { FieldValues, UseFormRegister } from 'react-hook-form';

import './styles.scss';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    width?: 'auto' | 'max';
    size?: 'large' | 'medium';
    variant?: 'exist' | 'create' | 'confirm';
    error?: string;
    isError?: boolean;
    placeholder?: string;
    field: string;
    register: UseFormRegister<FieldValues>;
    isDirty?: boolean;
}

export const PasswordInput = ({
    isError,
    placeholder,
    variant = 'exist',
    error,
    width = 'max',
    size = 'large',
    isDirty,
    ...props
}: Props) => {
    const { t } = useTranslation();
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const [isFocused, setFocused] = useState<boolean>(false);
    const capslockFlag = useCapslock();
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className='password-input'>
            <Input
                type={open ? 'text' : 'password'}
                label={placeholder || t('Пароль')}
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
                    message={t('Включен CapsLock')}
                />
            )}
            {variant === 'exist' && (
                <div className='forgot-password-link'>
                    <Text size='xs'>
                        <Link
                            to={RouteName.RECOVERY_PASSWORD_PAGE}
                            variant='action'
                        >
                            {t('Восстановление пароля')}
                        </Link>
                    </Text>
                </div>
            )}
            {isFocused &&
                variant === 'create' &&
                (isDirty !== undefined ? isDirty : true) && (
                    <PasswordRequirements
                        key={value}
                        password={value}
                        requirements={{
                            length: '6,20',
                            existsAllRegisters: true,
                            existsDigit: true,
                            existsSymbol:
                                /* prettier-ignore */ '!\\\\"#$%&\'()*+,\\-.\\/:;<=>?@[\\]^_`{|}~',
                            onlyPermitted: true
                        }}
                    />
                )}
        </div>
    );
};
