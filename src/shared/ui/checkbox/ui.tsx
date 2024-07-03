import type { InputHTMLAttributes, ReactNode } from 'react';
import type { FieldValues, UseFormRegister } from 'react-hook-form';

import './styles.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    register?: UseFormRegister<FieldValues>;
    field?: string;
    children?: ReactNode;
}

export const Checkbox = ({ register, field, children, ...props }: Props) => {
    return (
        <div className='custom-checkbox'>
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
