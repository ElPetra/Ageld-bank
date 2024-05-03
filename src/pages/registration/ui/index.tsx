import { useState } from 'react';

import { Container } from 'src/shared/ui';
import { MessageCard } from 'src/entities/message';
import { MultiStepForm } from 'src/features/multi-step-form';
import {
    PhoneForm,
    SmsCodeForm,
    ConfirmPasswordForm
} from 'src/features/forms';

const SUCCESS = 'Кабинет пользователя успешно \n зарегистрирован';

export const RegistrationPage = () => {
    const [phone, setPhone] = useState<string>('');
    return (
        <Container>
            <MultiStepForm
                variant='registration'
                forms={[
                    {
                        id: 1,
                        title: 'Регистрация',
                        component: (
                            <PhoneForm
                                variant='registration'
                                setPhone={setPhone}
                            />
                        )
                    },
                    {
                        id: 2,
                        title: 'Введите код из смс',
                        component: <SmsCodeForm phone={phone} />
                    },
                    {
                        id: 3,
                        title: 'Придумайте пароль',
                        component: (
                            <ConfirmPasswordForm
                                variant='registration'
                                phone={phone}
                            />
                        )
                    },
                    {
                        id: 4,
                        title: '',
                        component: (
                            <MessageCard
                                icon='paper-airplane-lady'
                                width={400}
                                text={SUCCESS}
                                buttonText='Войти в кабинет'
                            />
                        ),
                        isResult: true
                    }
                ]}
            />
        </Container>
    );
};
