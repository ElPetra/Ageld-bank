import { useNavigate } from 'react-router-dom';

import { PasswordInput } from 'src/features/inputs';
import { Button, Form } from 'src/shared/ui';
import { useGenerateTokenMutation } from 'src/shared/api';

import { type FieldValues, useForm } from 'react-hook-form';

import type { Dispatch, SetStateAction } from 'react';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
}

export const EnterPasswordForm = ({ isLast, setFormStep }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid }
    } = useForm<FieldValues>({
        mode: 'onTouched',
        reValidateMode: 'onChange',
        defaultValues: { password: '' }
    });
    const navigate = useNavigate();
    const [generateToken, { error }] = useGenerateTokenMutation();

    const onSubmit = (data: FieldValues) => {
        const phone = localStorage.getItem('phone');
        if (phone) {
            generateToken({
                phoneNumber: phone,
                password: data.password
            }).then(data => {
                if ('data' in data) {
                    localStorage.setItem('accessToken', data.data.accessToken);
                    localStorage.setItem(
                        'refreshToken',
                        data.data.refreshToken
                    );
                }
            });
            if (!error && setFormStep && !isLast) {
                setFormStep(curr => curr + 1);
            }
            navigate('/success', {
                state: {
                    message: 'Вход выполнен.',
                    button: false
                }
            });
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <PasswordInput
                register={register}
                label='password'
                error={
                    errors?.password &&
                    'Пароль должен содержать от 6 до 20 символов'
                }
            />
            <Button
                variant='secondary'
                size='large'
                type='submit'
                disabled={!isDirty || !isValid}
            >
                Продолжить
            </Button>
        </Form>
    );
};
