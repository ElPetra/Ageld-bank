import { useNavigate } from 'react-router-dom';

import { PasswordInput } from 'src/features/inputs';
import { Button, Form } from 'src/shared/ui';
import { useGenerateTokenMutation } from 'src/shared/api';
import { setUser } from 'src/app/store/slices/userSlice';
import { useAppDispatch } from 'src/app/store/dispatch';

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
    const dispatch = useAppDispatch();
    const [generateToken, { error }] = useGenerateTokenMutation();

    const onSubmit = (data: FieldValues) => {
        const phone = localStorage.getItem('phone');
        if (phone) {
            generateToken({
                phoneNumber: phone,
                password: data.password
            })
                .then(data => {
                    if ('data' in data) {
                        const accessToken = data.data.accessToken;
                        const refreshToken = data.data.refreshToken;
                        dispatch(
                            setUser({
                                phone: phone,
                                accessToken: accessToken,
                                refreshToken: refreshToken
                            })
                        );
                        localStorage.setItem('accessToken', accessToken);
                        localStorage.setItem('refreshToken', refreshToken);
                    }
                })
                .then(() =>
                    navigate('/success', {
                        state: {
                            message: 'Вход выполнен.',
                            button: false
                        }
                    })
                );
            if (!error && setFormStep && !isLast) {
                setFormStep(curr => curr + 1);
            }
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
