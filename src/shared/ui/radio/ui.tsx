import type { InputHTMLAttributes, ReactNode } from 'react';
import type { FieldValues, UseFormRegister } from 'react-hook-form';

import './styles.scss';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    register: UseFormRegister<FieldValues>;
    field: string;
    children?: ReactNode;
}

export const Radio = ({ register, id, field, children, ...props }: Props) => {
    return (
        <>
            <input
                {...register(field, {
                    required: true
                })}
                type='radio'
                className='hidden'
                id={id}
                {...props}
            />
            <label htmlFor={id}>{children}</label>
        </>
    );
};
