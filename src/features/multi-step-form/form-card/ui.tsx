import { Link, Text } from 'src/shared/ui';
import { useTranslation } from 'react-i18next';
import { RouteName } from 'src/shared/model';

import type { ReactNode } from 'react';
import type { VariantType } from '../model';

import './styles.scss';

interface Props {
    title: string;
    variant?: VariantType;
    children: ReactNode;
}

export const FormCard = ({ title, variant = 'none', children }: Props) => {
    const { t } = useTranslation();
    return (
        <div className='form-card'>
            <Text size='l' weight='bold'>
                {title}
            </Text>
            <div className='form-card__content'>{children}</div>
            {variant !== 'none' && (
                <div className='form-card__link'>
                    <Text align='center'>
                        {variant === 'login' && t('У вас нет аккаунта?')}
                        {variant === 'registration' &&
                            t('У вас уже есть аккаунт?')}
                        &nbsp;
                        <Link
                            to={
                                variant === 'login'
                                    ? RouteName.REGISTRATION_PAGE
                                    : RouteName.LOGIN_PAGE
                            }
                            variant='action'
                        >
                            {variant === 'login' && t('Зарегистрируйтесь')}
                            {variant === 'registration' && t('Авторизуйтесь')}
                        </Link>
                    </Text>
                </div>
            )}
        </div>
    );
};
