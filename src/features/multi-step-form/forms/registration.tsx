import { CodeInput, PasswordInput, PhoneInput } from 'src/features/inputs';
import { Button, Form } from 'src/shared/ui';
import { useForm } from 'react-hook-form';

import type { Dispatch, ReactNode, SetStateAction } from 'react';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
    variant: 'phone' | 'code' | 'password';
}
interface Inputs {
    phone: ReactNode;
    code: ReactNode;
    password: ReactNode;
}

export const Registration = ({ isLast, setFormStep, variant }: Props) => {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm({ mode: 'onBlur', reValidateMode: 'onChange' });
    const inputs: Inputs = {
        phone: (
            <PhoneInput
                clear={() => setValue('phone', '')}
                label={'phone'}
                register={register}
                error={!!errors?.phone}
            />
        ),
        code: <CodeInput label='sms' register={register} error={''} />,
        password: (
            <PasswordInput
                register={register}
                label='password'
                error={!!errors?.password}
            />
        )
    };
    return (
        <Form
            onSubmit={handleSubmit(data => {
                if (setFormStep && !isLast) {
                    setFormStep(curr => curr + 1);
                }
                console.log(data);
            })}
        >
            {inputs[variant]}
            <Button variant='secondary' size='large' type='submit'>
                Далее
            </Button>
        </Form>
    );
};
