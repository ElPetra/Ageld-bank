import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { PasswordInput } from 'src/features/inputs';
import { Button, Form } from 'src/shared/ui';
import { getFieldErrorMessage, getErrorMessage } from 'src/shared/lib';
import { localStorageApi, useChangePasswordMutation } from 'src/shared/api';

import { changePasswordSchema } from './model';

import type { Dispatch, SetStateAction } from 'react';
import type { FieldValues } from 'react-hook-form';

import './styles.scss';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
}

export const ChangePasswordForm = ({ isLast, setFormStep }: Props) => {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isDirty }
    } = useForm<FieldValues>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        defaultValues: { current_password: '', password1: '', password2: '' },
        resolver: yupResolver<FieldValues>(changePasswordSchema)
    });

    const [changePassword, { error: changePasswordError }] =
        useChangePasswordMutation();
    const onSubmit = (data: FieldValues) => {
        const accessToken = localStorageApi.getAccessToken();
        if (accessToken) {
            changePassword({
                oldPassword: data.current_password,
                newPassword: data.password1
            })
                .unwrap()
                .then(() => {
                    if (setFormStep && !isLast) {
                        setFormStep(curr => curr + 1);
                    }
                    setValue('current_password', '');
                    setValue('password1', '');
                    setValue('password2', '');
                });
        }
    };
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className='change-password'>
                <PasswordInput
                    size='medium'
                    register={register}
                    label='current_password'
                    variant='confirm'
                    placeholder='Текущий пароль'
                    error={getErrorMessage(changePasswordError)}
                />
                <PasswordInput
                    size='medium'
                    register={register}
                    label='password1'
                    variant='create'
                    placeholder='Новый пароль'
                    isDirty={watch('password1') !== ''}
                    error={getFieldErrorMessage(errors.password1?.message)}
                />
                <PasswordInput
                    size='medium'
                    register={register}
                    label='password2'
                    placeholder='Подтвердите новый пароль'
                    variant='confirm'
                    error={getFieldErrorMessage(errors.password2?.message)}
                />
            </div>
            <Button
                variant='secondary'
                size='medium'
                type='submit'
                disabled={!isDirty}
            >
                Продолжить
            </Button>
        </Form>
    );
};
