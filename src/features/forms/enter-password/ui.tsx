import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'src/app/store';

import { PasswordInput } from 'src/features/inputs';
import { setUser } from 'src/entities/user';
import { Button, Form } from 'src/shared/ui';
import { getErrorMessage } from 'src/shared/lib';
import { useGenerateTokenMutation, localStorageApi } from 'src/shared/api';

import type { FieldValues } from 'react-hook-form';

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
        const phone = localStorageApi.getUserPhone();
        if (phone) {
            generateToken({
                phoneNumber: phone,
                password: data.password
            })
                .unwrap()
                .then(data => {
                    dispatch(
                        setUser({
                            phone: phone,
                            accessToken: data.accessToken,
                            refreshToken: data.refreshToken
                        })
                    );
                    localStorageApi.setTokens(
                        data.accessToken,
                        data.refreshToken
                    );
                    if (data) {
                        navigate('/');
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
