import { useForm } from 'react-hook-form';

import { PasswordInput } from 'src/features/inputs';
import { Button, Form } from 'src/shared/ui';

import type { FieldValues } from 'react-hook-form';

import type { Dispatch, SetStateAction } from 'react';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
}

export const CreatePassword = ({ isLast, setFormStep }: Props) => {
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

    return (
        <Form
            onSubmit={handleSubmit(data => {
                if (setFormStep && !isLast) {
                    setFormStep(curr => curr + 1);
                }
                console.log(data);
            })}
        >
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
