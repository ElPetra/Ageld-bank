import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { CodeInput, PhoneInput } from 'src/features/inputs';
import { Button, Form } from 'src/shared/ui';

import { BackButton } from './go-back';
import { FormCard } from './form-card';

import './styles.scss';

interface Props {
    variant?: 'login' | 'registration' | 'none';
}
export const MultiStepForm = ({ variant = 'none' }: Props) => {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm({ mode: 'onBlur', reValidateMode: 'onChange' });
    const [formStep, setFormStep] = useState<number>(0);

    const onSubmit = (data: Props) => {
        console.log(data);
        setFormStep(curr => curr + 1);
    };

    return (
        <div className='multi-step-form'>
            {formStep > 0 && (
                <BackButton onClick={() => setFormStep(curr => curr - 1)} />
            )}
            <FormCard title='Регистрация' variant={variant}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    {formStep === 0 && (
                        <PhoneInput
                            clear={() => setValue('phone', '')}
                            label={'phone'}
                            register={register}
                            error={!!errors?.phone}
                        />
                    )}
                    {formStep === 1 && (
                        <CodeInput label='sms' register={register} error={''} />
                    )}
                    <Button variant='secondary' size='large' type='submit'>
                        Далее
                    </Button>
                </Form>
            </FormCard>
        </div>
    );
};
