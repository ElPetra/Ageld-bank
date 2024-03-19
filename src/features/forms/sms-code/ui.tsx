import { useForm } from 'react-hook-form';

import { CodeInput } from 'src/features/inputs';
import { Button, Form, Text } from 'src/shared/ui';

import type { FieldValues } from 'react-hook-form';

import type { Dispatch, SetStateAction } from 'react';

interface Props {
    variant?: 'login' | 'registration' | 'password-create';
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
}

export const SmsCodeForm = ({
    variant = 'login',
    isLast,
    setFormStep
}: Props) => {
    const {
        register,
        handleSubmit,
        formState: { isDirty, isValid }
    } = useForm<FieldValues>({
        mode: 'onTouched',
        reValidateMode: 'onChange',
        defaultValues: { sms: '' }
    });
    return (
        <Form
            onSubmit={handleSubmit(data => {
                if (setFormStep && !isLast) {
                    setFormStep(curr => curr + 1);
                }
                console.log(data.sms.join(''));
            })}
        >
            <Text size='xs'>
                На Ваш номер телефона отправлен 6-значный код подтверждения
            </Text>
            <CodeInput label='sms' register={register} error={''} />
            <Button
                variant='secondary'
                size={variant === 'password-create' ? 'medium' : 'large'}
                type='submit'
                disabled={!isDirty || !isValid}
            >
                {variant === 'password-create' ? 'Сменить пароль' : 'Далее'}
            </Button>
        </Form>
    );
};
