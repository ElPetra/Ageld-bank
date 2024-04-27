import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { PasswordInput } from 'src/features/inputs';
import { Button, Form } from 'src/shared/ui';
import { localStorageApi, useCreateProfileMutation } from 'src/shared/api';
import { getErrorMessage, getFieldErrorMessage } from 'src/shared/lib';
import { RouteName } from 'src/shared/model';

import { confirmPasswordSchema } from './model';

import type { FieldValues } from 'react-hook-form';
import type { Dispatch, SetStateAction } from 'react';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
    type?: string;
}

export const ConfirmPasswordForm = ({ isLast, setFormStep, type }: Props) => {
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
    const navigate = useNavigate();
    const [createProfile, { error: createProfileError }] =
        useCreateProfileMutation();

    const onSubmit = (data: FieldValues) => {
        const customerId = localStorageApi.getUserId();
        if (customerId) {
            createProfile({
                customerId: customerId,
                password: data.password1
            })
                .unwrap()
                .then(() => {
                    if (type === 'recovery') {
                        navigate(RouteName.MAIN_PAGE);
                    }
                });
            if (setFormStep && !isLast) {
                setFormStep(curr => curr + 1);
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
                error={getErrorMessage(createProfileError)}
            />
            <PasswordInput
                register={register}
                label='password2'
                placeholder={
                    type === 'recovery'
                        ? 'Подтвердите новый пароль'
                        : 'Подтвердите пароль'
                }
                variant='confirm'
                error={getFieldErrorMessage(errors.password2?.message)}
            />
            <Button
                variant='secondary'
                size='large'
                type='submit'
                disabled={!isDirty}
            >
                Отправить
            </Button>
        </Form>
    );
};
