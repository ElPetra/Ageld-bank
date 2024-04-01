import { yupResolver } from '@hookform/resolvers/yup';

import { PasswordInput } from 'src/features/inputs';
import { Button, Form } from 'src/shared/ui';
import { useChangePasswordMutation } from 'src/shared/api';
import { getErrorMessage } from 'src/shared/lib';

import { type FieldValues, useForm } from 'react-hook-form';
import { type Dispatch, type SetStateAction } from 'react';

import { changePasswordSchema } from './changePasswordShema';

import './styles.scss';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
}

export const ChangePasswordForm = ({ isLast, setFormStep }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty }
    } = useForm<FieldValues>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        defaultValues: { password1: '' },
        resolver: yupResolver<FieldValues>(changePasswordSchema)
    });

    const [changePassword, { error }] = useChangePasswordMutation();

    const onSubmit = (data: FieldValues) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            changePassword({
                oldPassword: data.current_password,
                newPassword: data.password1,
                Authorization: accessToken
            });
            if (setFormStep && !isLast) {
                setFormStep(curr => curr + 1);
            }
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
                    error={
                        getErrorMessage(error) ||
                        (typeof errors.current_password?.message === 'string' &&
                            errors.current_password?.message) ||
                        ''
                    }
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
