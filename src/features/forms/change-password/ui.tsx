import { PasswordInput } from 'src/features/inputs';
import { Button, Form } from 'src/shared/ui';
import './styles.scss';

import { type FieldValues, useForm } from 'react-hook-form';

import { useState, type Dispatch, type SetStateAction } from 'react';

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
    const [samePassword, setSamePassword] = useState<boolean>(false);
    const onSubmit = (data: FieldValues) => {
        if (watch('current-password') === watch('password1')) {
            setSamePassword(curr => !curr);
            return;
        }
        if (setFormStep && !isLast && !samePassword) {
            setFormStep(curr => curr + 1);
        }
        console.log(data);
        console.log(samePassword);
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
                    error={
                        samePassword
                            ? 'Новый пароль должен отличаться от старого'
                            : ''
                    }
                />
                <PasswordInput
                    size='medium'
                    register={register}
                    label='password1'
                    isError={isDirty}
                    variant='create'
                    placeholder='Новый пароль'
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
                            ? 'Пароли не совпадают'
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
                    watch('password1') !== watch('password2')
                }
            >
                Продолжить
            </Button>
        </Form>
    );
};
