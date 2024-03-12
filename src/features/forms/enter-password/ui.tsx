import { PasswordInput } from 'src/features/inputs';
import { Button, Form } from 'src/shared/ui';

import { type FieldValues, useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';

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
        defaultValues: { password1: '' }
    });
    const navigate = useNavigate();
    const onSubmit = (data: FieldValues) => {
        if (setFormStep && !isLast) {
            setFormStep(curr => curr + 1);
        }
        console.log(data);

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
                label='password1'
                isError={!!errors?.password1}
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
