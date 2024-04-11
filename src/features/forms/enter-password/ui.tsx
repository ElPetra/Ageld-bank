import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { PasswordInput } from 'src/features/inputs';
import { Button, Form } from 'src/shared/ui';
import { setUser } from 'src/app/store/slices/userSlice';
import { useAppDispatch } from 'src/app/store/dispatch';
import { getErrorMessage } from 'src/shared/lib';
import { useGenerateTokenMutation } from 'src/shared/api/auth';
import { RouteName } from 'src/shared/model';

import {
    getUserPhone,
    setTokens
} from 'src/shared/api/services/localStorageApi';

import  type { FieldValues } from 'react-hook-form';

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
        const phone = getUserPhone();
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
                    setTokens(data);
                    if (data) {
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
