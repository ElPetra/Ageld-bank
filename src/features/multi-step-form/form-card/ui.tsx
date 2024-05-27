import { Link, Text } from 'src/shared/ui';

import {
    RouteName,
    SIGN_UP,
    DO_YOU_HAVE_AN_ACCOUNT,
    DO_YOU_NOT_HAVE_AN_ACCOUNT,
    SIGN_IN
} from 'src/shared/model';

import type { ReactNode } from 'react';
import type { VariantType } from '../model';

import './styles.scss';

interface Props {
    title: string;
    variant?: VariantType;
    children: ReactNode;
}

export const FormCard = ({ title, variant = 'none', children }: Props) => {
    return (
        <div className='form-card'>
            <Text size='l' weight='bold'>
                {title}
            </Text>
            <div className='form-card__content'>{children}</div>
            {variant !== 'none' && (
                <div className='form-card__link'>
                    <Text align='center'>
                        {variant === 'login' && DO_YOU_NOT_HAVE_AN_ACCOUNT}
                        {variant === 'registration' && DO_YOU_HAVE_AN_ACCOUNT}
                        &nbsp;
                        <Link
                            to={
                                variant === 'login'
                                    ? RouteName.REGISTRATION_PAGE
                                    : RouteName.MAIN_PAGE
                            }
                            variant='action'
                        >
                            {variant === 'login' && SIGN_UP}
                            {variant === 'registration' && SIGN_IN}
                        </Link>
                    </Text>
                </div>
            )}
        </div>
    );
};
