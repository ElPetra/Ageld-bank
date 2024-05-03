import { useState } from 'react';

import { Container } from 'src/shared/ui';
import { EnterPasswordForm, PhoneForm, SmsCodeForm } from 'src/features/forms';
import { MultiStepForm } from 'src/features/multi-step-form';

export const AuthorizationPage = () => {
    const [phone, setPhone] = useState<string>('');

    return (
        <Container>
            <MultiStepForm
                variant='login'
                forms={[
                    {
                        id: 1,
                        title: 'Войдите в личный кабинет',
                        component: (
                            <PhoneForm variant='login' setPhone={setPhone} />
                        )
                    },
                    {
                        id: 2,
                        title: 'Введите код из смс',
                        component: <SmsCodeForm phone={phone} />
                    },
                    {
                        id: 3,
                        title: 'Введите пароль',
                        component: <EnterPasswordForm phone={phone} />
                    }
                ]}
            />
        </Container>
    );
};
