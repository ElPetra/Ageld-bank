import type { InputHTMLAttributes, ReactNode } from 'react';
import type { FieldValues, UseFormRegister } from 'react-hook-form';

import './styles.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegister<FieldValues>;
    field: string;
    children?: ReactNode;
}

export const Switcher = ({
    register,
    id,
    field,
    children,
    ...props
}: Props) => {
    return (
        <label className='switcher'>
            <div className='switcher__input' data-testid='switcher'>
                <input
                    {...register(field)}
                    type='checkbox'
                    id={id}
                    {...props}
                />
                <span className='switch' />
            </div>
            <div>{children}</div>
        </label>
    );
};
