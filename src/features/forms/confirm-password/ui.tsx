import { useForm } from 'react-hook-form';

import { PasswordInput } from 'src/features/inputs';
import { Button, Form } from 'src/shared/ui';
import { useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';

import { confirmPasswordSchema } from './confirmPasswordSchema';

import type { FieldValues } from 'react-hook-form';
import type { Dispatch, SetStateAction } from 'react';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
    variant?: string;
}

export const ConfirmPasswordForm = ({
    isLast,
    setFormStep,
    variant
}: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid }
    } = useForm<FieldValues>({
        mode: 'onTouched',
        reValidateMode: 'onChange',
        defaultValues: { password1: '', password2: '' },
        resolver: yupResolver<FieldValues>(confirmPasswordSchema)
    });
    const navigate = useNavigate();
    const onSubmit = (data: FieldValues) => {
        if (setFormStep && !isLast) {
            setFormStep(curr => curr + 1);
        }
        console.log(data);

        navigate('/success', {
            state: {
                message:
                    variant === 'recovery'
                        ? 'Пароль успешно восстановлен'
                        : 'Кабинет пользователя успешно зарегистрирован.',
                button: true
            }
        });
    };
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <PasswordInput
                register={register}
                label='password1'
                variant='create'
                error={
                    (typeof errors.password1?.message === 'string' &&
                        errors.password1?.message) ||
                    ''
                }
            />
            <PasswordInput
                register={register}
                label='password2'
                placeholder='Подтвердите пароль'
                variant='confirm'
                error={
                    (typeof errors.password2?.message === 'string' &&
                        errors.password2?.message) ||
                    ''
                }
            />
            <Button
                variant='secondary'
                size='large'
                type='submit'
                disabled={!isDirty || !isValid}
            >
                Отправить
            </Button>
        </Form>
    );
};
