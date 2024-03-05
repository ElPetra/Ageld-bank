import { useForm } from 'react-hook-form';

import { Button, Form, Link } from 'src/shared/ui';
import { ClearInput, PasswordInput } from 'src/features/inputs';

export const MainPage = () => {
    const {
        register,
        setValue,
        getValues,
        handleSubmit,
        clearErrors,
        formState: { errors }
    } = useForm({ mode: 'onTouched' });

    return (
        <div>
            <Form onSubmit={handleSubmit(data => console.log(data))}>
                <ClearInput
                    name='phone'
                    placeholder='Номер телефона'
                    pattern='8[0-9]{10}'
                    clear={() => setValue('phone', '')}
                    label='phone'
                    register={register}
                    value={getValues('phone')}
                    clearErrors={clearErrors}
                    error={
                        errors?.phone &&
                        'Введите, пожалуйста, валидный номер телефона'
                    }
                />
                <PasswordInput
                    name='password'
                    placeholder='Пароль'
                    label='password'
                    register={register}
                    value={getValues('password')}
                    clearErrors={clearErrors}
                    minLength={8}
                    error={
                        errors?.password &&
                        'Введите, пожалуйста, валидный пароль'
                    }
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
