import { useForm } from 'react-hook-form';

import { Button, Form, Link } from 'src/shared/ui';
import { Header } from 'src/widgets/header';
import { Footer } from 'src/widgets/footer';
import { ClearInput, PasswordInput } from 'src/features/inputs';

export const MainPage = () => {
    const {
        register,
        setValue,
        getValues,
        handleSubmit,
        formState: { errors }
    } = useForm();

    return (
        <div>
            <Header />
            <Form onSubmit={handleSubmit(data => console.log(data))}>
                <ClearInput
                    type='tel'
                    placeholder='Номер телефона'
                    pattern='8[0-9]{10}'
                    clear={() => setValue('phone', '')}
                    label='phone'
                    register={register}
                    value={getValues('phone')}
                    error={
                        errors?.phone &&
                        'Введите, пожалуйста, валидный номер телефона'
                    }
                />
                <PasswordInput
                    register={register}
                    value={getValues('password')}
                    error={!!errors?.password}
                />
                <Button variant='secondary' size='large' type='submit'>
                    Далее
                </Button>
            </Form>
            <Link to={'/auth'}>Auth</Link>
            <br />
            Главная
            <Footer />
        </div>
    );
};
