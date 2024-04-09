import { useNavigate } from 'react-router-dom';

import { PasswordInput } from 'src/features/inputs';
import { Button, Form } from 'src/shared/ui';
import { useGenerateTokenMutation } from 'src/shared/api';
import { setUser } from 'src/app/store/slices/userSlice';
import { useAppDispatch } from 'src/app/store/dispatch';
import { getErrorMessage } from 'src/shared/lib';

import { type FieldValues, useForm } from 'react-hook-form';

import { RouteName } from 'src/shared/model/index.js';

import type { Dispatch, SetStateAction } from 'react';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
}

export const EnterPasswordForm = ({ isLast, setFormStep }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { isDirty, isValid }
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
                .unwrap()
                .then(data => {
                    const accessToken = data.accessToken;
                    const refreshToken = data.refreshToken;
                    dispatch(
                        setUser({
                            phone: phone,
                            accessToken: accessToken,
                            refreshToken: refreshToken
                        })
                    );
                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('refreshToken', refreshToken);
                    if (accessToken && refreshToken) {
                        navigate(RouteName.MAIN_PAGE);
                    }
                });
            if (setFormStep && !isLast) {
                setFormStep(curr => curr + 1);
            }
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <PasswordInput
                register={register}
                label='password'
                error={getErrorMessage(error)}
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
