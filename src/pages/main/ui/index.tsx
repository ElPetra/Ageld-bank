import { useForm } from 'react-hook-form';

import { Button, Form, Link } from 'src/shared/ui';
import { ClearInput, PasswordInput } from 'src/features/inputs';
import { CodeInput } from 'src/features/inputs/code-input';

export const MainPage = () => {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm({ mode: 'onBlur', reValidateMode: 'onChange' });

    return (
        <div>
            <Form
                onSubmit={handleSubmit(data => {
                    console.log(data);
                })}
            >
                <CodeInput label='sms' register={register} error={''} />
                <ClearInput
                    type='tel'
                    placeholder='Номер телефона'
                    pattern='8[0-9]{10}'
                    clear={() => setValue('phone', '')}
                    label='phone'
                    register={register}
                    error={
                        errors?.phone &&
                        'Введите, пожалуйста, валидный номер телефона'
                    }
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
