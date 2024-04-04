import { useForm } from 'react-hook-form';

import { CodeInput } from 'src/features/inputs';
import { Button, Form, Text } from 'src/shared/ui';
import { useCheckCodeMutation } from 'src/shared/api';
import { getErrorMessage } from 'src/shared/lib';

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

    const [checkCode, { error: checkCodeError }] = useCheckCodeMutation();
    const onSubmit = (data: FieldValues) => {
        const sms = data.sms.join('');
        const phone = localStorage.getItem('phone');
        if (phone) {
            checkCode({ phoneNumber: phone, code: sms })
                .unwrap()
                .then(() => {
                    if (setFormStep && !isLast) {
                        setFormStep(curr => curr + 1);
                    }
                });
        }
    };
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Text size='xs'>
                На Ваш номер телефона отправлен 6-значный код подтверждения
            </Text>
            <CodeInput
                label='sms'
                register={register}
                error={getErrorMessage(checkCodeError)}
            />
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
