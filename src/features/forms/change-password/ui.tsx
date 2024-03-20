import { PasswordInput } from 'src/features/inputs';
import { Button, Form } from 'src/shared/ui';
import './styles.scss';

import { type FieldValues, useForm } from 'react-hook-form';

import { type Dispatch, type SetStateAction } from 'react';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
}

export const ChangePasswordForm = ({ isLast, setFormStep }: Props) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isDirty, isValid }
    } = useForm<FieldValues>({
        mode: 'onTouched',
        reValidateMode: 'onChange',
        defaultValues: { password1: '' }
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
                    label='current-password'
                    variant='confirm'
                    placeholder='Текущий пароль'
                />
                <PasswordInput
                    size='medium'
                    register={register}
                    label='password1'
                    isError={!!errors?.password1}
                    variant='create'
                    placeholder='Новый пароль'
                    error={
                        watch('current-password') === watch('password1')
                            ? 'Новый пароль должен отличаться от старого'
                            : ''
                    }
                />
                <PasswordInput
                    size='medium'
                    register={register}
                    label='password2'
                    placeholder='Подтвердите новый пароль'
                    variant='confirm'
                    error={
                        isDirty &&
                        watch('password2') !== '' &&
                        watch('password1') !== watch('password2')
                            ? 'Новые пароли не совпадают'
                            : ''
                    }
                />
            </div>
            <Button
                variant='secondary'
                size='medium'
                type='submit'
                disabled={
                    !isDirty ||
                    !isValid ||
                    watch('password1') !== watch('password2') ||
                    watch('current-password') === watch('password1')
                }
            >
                Продолжить
            </Button>
        </Form>
    );
};
