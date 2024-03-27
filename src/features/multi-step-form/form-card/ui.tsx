import { Link, Text } from 'src/shared/ui';

import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    title: string;
    variant?:
        | 'login'
        | 'registration'
        | 'change-password'
        | 'recovery'
        | 'none';
    children: ReactNode;
}

export const FormCard = ({ title, variant = 'none', children }: Props) => {
    return (
        <div className='form-card'>
            <Text size={'l'} weight={'bold'}>
                {title}
            </Text>
            <div className='form-card__content'>{children}</div>
            {variant !== 'none' && (
                <div className='form-card__link'>
                    <Text align={'center'}>
                        {variant === 'login' && 'У вас нет аккаунта?'}
                        {variant === 'registration' &&
                            'У вас уже есть аккаунт?'}
                        &nbsp;
                        <Link to='/' variant='action'>
                            {variant === 'login' && 'Зарегистрируйтесь'}
                            {variant === 'registration' && 'Авторизуйтесь'}
                        </Link>
                    </Text>
                </div>
            )}
        </div>
    );
};
