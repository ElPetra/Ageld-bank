import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { PasswordInput } from 'src/features/inputs';
import { Button, Form } from 'src/shared/ui';
import {
    useCheckRegistrationMutation,
    useCreateAccountMutation
} from 'src/shared/api';

import { confirmPasswordSchema } from './confirmPasswordSchema';

import type { FieldValues } from 'react-hook-form';
import type { Dispatch, SetStateAction } from 'react';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
}

export const ConfirmPasswordForm = ({ isLast, setFormStep }: Props) => {
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
    const [createAccount] = useCreateAccountMutation();
    const [, { data: customerData }] = useCheckRegistrationMutation();

    const onSubmit = (data: FieldValues) => {
        if (customerData?.customerId) {
            createAccount({
                customerId: customerData?.customerId,
                password: data.password1
            });
            if (setFormStep && !isLast) {
                setFormStep(curr => curr + 1);
            }
            navigate('/success', {
                state: {
                    message: 'Кабинет пользователя успешно зарегистрирован.',
                    button: true
                }
            });
        }
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
                Зарегистрироваться
            </Button>
        </Form>
    );
};
