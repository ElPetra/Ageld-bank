import { useForm } from 'react-hook-form';

import { Button, Form, Text } from 'src/shared/ui';
import { DocumentInput } from 'src/features/inputs';
import { Greeting } from 'src/widgets/greeting';

export const MainPage = () => {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm({ mode: 'onBlur', reValidateMode: 'onChange' });

    return (
        <div>
            <div className='greeting'>
                <Greeting />
                <div className='greeting__warning-text'>
                    <Text size='l' weight='regular'>
                        Доступ в личный кабинет возможен с телефонного номера,
                        указанного при открытии счёта в нашем банке.
                        <br />
                        <br />
                        Для создания кабинета пользователя нажмите кнопку
                        РЕГИСТРАЦИЯ.
                    </Text>
                </div>
            </div>
            <div className='action-box'>
                <Form onSubmit={handleSubmit(data => console.log(data))}>
                    <DocumentInput
                        clear={() => setValue('document', '')}
                        label={'document'}
                        register={register}
                        isError={!!errors?.document}
                    />
                    <Button variant='secondary' size='large' type='submit'>
                        Далее
                    </Button>
                </Form>
            </div>
        </div>
    );
};
