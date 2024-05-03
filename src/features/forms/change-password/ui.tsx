import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { PasswordInput } from 'src/features/inputs';
import { useAuth } from 'src/entities/user';
import { Button, Form } from 'src/shared/ui';
import { getFieldErrorMessage } from 'src/shared/lib';

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
        watch,
        reset,
        formState: { errors, isDirty }
    } = useForm<FieldValues>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        defaultValues: { oldPassword: '', newPassword: '', newPassword2: '' },
        resolver: yupResolver<FieldValues>(changePasswordSchema)
    });

    const { changedPassword, error } = useAuth();

    const onSubmit = async (data: FieldValues) => {
        const error = await changedPassword(data.oldPassword, data.newPassword);
        if (!error) {
            reset();
            if (setFormStep && !isLast) {
                setFormStep(curr => curr + 1);
            }
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className='change-password'>
                <PasswordInput
                    size='medium'
                    register={register}
                    label='oldPassword'
                    variant='confirm'
                    placeholder='Текущий пароль'
                    error={error}
                />
                <PasswordInput
                    size='medium'
                    register={register}
                    label='newPassword'
                    variant='create'
                    placeholder='Новый пароль'
                    isDirty={watch('newPassword') !== ''}
                    error={getFieldErrorMessage(errors.newPassword?.message)}
                />
                <PasswordInput
                    size='medium'
                    register={register}
                    label='newPassword2'
                    placeholder='Подтвердите новый пароль'
                    variant='confirm'
                    error={getFieldErrorMessage(errors.newPassword2?.message)}
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
