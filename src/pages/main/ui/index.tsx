import { useForm } from 'react-hook-form';

import { Button, Form } from 'src/shared/ui';
import { CodeInput, PasswordInput, PhoneInput } from 'src/features/inputs';
import { DocumentInput } from 'src/features/inputs/document-input';
import {
    CreatePassword,
    MultiStepForm,
    Registration,
    SmsCode
} from 'src/features/multi-step-form';

export const MainPage = () => {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm({ mode: 'onBlur', reValidateMode: 'onChange' });

    return (
        <div>
            <MultiStepForm
                variant={'registration'}
                forms={[
                    {
                        id: 1,
                        title: 'Регистрация',
                        component: <Registration />
                    },
                    {
                        id: 2,
                        title: 'Введите код из смс',
                        component: <SmsCode />
                    },
                    {
                        id: 3,
                        title: 'Придумайте пароль',
                        component: <CreatePassword />
                    }
                ]}
            />
            <br />
            <Form onSubmit={handleSubmit(data => console.log(data))}>
                <CodeInput label='sms' register={register} error={''} />
                <PhoneInput
                    clear={() => setValue('phone', '')}
                    label={'phone'}
                    register={register}
                    error={!!errors?.phone}
                />
                <PasswordInput
                    register={register}
                    label='password'
                    error={!!errors?.password}
                />
                <DocumentInput
                    clear={() => setValue('document', '')}
                    label={'document'}
                    register={register}
                    error={!!errors?.document}
                />
                <Button variant='secondary' size='large' type='submit'>
                    Далее
                </Button>
            </Form>
        </div>
    );
};
