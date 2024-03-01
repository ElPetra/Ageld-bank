import React, { FormHTMLAttributes, memo, ReactNode } from 'react';

import './styles.scss';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode;
    error?: string;
}

export const Form = memo(({ children, error, ...props }: Props) =>
    <div className='form-div'>
        <form {...props}
              className={`form`}>
            {children}
        </form>
        {error &&
            <div className='error'>
                {error}
            </div>
        }
    </div>
);