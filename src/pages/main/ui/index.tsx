import { useForm } from 'react-hook-form';

import { Button, Form, Link } from 'src/shared/ui';
import { PasswordInput, PhoneInput, CodeInput } from 'src/features/inputs';

export const MainPage = () => {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm({ mode: 'onBlur', reValidateMode: 'onChange' });

    return (
        <div>
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
                <Button variant='secondary' size='large' type='submit'>
                    Далее
                </Button>
            </Form>
            <Link to={'/auth'}>Auth</Link>
            <br />
            Главная
        </div>
    );
};
