import { InputHTMLAttributes, memo, ReactNode } from 'react';

import './styles.scss';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    type?: 'button' | 'checkbox' | 'color' | 'date' | 'password' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'text';
    placeholder?: string;
    size?: 'medium' | 'large';
    width?: 'auto' | 'max';
    status?: 'active' | 'error' | undefined;
    children?: ReactNode;
}

export const Input = memo(({
                               type,
                               placeholder,
                               size = 'medium',
                               width = 'auto',
                               status,
                               children,
                               ...props
                           }: Props) =>
    <div className='field'>
        <span className='placeholder'>
                {placeholder}
            </span>
        <input type={type || 'text'} placeholder={placeholder || ''}
               className={`input ${status} ${size} ${width}`} {...props}>
            {children}
        </input>
    </div>
);

