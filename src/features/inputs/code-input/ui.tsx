import { type InputHTMLAttributes, useEffect, useState } from 'react';

import { Button, Input, Text } from 'src/shared/ui';

import type { ChangeEvent, KeyboardEvent } from 'react';
import type { FieldValues, UseFormRegister } from 'react-hook-form';

import './styles.scss';

const values = [0, 1, 2, 3, 4, 5];

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    width?: 'auto' | 'max';
    error?: string;
    label: string;
    register: UseFormRegister<FieldValues>;
}

export const CodeInput = ({ label, error, ...props }: Props) => {
    const [seconds, setSeconds] = useState<number>(25);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);
        if (seconds <= 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [seconds]);

    const inputOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;

        if (e.key !== 'Backspace' || target.value !== '') {
            return;
        }

        const previousElementSibling = target.parentElement?.parentElement
            ?.previousElementSibling?.firstElementChild
            ?.firstElementChild as HTMLInputElement | null;

        if (previousElementSibling) {
            previousElementSibling.focus();
        }
    };

    const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target;

        if (!target.value) {
            return;
        }

        const nextElementSibling = target.parentElement?.parentElement
            ?.nextElementSibling?.firstElementChild
            ?.firstElementChild as HTMLInputElement | null;

        if (nextElementSibling) {
            nextElementSibling.focus();
        }
    };

    return (
        <div className='code-input'>
            <div className='code-input__inputs'>
                {values.map(el => (
                    <Input
                        key={el}
                        inputMode='numeric'
                        minLength={1}
                        maxLength={1}
                        autoComplete='one-time-code'
                        pattern='\d{1}'
                        size='small'
                        onKeyDown={inputOnKeyDown}
                        onChange={inputOnChange}
                        label={label + '.' + el}
                        error={error}
                        {...props}
                    ></Input>
                ))}
            </div>
            {error && (
                <div className='code-input__error'>
                    <Text size='xs'>{error}</Text>
                </div>
            )}
            <div className='code-input__info'>
                {seconds > 0 ? (
                    <Text size='xs'>
                        Повторная отправка через 0:{seconds < 10 ? '0' : ''}
                        {seconds}
                    </Text>
                ) : (
                    <Button variant='link'>
                        <Text size='xs'>Отправить смс еще раз</Text>
                    </Button>
                )}
            </div>
        </div>
    );
};
