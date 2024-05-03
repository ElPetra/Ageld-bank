import { useForm } from 'react-hook-form';

import { useAuth } from 'src/entities/user';
import { Button, Form, Text } from 'src/shared/ui';

import { CodeInput } from './code-input';

import type { FieldValues } from 'react-hook-form';
import type { Dispatch, SetStateAction } from 'react';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
    phone: string;
}

export const CodeForm = ({ isLast, setFormStep, phone }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { isDirty, isValid }
    } = useForm<FieldValues>({
        mode: 'onTouched',
        reValidateMode: 'onChange',
        defaultValues: { code: '' }
    });

    const { checkedCode, error } = useAuth();

    const onSubmit = async (data: FieldValues) => {
        const code = data.code.join('');
        const error = await checkedCode(phone, code);
        if (!error && setFormStep && !isLast) {
            setFormStep(curr => {
                return curr + 1;
            });
        }
    };
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Text size='xs'>
                На Ваш номер телефона отправлен 6-значный код подтверждения
            </Text>
            <CodeInput
                label='code'
                register={register}
                error={error}
                phone={phone}
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
