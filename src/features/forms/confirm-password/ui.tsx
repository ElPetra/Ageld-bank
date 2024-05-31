import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

import { PasswordInput } from 'src/features/inputs';
import { useAuth } from 'src/entities/user';
import { Button, Form } from 'src/shared/ui';
import { getFieldErrorMessage } from 'src/shared/lib';
import { RouteName } from 'src/shared/model';

import { confirmPasswordSchema } from './model';

import type { FieldValues } from 'react-hook-form';
import type { Dispatch, SetStateAction } from 'react';

interface Props {
    variant: 'registration' | 'recovery';
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
    phone: string;
}

export const ConfirmPasswordForm = ({
    variant,
    isLast,
    setFormStep,
    phone
}: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty }
    } = useForm<FieldValues>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        defaultValues: { password1: '', password2: '' },
        resolver: yupResolver<FieldValues>(confirmPasswordSchema)
    });
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { createdProfile, error } = useAuth();

    const onSubmit = async (data: FieldValues) => {
        if (variant === 'registration') {
            const error = await createdProfile(phone, data.password1);
            if (!error && setFormStep && !isLast) {
                setFormStep(curr => {
                    return curr + 1;
                });
            }
        }
        if (variant === 'recovery') {
            //const error = await recoveredPassword(phone, data.password1);
            if (!error) {
                navigate(RouteName.MAIN_PAGE);
            }
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <PasswordInput
                register={register}
                label='password1'
                variant='create'
                isError={!!errors.password1?.message}
                error={error}
            />
            <PasswordInput
                register={register}
                label='password2'
                placeholder={
                    variant === 'recovery'
                        ? t('Подтвердите новый пароль')
                        : t('Подтвердите пароль')
                }
                variant='confirm'
                error={t(getFieldErrorMessage(errors.password2?.message))}
            />
            <Button
                variant='secondary'
                size='large'
                type='submit'
                disabled={!isDirty}
            >
                {t('Отправить')}
            </Button>
        </Form>
    );
};
