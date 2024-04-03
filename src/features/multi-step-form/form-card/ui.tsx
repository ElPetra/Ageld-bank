import { Link, Text } from 'src/shared/ui';

import { RouteName } from 'src/shared/model';

import type { ReactNode } from 'react';
import type { VariantType } from 'src/features/multi-step-form/ui';

import './styles.scss';

interface Props {
    title: string;
    variant?: VariantType;
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
                        <Link
                            to={
                                variant === 'login'
                                    ? RouteName.REGISTRATION_PAGE
                                    : RouteName.MAIN_PAGE
                            }
                            variant='action'
                        >
                            {variant === 'login' && 'Зарегистрируйтесь'}
                            {variant === 'registration' && 'Авторизуйтесь'}
                        </Link>
                    </Text>
                </div>
            )}
        </div>
    );
};
