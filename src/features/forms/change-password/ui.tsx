import { PasswordInput } from 'src/features/inputs';
import { Button, Form } from 'src/shared/ui';
import { getErrorMessage } from 'src/shared/lib';
import { useChangePasswordMutation } from 'src/shared/api';
import './styles.scss';

import { type FieldValues, useForm } from 'react-hook-form';

import { type Dispatch, type SetStateAction } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import { getAccessToken } from 'src/shared/api/services/localStorageApi';

import { changePasswordSchema } from './changePasswordShema';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
}

export const ChangePasswordForm = ({ isLast, setFormStep }: Props) => {
    const {
        register,
        handleSubmit,
        setValue,
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
        const accessToken = getAccessToken();
        if (accessToken) {
            changePassword({
                Authorization: accessToken,
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
            <div className='row'>
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
                    error={
                        (typeof errors.password1?.message === 'string' &&
                            errors.password1?.message) ||
                        ''
                    }
                />
                <PasswordInput
                    size='medium'
                    register={register}
                    label='password2'
                    placeholder='Подтвердите новый пароль'
                    variant='confirm'
                    error={
                        (typeof errors.password2?.message === 'string' &&
                            errors.password2?.message) ||
                        ''
                    }
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
