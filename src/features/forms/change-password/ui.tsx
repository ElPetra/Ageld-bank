import { PasswordInput } from 'src/features/inputs';
import { Button, Form } from 'src/shared/ui';
import './styles.scss';

import { type FieldValues, useForm } from 'react-hook-form';

import { type Dispatch, type SetStateAction } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import { changePasswordSchema } from './changePasswordShema';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
}

export const ChangePasswordForm = ({ isLast, setFormStep }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid }
    } = useForm<FieldValues>({
        mode: 'onTouched',
        reValidateMode: 'onChange',
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
            <div className='row'>
                <PasswordInput
                    size='medium'
                    register={register}
                    label='current_password'
                    variant='confirm'
                    placeholder='Текущий пароль'
                    error={
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
                    isError={!!errors.password1?.message}
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
                disabled={!isDirty || !isValid}
            >
                Продолжить
            </Button>
        </Form>
    );
};
