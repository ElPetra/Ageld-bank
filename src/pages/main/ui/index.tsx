import { useForm } from 'react-hook-form';

import { Button, Form, Link } from 'src/shared/ui';
import { CodeInput, PasswordInput, PhoneInput } from 'src/features/inputs';
import { DocumentInput } from 'src/features/inputs/document-input';
import { MultiStepForm, Registration } from 'src/features/multi-step-form';

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
                        title: 'Регистрация2',
                        component: <Registration />
                    }
                ]}
            />
            <MultiStepForm
                isFork={true}
                document={{
                    title: 'Правила пользования СДБО',
                    pdf: 'src/pages/main/txt2pdf_65e87a0c52c4d.pdf'
                }}
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
            <Link to={'/auth'}>Auth</Link>
            <br />
            Главная
        </div>
    );
};
