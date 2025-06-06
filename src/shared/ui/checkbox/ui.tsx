import type { InputHTMLAttributes, ReactNode } from 'react';
import type { UseFormRegister } from 'react-hook-form';

import './styles.scss';

type RegisterForPhoneAndCheckbox = UseFormRegister<{
    phone: string,
    checkbox: string[]
}>;
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    register?: RegisterForPhoneAndCheckbox;
    field?: 'phone' | 'checkbox';
    children?: ReactNode;
}

export const Checkbox = ({ register, field, children, ...props }: Props) => {
    return (
        <div className='custom-checkbox' data-testid='checkbox'>
            <label className='custom-checkbox__label'>
                <input
                    {...(register && field && register(field))}
                    className='custom-checkbox__input'
                    type='checkbox'
                    {...props}
                />
                <span className='checkbox-control'></span>
                <div>{children}</div>
            </label>
        </div>
    );
};
