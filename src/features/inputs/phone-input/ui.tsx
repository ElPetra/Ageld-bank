import { type InputHTMLAttributes, useState } from 'react';

import { Icon, Input } from 'src/shared/ui';
import { formatPhoneInputValue } from 'src/shared/utils/formatPhoneInputValue';
import { maskPhoneInputValue } from 'src/shared/utils/maskPhoneInputValue';

import type { ChangeEvent, ClipboardEvent } from 'react';
import type { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    width?: 'auto' | 'max';
    error?: boolean;
    clear: () => void;
    label: string;
    register: UseFormRegister<FieldValues>;
}

export const PhoneInput = ({ clear, error, ...props }: Props) => {
    const [value, setValue] = useState<string>('');

    const handleChange = ({
        target,
        nativeEvent
    }: ChangeEvent<HTMLInputElement>) => {
        const currentVal =
            (nativeEvent as InputEvent).inputType === 'deleteContentBackward'
                ? value.slice(0, value.length - 1)
                : formatPhoneInputValue((target as HTMLInputElement).value);
        setValue(currentVal);
    };
    const handlePaste = (e: ClipboardEvent<HTMLInputElement>): void => {
        (e.target as HTMLInputElement).value = formatPhoneInputValue(
            (e.target as HTMLInputElement).value
        );
        setValue((e.target as HTMLInputElement).value);
    };
    const maskedValue = maskPhoneInputValue(value);
    return (
        <Input
            type='tel'
            pattern='\+7\([0-9]{3}\)[0-9]{3}\-[0-9]{2}\-[0-9]{2}'
            placeholder='Номер телефона'
            size='large'
            value={maskedValue}
            onPaste={handlePaste}
            onChange={handleChange}
            error={error ? 'Введите, пожалуйста, валидный номер телефона' : ''}
            {...props}
        >
            <button type='button' onClick={clear}>
                <Icon icon='clear' />
            </button>
        </Input>
    );
};
