import { useForm } from 'react-hook-form';

import { CodeInput } from 'src/features/inputs';
import { Button, Form, Text } from 'src/shared/ui';
import { useCheckCodeMutation } from 'src/shared/api';

import type { FieldValues } from 'react-hook-form';

import type { Dispatch, SetStateAction } from 'react';

interface Props {
    variant?: 'login' | 'registration';
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

    return (
        <Form
            onSubmit={handleSubmit(async data => {
                const sms = data.sms.join('');
                await checkCode(sms);
                if (!checkCodeError && setFormStep && !isLast) {
                    setFormStep(curr => curr + 1);
                }
            })}
        >
            <Text size='xs'>
                На Ваш номер телефона отправлен 6-значный код подтверждения
            </Text>
            <CodeInput
                label='sms'
                register={register}
                error={checkCodeError?.data?.message || ''}
            />
            <Button
                variant='secondary'
                size='large'
                type='submit'
                disabled={!isDirty || !isValid}
            >
                Далее
            </Button>
        </Form>
    );
};
