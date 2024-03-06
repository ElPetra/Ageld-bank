import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { PhoneInput } from 'src/features/inputs';
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
    const [formStep, setFormStep] = useState<number>(2);

    return (
        <div className='multi-step-form'>
            {formStep > 1 && (
                <BackButton onClick={() => setFormStep(curr => curr - 1)} />
            )}
            <FormCard title='Регистрация' variant={variant}>
                <Form onSubmit={handleSubmit(data => console.log(data))}>
                    <PhoneInput
                        clear={() => setValue('phone', '')}
                        label={'phone'}
                        register={register}
                        error={!!errors?.phone}
                    />
                    <Button variant='secondary' size='large' type='submit'>
                        Далее
                    </Button>
                </Form>
            </FormCard>
        </div>
    );
};
