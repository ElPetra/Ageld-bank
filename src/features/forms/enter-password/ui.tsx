import { PasswordInput } from 'src/features/inputs';
import { Button, Form } from 'src/shared/ui';

import { type FieldValues, useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';

import type { Dispatch, SetStateAction } from 'react';
import { useGenerateTokenMutation } from 'src/shared/api';

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
    const [generateToken] = useGenerateTokenMutation();

    const onSubmit = async (data: FieldValues) => {
        await generateToken({
            phoneNumber: '79234251422',
            password: data.password
        });
        if (setFormStep && !isLast) {
            setFormStep(curr => curr + 1);
        }
        navigate('/success', {
            state: {
                message: 'Вход выполнен.',
                button: false
            }
        });
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <PasswordInput
                register={register}
                label='password'
                isError={!!errors?.password}
                isCreating={true}
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
