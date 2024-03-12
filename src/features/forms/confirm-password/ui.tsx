import { useForm } from 'react-hook-form';

import { PasswordInput } from 'src/features/inputs';
import { Button, Form } from 'src/shared/ui';
import { useNavigate } from 'react-router-dom';

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
        watch,
        formState: { errors, isDirty, isValid }
    } = useForm<FieldValues>({
        mode: 'onTouched',
        reValidateMode: 'onChange',
        defaultValues: { password1: '', password2: '' }
    });
    const navigate = useNavigate();
    const onSubmit = (data: FieldValues) => {
        if (setFormStep && !isLast) {
            setFormStep(curr => curr + 1);
        } else {
            console.log(data);

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
                isError={!!errors?.password1}
                isCreating={true}
            />
            <PasswordInput
                register={register}
                label='password2'
                placeholder='Подтвердите пароль'
                placeholderLabel='Подтвердите пароль'
                error={
                    isDirty && watch('password1') !== watch('password2')
                        ? 'Пароли не совпадают'
                        : ''
                }
            />
            <Button
                variant='secondary'
                size='large'
                type='submit'
                disabled={
                    !isDirty ||
                    !isValid ||
                    watch('password1') !== watch('password2')
                }
            >
                Зарегистрироваться
            </Button>
        </Form>
    );
};
