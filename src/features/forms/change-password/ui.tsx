import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { PasswordInput } from 'src/features/inputs';
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
        formState: { errors, isDirty }
    } = useForm<FieldValues>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        defaultValues: { password1: '' },
        resolver: yupResolver<FieldValues>(changePasswordSchema)
    });
    const onSubmit = (data: FieldValues) => {
        if (setFormStep && !isLast) {
            setFormStep(curr => curr + 1);
        }
        console.log(data);
    };
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className='change-password__row'>
                <PasswordInput
                    size='medium'
                    register={register}
                    label='current_password'
                    variant='confirm'
                    placeholder='Текущий пароль'
                    error={getFieldErrorMessage(
                        errors.current_password?.message
                    )}
                />
                <PasswordInput
                    size='medium'
                    register={register}
                    label='password1'
                    variant='create'
                    placeholder='Новый пароль'
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
