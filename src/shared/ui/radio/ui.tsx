import type { InputHTMLAttributes, ReactNode } from 'react';
import type { FieldValues, UseFormRegister } from 'react-hook-form';

import './styles.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    register?: UseFormRegister<FieldValues>;
    field?: string;
    children?: ReactNode;
}

export const Radio = ({ register, field, children, ...props }: Props) => {
    return (
        <label className='radio' data-testid='radio'>
            <input
                {...(register && field && register(field))}
                type='radio'
                {...props}
            />
            <div>{children}</div>
        </label>
    );
};
